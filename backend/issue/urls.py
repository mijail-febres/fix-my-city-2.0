from django.urls import path
from issue.views import CreateIssuesView, RetrieveUpdateDestroyIssueView, ListIssuesByUserView, ListIssuesView, \
    ToggleUpvoteIssueView, ListUpvotedIssuesByUserView

urlpatterns = [
    path('issues/new/', CreateIssuesView.as_view()),
    path('issues/', ListIssuesView.as_view()),
    path('issues/<int:pk>/', RetrieveUpdateDestroyIssueView.as_view()),
    path('issues/user/<int:pk>/', ListIssuesByUserView.as_view()),
    path('issues/upvote/<int:pk>/', ToggleUpvoteIssueView.as_view()),
    path('issues/upvoted/', ListUpvotedIssuesByUserView.as_view()),
]
