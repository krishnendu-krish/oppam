from rest_framework import generics

from .models import TherapistProfile
from .serializers import TherapistSerializer


class TherapistListView(generics.ListAPIView):

    queryset = TherapistProfile.objects.filter(
        is_available=True
    )

    serializer_class = TherapistSerializer



class TherapistDetailView(generics.RetrieveAPIView):

    queryset = TherapistProfile.objects.all()

    serializer_class = TherapistSerializer