from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


def user_directory_path(instance, filename):
    return f'{instance.title}/{filename}'


class Issue(models.Model):
    title = models.TextField(max_length=50)
    image = models.ImageField(upload_to=user_directory_path)
    content = models.TextField(max_length=300, null=True, blank=True)
    category = models.TextField(max_length=300, default=None)
    adress = models.TextField(max_length=300, default=None)
    zip = models.CharField(max_length=5)
    latitude = models.FloatField()
    longitude = models.FloatField()
    city = models.TextField(max_length=20)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(to=User, related_name='user_issues', on_delete=models.CASCADE)
    upvoted_by = models.ManyToManyField(to=User, related_name='upvoted_issues')
    status = models.TextField (max_length=100, default='open')


    def __str__(self):
        return self.title
