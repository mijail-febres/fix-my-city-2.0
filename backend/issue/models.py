from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Potential need to use choices for category


def user_directory_path(instance, filename):
    return f'{instance.title}/{filename}'

CATEGORY_CHOICES = [
    ('litter', 'Litter'),
    ('road_damage', 'Road Damage'),
    ('damage_to_public_property', 'Damage to Public Property'),
    ('graffiti', 'Graffiti'),
    ('insects_and_animals', 'Insects and Animals'),
    ('unmaintained_greenery', 'Unmaintained Greenery'),
    ('street_sign_issues', 'Street Sign Issues'),
    ('other', 'Other')
]

class Issue(models.Model):
    title = models.TextField(max_length=50)
    image = models.ImageField(upload_to=user_directory_path)
    content = models.TextField(max_length=300, null=True, blank=True)
    category = models.TextField(choices=CATEGORY_CHOICES, default='litter')
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
