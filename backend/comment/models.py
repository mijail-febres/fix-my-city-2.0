from django.db import models
from django.contrib.auth import get_user_model
from issue.models import Issue

User = get_user_model()


class Comment(models.Model):
    content = models.TextField()
    user = models.ForeignKey(to=User, related_name='user_comments', on_delete=models.CASCADE)
    issue = models.ForeignKey(to=Issue, related_name='issue_comments', on_delete=models.CASCADE)
    last_update = models.DateTimeField(auto_now=True)
