
from rest_framework.generics import ListAPIView, RetrieveUpdateAPIView, RetrieveAPIView
from django.contrib.auth import get_user_model
from project.permissions import IsOwnerOrReadOnly
from user.serializers import UserSerializer

User = get_user_model()


class RetrieveUpdateMyUserProfileView(RetrieveUpdateAPIView):

    serializer_class = UserSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_object(self):
        return User.objects.get(id=self.request.user.id)


class ListUserView(ListAPIView):
    """
        get:
        Get user data

        - Base URL: Returns list of all users
        - Search: Searches for instance of user by username, first and last name
            - Add search parameter for appropriate response

        - Combination: Searches for instance of user by search params, with pagination included
            - Add search , offset and limit parameters to enable pagination with search

     """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    search_fields = [ 'first_name', 'last_name', 'username']

    def get_queryset(self):
        return User.objects.exclude(id=self.request.user.id)


class RetrieveUserByIdProfile(RetrieveAPIView):

    queryset = User.objects.all()
    serializer_class = UserSerializer

