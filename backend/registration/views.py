from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from django.core.mail import send_mail
from django.http import HttpResponse
from rest_framework.generics import CreateAPIView, UpdateAPIView, GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from registration.models import Registration, code_generator
from registration.serializers import RegistrationSerializer, ValidationSerializer, PasswordResetSerializer, PasswordResetValidationSerializer
from project.settings import DEFAULT_FROM_EMAIL

User = get_user_model()


class RegistrationView(CreateAPIView):
    serializer_class = RegistrationSerializer
    permission_classes = []

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        instance = serializer.save()
        send_mail(
            'Thank you for signing up for fixmycity',
            f'Here is your e-mail validation code: {instance.code}.\n'
            'Please click on the following link to access validation:\n'
            'https://fix-my-city.app.propulsion-learn.ch/signupform',
            DEFAULT_FROM_EMAIL,
            [request.data['email']],
            fail_silently=False,
        )
        return HttpResponse(status=201)


class ValidationView(UpdateAPIView):
    serializer_class = ValidationSerializer
    permission_classes = []

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            User.objects.create_user(email=serializer.validated_data['email'],
                                     password=serializer.validated_data['password'],
                                     username=serializer.validated_data['username'])

        return Response(status.HTTP_200_OK)


class PasswordResetView(GenericAPIView):
    serializer_class = PasswordResetSerializer
    permission_classes = []

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        instance = Registration.objects.get(email=request.data['email'])
        instance.code = code_generator()
        instance.save()
        send_mail(
            'fixmycity password reset',
            f'Here is your password reset code: {instance.code}. You will need it to change your password.',
            DEFAULT_FROM_EMAIL,
            [request.data['email']],
            fail_silently=False,
        )
        return HttpResponse(status=201)


class PasswordResetValidationView(GenericAPIView):
    serializer_class = PasswordResetValidationSerializer
    permission_classes = []

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = User.objects.get(email=serializer.validated_data['email'])
            user.password = make_password(serializer.validated_data['password'])
            user.save()
            send_mail(
                'Password reset',
                'Your password was successfully reset\nCongratulations!!!',
                'team2.luna@gmail.com',
                [request.data['email']],
                fail_silently=False,
            )
            return Response(status.HTTP_200_OK)
