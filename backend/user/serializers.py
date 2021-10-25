from rest_framework import serializers
from django.contrib.auth import get_user_model


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'profile_picture',
                  'upvoted_issues', 'user_issues', 'date_joined', 'last_login', 'points', 'status', 'user_comments', 'is_superuser']
        read_only_fields = ['id',
                            'user_issues', 'upvoted_issues', 'date_joined', 'last_login']
