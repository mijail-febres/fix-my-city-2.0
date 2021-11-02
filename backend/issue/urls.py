from django.urls import path
from issue.views import CreateIssuesView, RetrieveUpdateDestroyIssueView, ListIssuesByUserView, ListIssuesView, \
    ToggleUpvoteIssueView, ListUpvotedIssuesByUserView, ListCategoriesView, GetIssuesByCategoryView, GetSolvedIssues, \
    GetSolvedIssuesByCategory

urlpatterns = [
    path('issues/new/', CreateIssuesView.as_view()),
    path('issues/', ListIssuesView.as_view()),
    path('issues/<int:pk>/', RetrieveUpdateDestroyIssueView.as_view()),
    path('issues/user/<int:pk>/', ListIssuesByUserView.as_view()),
    path('issues/upvote/<int:pk>/', ToggleUpvoteIssueView.as_view()),
    path('issues/upvoted/', ListUpvotedIssuesByUserView.as_view()),
    path('issues/categories/', ListCategoriesView.as_view()),
    path('issues/categories/<category>/', GetIssuesByCategoryView.as_view()),
    path('issues/resolved/', GetSolvedIssues.as_view()),
    path('issues/resolved/<category>/', GetSolvedIssuesByCategory.as_view())
]
