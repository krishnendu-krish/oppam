from rest_framework import serializers

from .models import TherapistProfile


class TherapistSerializer(serializers.ModelSerializer):

    full_name = serializers.CharField(
        source="user.full_name",
        read_only=True
    )

    email = serializers.EmailField(
        source="user.email",
        read_only=True
    )

    class Meta:

        model = TherapistProfile

        fields = [

            "id",

            "full_name",

            "email",

            "specialization",

            "experience",

            "bio",

            "languages",

            "fee",

            "rating",

            "is_verified",

            "is_available"

        ]