from django.contrib import admin

from .models import TherapistProfile


@admin.register(TherapistProfile)

class TherapistProfileAdmin(admin.ModelAdmin):

    list_display = [

        "user",

        "specialization",

        "experience",

        "fee",

        "rating",

        "is_verified",

        "is_available",

    ]

    search_fields = [

        "user__full_name",

        "specialization",

    ]

    list_filter = [

        "is_verified",

        "is_available",

        "specialization",

    ]