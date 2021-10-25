from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView, UpdateAPIView
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated

from project.permissions import IsOwnerOrReadOnly
from issue.models import Issue
from issue.serializers import IssueSerializer, CreateIssueSerializer

User = get_user_model()


class CreateIssuesView(CreateAPIView):

    queryset = Issue.objects.all()
    serializer_class = CreateIssueSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        try:
            serializer.save(user=self.request.user)
        except KeyError:
            serializer.save(user=self.request.user)


class ListIssuesView(ListAPIView):

    queryset = Issue.objects.all().exclude(status='resolved')
    serializer_class = IssueSerializer
    search_fields = ['title', 'category']


class RetrieveUpdateDestroyIssueView(RetrieveUpdateDestroyAPIView):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer
    permission_classes = [IsOwnerOrReadOnly]


class ListIssuesByUserView(ListAPIView):
    """
        get:
        Get the all the issues created by a specific user in chronological order
     """
    serializer_class = IssueSerializer

    def get_queryset(self):
        user_id = self.kwargs["pk"]
        return Issue.objects.filter(user=user_id).exclude(status='resolved').order_by("-created")


class ToggleUpvoteIssueView(UpdateAPIView):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer
    permission_classes = [IsAuthenticated]

    def patch(self, request, *args, **kwargs):
        issue = self.get_object()
        user = self.request.user

#        if user == issue.user:
#            return Response({'error': 'Cannot upvote own post'},
#                            status=status.HTTP_400_BAD_REQUEST)

        if user in issue.upvoted_by.all():
            issue.upvoted_by.remove(user)
            issue.user.points -= 10
            issue.user.save()
            return Response({'success': f' downvoted issue {issue.id}'}, status=status.HTTP_200_OK)
        else:
            issue.upvoted_by.add(user)
            issue.user.points += 10
            issue.user.save()
            return Response({'success': f' upvoted issue {issue.id}'}, status=status.HTTP_200_OK)


class ListUpvotedIssuesByUserView(ListAPIView):

    serializer_class = IssueSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        upvoted = self.request.user.upvoted_issues.all()
        return Issue.objects.filter(id__in=upvoted).order_by("-created")
