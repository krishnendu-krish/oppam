from django.urls import path
from .views import RegisterView, LoginView, CurrentUserView,PendingTherapistsView, ApproveTherapistView, GoogleAuthView,  TherapistRegisterView, CustomTokenObtainPairView
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
  path("login/", CustomTokenObtainPairView.as_view(), name="login"),
    path("admin/therapists/pending/", PendingTherapistsView.as_view()),
        path("admin/approve-therapist/<int:user_id>/", ApproveTherapistView.as_view()),

]