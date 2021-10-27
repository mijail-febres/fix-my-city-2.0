from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Registration

User = get_user_model()


class RegistrationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(min_length=1)

    def validate(self, data):
        valid_email = data.get('email', 0)
        if Registration.objects.filter(email__exact=valid_email):
            raise serializers.ValidationError('Email already taken')
        return data

    class Meta:
        model = Registration
        fields = ['email']


class ValidationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(min_length=1)
    username = serializers.CharField(max_length=75, min_length=1)
    code = serializers.CharField(min_length=1)
    password = serializers.CharField(min_length=1)
    password_repeat = serializers.CharField(min_length=1)

    def validate(self, data):
        request_email = data.get('email', 0)
        request_code = data.get('code', 0)
        request_password = data.get('password', 0)
        request_password_repeat = data.get('password_repeat', 0)
        if not Registration.objects.filter(email__exact=request_email):
            raise serializers.ValidationError('Wrong email')
        if not Registration.objects.filter(code__exact=request_code):
            raise serializers.ValidationError('Wrong code')
        if not Registration.objects.filter(email__exact=request_email, code__exact=request_code):
            raise serializers.ValidationError('Email and registration code do not match')
        if request_password != request_password_repeat:
            raise serializers.ValidationError('The two passwords do not match')
        return data

    class Meta:
        model = Registration
        fields = ['id', 'email', 'code', 'username', 'password', 'password_repeat']


class PasswordResetSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(min_length=1)

    def validate(self, data):
        valid_email = data.get('email', 0)
        if not Registration.objects.filter(email__exact=valid_email):
            raise serializers.ValidationError('Incorrect Email')
        return data

    class Meta:
        model = Registration
        fields = ['email']


class PasswordResetValidationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(min_length=1)
    code = serializers.CharField(min_length=1)
    password = serializers.CharField(min_length=1)
    password_repeat = serializers.CharField(min_length=1)

    def validate(self, data):
        request_email = data.get('email', 0)
        request_code = data.get('code', 0)
        request_password = data.get('password', 0)
        request_password_repeat = data.get('password_repeat', 0)
        if not Registration.objects.filter(email__exact=request_email):
            raise serializers.ValidationError('Wrong email')
        if not Registration.objects.filter(code__exact=request_code):
            raise serializers.ValidationError('Wrong code')
        if not Registration.objects.filter(email__exact=request_email, code__exact=request_code):
            raise serializers.ValidationError('Email and code do not match')
        if request_password != request_password_repeat:
            raise serializers.ValidationError('The provided passwords do not match')
        return data

    class Meta:
        model = Registration
        fields = ['id', 'email', 'code', 'password', 'password_repeat']
