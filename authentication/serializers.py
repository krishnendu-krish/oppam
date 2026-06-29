from rest_framework import serializers
from .models import User
from django.contrib.auth import authenticate

from google.oauth2 import id_token
from google.auth.transport import requests
from django.conf import settings

from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token["full_name"] = user.full_name
        token["email"] = user.email
        token["role"] = user.role
        token["is_approved"] = user.is_approved

        return token


class RegisterSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True, min_length=8)

    class Meta:
        model = User
        fields = ["id", "full_name", "email", "password", "role"]
        read_only_fields = ["id"]

    def validate_email(self, value):
        value = value.lower().strip()

        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email already exists.")

        return value

    def validate_role(self, value):
        allowed_roles = ["USER", "STUDENT", "THERAPIST", "ACTIVITY_OWNER"]

        if value not in allowed_roles:
            raise serializers.ValidationError("Invalid role selected.")

        return value

    def create(self, validated_data):
        password = validated_data.pop("password")

        user = User.objects.create_user(
            password=password,
            **validated_data
        )

        return user


class LoginSerializer(serializers.Serializer):

    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")

        user = authenticate(username=email, password=password)

        if not user:
            raise serializers.ValidationError("Invalid email or password")

        refresh = RefreshToken.for_user(user)
        access = refresh.access_token

        access["full_name"] = user.full_name
        access["email"] = user.email
        access["role"] = user.role
        access["is_approved"] = user.is_approved

        print(
            {
                "user": {
                    "id": user.id,
                    "full_name": user.full_name,
                    "email": user.email,
                    "role": user.role,
                    "is_approved": user.is_approved,
                }
            }
        )

        return {
            "access": str(access),
            "refresh": str(refresh),
            "user": {
                "id": user.id,
                "full_name": user.full_name,
                "email": user.email,
                "role": user.role,
                "is_approved": user.is_approved,
            }
        }


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ["id", "full_name", "email", "role", "created_at"]


class GoogleAuthSerializer(serializers.Serializer):

    token = serializers.CharField()

    def validate(self, attrs):
        token = attrs.get("token")

        try:
            user_data = id_token.verify_oauth2_token(
                token,
                requests.Request(),
                settings.GOOGLE_CLIENT_ID
            )

            email = user_data["email"]
            name = user_data.get("name", "")

        except Exception:
            raise serializers.ValidationError("Invalid Google Token")

        user, created = User.objects.get_or_create(
            email=email,
            defaults={
                "full_name": name,
                "auth_provider": "GOOGLE",
                "role": "USER"
            }
        )

        refresh = RefreshToken.for_user(user)
        access = refresh.access_token

        access["full_name"] = user.full_name
        access["email"] = user.email
        access["role"] = user.role
        access["is_approved"] = user.is_approved

        print(
            {
                "user": {
                    "id": user.id,
                    "full_name": user.full_name,
                    "email": user.email,
                    "role": user.role,
                    "is_approved": user.is_approved,
                }
            }
        )

        return {
            "access": str(access),
            "refresh": str(refresh),
            "user": {
                "id": user.id,
                "full_name": user.full_name,
                "email": user.email,
                "role": user.role,
            }
        }