from django.urls import path
from .views import RegisterView, LoginView, CurrentUserView, GoogleAuthView,  TherapistRegisterView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path(
        "register/",
        RegisterView.as_view(),
        name="register"
    ),

    path(
        "login/",
        LoginView.as_view(),
        name="login"
    ),
    path(
        "therapist/register/",
        TherapistRegisterView.as_view(),
        name="therapist-register"
    ),    
    path(
    "refresh/",
    TokenRefreshView.as_view(),
    name="token_refresh"
),
path(
    "me/",
    CurrentUserView.as_view(),
    name="current-user"
),
path(
    "google/",
    GoogleAuthView.as_view(),
    name="google-auth"
),

]