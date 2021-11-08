from django.contrib.auth.models import AbstractUser
from django.db import models


def user_directory_path(instance, filename):
    return f'{instance.username}/{filename}'


# Add a delete functionality that replicates to registration profile


class User(AbstractUser):
    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['username']

    username = models.CharField(max_length=40, unique=True)
    first_name = models.CharField(max_length=20, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    email = models.EmailField(unique=True)
    home_address = models.CharField(max_length=100, null=True, blank=True)
    home_latitude = models.FloatField(null=True, blank=True)
    home_longitude = models.FloatField(null=True, blank=True)
    profile_picture = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    points = models.IntegerField(default=0)
    notifications = models.BooleanField(default=False)
    is_notified = models.BooleanField(default=False)

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
