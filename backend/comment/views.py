from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from comment.models import Comment
from comment.serializers import CreateCommentSerializer, CommentSerializer
from issue.models import Issue
from project.permissions import IsOwnerOrReadOnly


class CreateCommentView(CreateAPIView):

    queryset = Comment.objects.all()
    serializer_class = CreateCommentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        issue = Issue.objects.get(id=self.kwargs['pk'])
        try:
            serializer.save(user=self.request.user, issue=issue)
        except KeyError:
            serializer.save(user=self.request.user)


class ListCommentView(ListAPIView):

    queryset = Issue.objects.all().order_by("-created")
    serializer_class = CommentSerializer


class RetrieveUpdateDestroyCommentView(RetrieveUpdateDestroyAPIView):
    queryset = Issue.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsOwnerOrReadOnly]
