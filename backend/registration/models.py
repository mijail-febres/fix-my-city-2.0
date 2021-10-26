import random

from django.contrib.auth import get_user_model
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.db import models

User = get_user_model()


def code_generator(length=6):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class Registration(models.Model):
    status_choices = [
        (1, 'Inactive'),
        (2, 'Activated')
    ]

    code = models.IntegerField(default=code_generator)
    email = models.EmailField(max_length=400, blank=True, null=True, unique=True)
    status = models.IntegerField(choices=status_choices, default=1)

    def __str__(self):
        return f'ID {self.id}: Registration profile from {self.email}'

    @receiver(post_save, sender=User)
    def create_registration_profile(sender, instance, **kwargs):
        profile, created = Registration.objects.get_or_create(email=instance.email)
        if created:
            profile.status = 2
            profile.save()
        else:
            profile.status = 2
            profile.save()
