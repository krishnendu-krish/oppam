from django.db import models

from authentication.models import User


class TherapistProfile(models.Model):

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="therapist_profile"
    )

    specialization = models.CharField(
        max_length=100
    )

    experience = models.PositiveIntegerField()

    bio = models.TextField()

    languages = models.CharField(
        max_length=200
    )

    fee = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    rating = models.FloatField(
        default=0
    )

    is_verified = models.BooleanField(
        default=False
    )

    is_available = models.BooleanField(
        default=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):

        return self.user.full_name