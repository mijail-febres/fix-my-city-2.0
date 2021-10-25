from django.contrib.auth.models import AbstractUser
from django.db import models


def user_directory_path(instance, filename):
    return f'{instance.username}/{filename}'


class User(AbstractUser):
    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['username']

    username = models.CharField(max_length=40, unique=True)
    first_name = models.CharField(max_length=20, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    email = models.EmailField(unique=True)
    profile_picture = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    points = models.IntegerField(default=0)

    @property
    def status(self):
        if self.points < 50:
            return 'scout'
        elif self.points < 100:
            return 'knight'
        elif self.points < 500:
            return 'hero'
        else:
            return 'legend'

    def __str__(self):
        return self.email
