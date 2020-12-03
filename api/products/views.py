from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework import permissions
from rest_framework.mixins import (
    CreateModelMixin,
    ListModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
    DestroyModelMixin,
)
from rest_framework.viewsets import GenericViewSet
from .models import Products
from .serializers import ProductsSerializer, UserSerializer
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated


class CustomCreateModelMixin(CreateModelMixin):
    permission_classes = (IsAuthenticated,)

class CustomUpdateModelMixin(UpdateModelMixin):
    permission_classes = (IsAuthenticated,)

class CustomDestroyModelMixin(DestroyModelMixin):
    permission_classes = (IsAuthenticated,)


class ProductsView(
    GenericViewSet,  # generic view functionality
    CustomCreateModelMixin,  # handles posts
    RetrieveModelMixin,  # handles gets for 1 product
    CustomUpdateModelMixin,  # handles puts and patches
    ListModelMixin,  # handle gets for all products
    CustomDestroyModelMixin,
):  # handle deletes

    serializer_class = ProductsSerializer
    queryset = Products.objects.exclude(status="deleted")

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(
            instance, data={"status": "deleted"}, partial=True
        )
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def create(self, request, *args, **kwargs):
        
        if int(request.data['quantity']) > 0:
            request.data['status'] = "available"
        else:
            request.data['status'] = "unavailable"
        
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserCreate(generics.CreateAPIView):

    model = get_user_model()
    permission_classes = [permissions.AllowAny]  # Or anon users can't register
    serializer_class = UserSerializer

