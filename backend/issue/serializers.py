from rest_framework import serializers

from issue.models import Issue
from user.serializers import UserSerializer
from comment.serializers import CommentSerializer


class IssueSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    upvote_count = serializers.SerializerMethodField(read_only=True)
    # with a many 2 many relation you need to accept many=True
    issue_comments = CommentSerializer(read_only=True, many=True)

    def get_upvote_count(self, obj):
        return obj.upvoted_by.count()

    class Meta:
        model = Issue
        fields = ['id', 'title', 'content', 'category', 'status', 'adress', 'longitude', 'latitude', 'city', 'zip', 'image', 'created', 'modified', 'issue_comments', 'upvoted_by', 'upvote_count', 'user']
        read_only_fields = ['id', 'created', 'modified', 'user', 'upvoted_by', 'upvote_count']
        ordering = ['upvote_count']


class CreateIssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issue
        fields = ['id', 'title', 'longitude', 'latitude', 'category', 'adress', 'city', 'zip', 'image', 'created',
                  'modified', 'content']
        read_only_fields = ['id', 'created', 'modified']
