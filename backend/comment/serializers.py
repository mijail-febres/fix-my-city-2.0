from rest_framework import serializers
from comment.models import Comment
from user.serializers import UserSerializer


class CreateCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['content', 'last_update', 'user', 'issue']
        read_only_fields = ['user', 'issue', 'last_update']


class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ['content', 'last_update', 'user', 'issue']
        read_only_fields = ['issue', 'user']
