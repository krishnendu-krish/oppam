from rest_framework.permissions import BasePermission


class IsAdmin(BasePermission):

    def has_permission(
        self,
        request,
        view
    ):
        return (
            request.user.is_authenticated and
            request.user.role == "ADMIN"
        )


class IsTherapist(BasePermission):

    def has_permission(self, request, view):

        return (
            request.user.is_authenticated and
            request.user.role == "THERAPIST" and
            request.user.is_approved == "APPROVED"
        )


class IsStudent(BasePermission):

    def has_permission(
        self,
        request,
        view
    ):
        return (
            request.user.is_authenticated and
            request.user.role == "STUDENT"
        )


class IsActivityOwner(BasePermission):

    def has_permission(
        self,
        request,
        view
    ):
        return (
            request.user.is_authenticated and
            request.user.role == "ACTIVITY_OWNER"
        )
    
    