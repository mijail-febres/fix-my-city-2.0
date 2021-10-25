from django.urls import path
from comment.views import CreateCommentView, ListCommentView, RetrieveUpdateDestroyCommentView

urlpatterns = [
    path('comments/new/<int:pk>/', CreateCommentView.as_view()),
    path('comments/', ListCommentView.as_view()),
    path('comment/<int:pk>/', RetrieveUpdateDestroyCommentView.as_view()),
    ]
