"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including anothr URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework_simplejwt import views as jwt_views

schema_view = get_schema_view(
    openapi.Info(
        title="FixCT API",
        default_version='v1.0',
        description="fix-my-city",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="mail@antony.com"),
        license=openapi.License(name="fixCT License"),
    ),
    public=True,  # Set to False restrict access to protected endpoints
    permission_classes=(permissions.AllowAny,),  # Permissions for docs access
)

urlpatterns = [
                  path(
                      'backend/admin/',
                      admin.site.urls
                  ),
                  path(
                      'backend/api/auth/token/',
                      jwt_views.TokenObtainPairView.as_view(),
                      name='token_obtain_pair'
                  ),
                  path(
                      'backend/api/auth/token/refresh/',
                      jwt_views.TokenRefreshView.as_view(),
                      name='token_refresh'
                  ),
                  path(
                      'backend/api/auth/token/verify/',
                      jwt_views.TokenVerifyView.as_view(),
                      name='token_refresh'
                  ),
                  path(
                      'backend/api/',
                      include('user.urls')
                  ),
                  path(
                      'backend/api/',
                      include('issue.urls')
                  ),

                  path(
                      'backend/api/',
                      include('registration.urls')
                  ),
                  path(
                      'backend/api/',
                      include('comment.urls')
                  ),
                  path(
                      'backend/api/docs/',
                      schema_view.with_ui('swagger', cache_timeout=0),
                      name='schema-swagger-ui'
                  ),
                  ]
                  # https://docs.djangoproject.com/en/3.2/howto/static-files/
               
#             + static(settings.STATIC_URL,
#                     document_root=settings.STATIC_ROOT) \
#              + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
