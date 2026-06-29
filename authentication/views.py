from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .models import User
from .serializers import RegisterSerializer
from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import LoginSerializer, UserSerializer, GoogleAuthSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from authentication.permissions import IsTherapist, IsActivityOwner, IsAdmin, IsStudent
from .models import TherapistProfile
from django.shortcuts import get_object_or_404


from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
class RegisterView(generics.CreateAPIView):

    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def create(self, request, *args, **kwargs):

        serializer = self.get_serializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        user = serializer.save()

        return Response(
            {
                "message": "User registered successfully",
                "user": {
                    "id": user.id,
                    "full_name": user.full_name,
                    "email": user.email,
                    "role": user.role,
                }
            },
            status=status.HTTP_201_CREATED
        )
    

class LoginView(generics.GenericAPIView):

    serializer_class = LoginSerializer

    def post(self, request):

        serializer = self.get_serializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        return Response(
            serializer.validated_data,
            status=status.HTTP_200_OK
        )    
    

class CurrentUserView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        serializer = UserSerializer(
            request.user
        )

        return Response(serializer.data)    
    
class TherapistDashboardView(APIView):

    permission_classes = [IsAuthenticated, IsTherapist]

    def get(self, request):
        return Response({"message": "Welcome Therapist"})

class CreateActivityView(APIView):

    permission_classes = [
        IsAuthenticated,
        IsActivityOwner
    ]

    def post(self, request):
        return Response({
            "message": "Activity Created"
        })        
    

class UserManagementView(APIView):

    permission_classes = [
        IsAuthenticated,
        IsAdmin
    ]

    def get(self, request):
        return Response({
            "message": "Admin Panel"
        })    
    

class StudentDashboardView(APIView):

    permission_classes = [
        IsAuthenticated,
        IsStudent
    ]

    def get(self, request):
        return Response({
            "message": "Welcome Student"
        })    


class GoogleAuthView(generics.GenericAPIView):

    serializer_class = GoogleAuthSerializer

    def post(self, request):

        serializer = self.get_serializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        return Response(
            serializer.validated_data,
            status=status.HTTP_200_OK
        )
    
class ApproveTherapistView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request, user_id):

        if request.user.role != "ADMIN":
            return Response({"error": "Not allowed"}, status=403)

        user = get_object_or_404(User, id=user_id)

        if user.role != "THERAPIST":
            return Response({"error": "Not therapist"}, status=400)

        user.is_approved = True
        user.save()

        return Response({"message": "Therapist approved"})
    
class TherapistRegisterView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        user = request.user

        if user.role != "THERAPIST":
            return Response({"error": "Not a therapist"}, status=403)

        if user.is_approved == "APPROVED":
            return Response({"error": "Already approved therapist cannot edit profile"}, status=400)

        profile, created = TherapistProfile.objects.get_or_create(user=user)

        profile.bio = request.data.get("bio", profile.bio)
        profile.experience_years = request.data.get("experience_years", profile.experience_years)

        if request.FILES.get("certificates"):
            profile.certificates = request.FILES["certificates"]

        profile.save()

        user.is_approved = "PENDING"
        user.save()

        return Response({
            "message": "Therapist profile submitted for approval"
        }, status=201)
    
class PendingTherapistsView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        if request.user.role != "ADMIN":
            return Response(
                {"error": "Not allowed"},
                status=403
            )

        therapists = TherapistProfile.objects.filter(
            user__is_approved=False
        )

        data = []

        for therapist in therapists:

            data.append({

                "user_id": therapist.user.id,

                "full_name": therapist.user.full_name,

                "email": therapist.user.email,

                "specialization": therapist.specialization,

                "experience": therapist.experience,

                "bio": therapist.bio,

                "languages": therapist.languages,

                "fee": therapist.fee,

                "rating": therapist.rating,

                "is_verified": therapist.is_verified,

                "is_available": therapist.is_available,

                "is_approved": therapist.user.is_approved,

            })

        return Response(data)