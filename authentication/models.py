from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager


class UserManager(BaseUserManager):

    def create_user(self, email, password=None, **extra_fields):

        if not email:
            raise ValueError("Email is required")

        email = self.normalize_email(email)

        user = self.model(
            email=email,
            **extra_fields
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password=None, **extra_fields):

        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("role", "ADMIN")

        return self.create_user(
            email,
            password,
            **extra_fields
        )


class User(AbstractUser):

    ROLE_CHOICES = (
        ("USER", "User"),
        ("STUDENT", "Student"),
        ("THERAPIST", "Therapist"),
        ("ACTIVITY_OWNER", "Activity Owner"),
        ("ADMIN", "Admin"),
    )

    AUTH_PROVIDERS = (
        ("EMAIL", "Email"),
        ("GOOGLE", "Google"),
    )


    APPROVAL_STATUS = (
        ("PENDING", "Pending"),
        ("APPROVED", "Approved"),
        ("REJECTED", "Rejected"),
    )

    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    is_approved = models.CharField(
        max_length=20,
        choices=APPROVAL_STATUS,
        default="PENDING"
    )
    username = None

    full_name = models.CharField(
        max_length=200
    )

    email = models.EmailField(
        unique=True
    )

    role = models.CharField(
        max_length=30,
        choices=ROLE_CHOICES,
        default="USER"
    )

    auth_provider = models.CharField(
        max_length=20,
        choices=AUTH_PROVIDERS,
        default="EMAIL"
    )

 

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()

    is_verified = models.BooleanField(
    default=False
)

    is_profile_completed = models.BooleanField(
    default=False
)

    def __str__(self):
        return f"{self.email} - {self.role}"



class TherapistProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    bio = models.TextField(blank=True)
    certificates = models.FileField(upload_to="certificates/")
    experience_years = models.IntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)  