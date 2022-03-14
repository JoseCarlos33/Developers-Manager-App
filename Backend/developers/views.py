from django.shortcuts import render
from rest_framework import routers, serializers, viewsets, status
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import NivelSerializer, DesenvolvedorSerializer
from .models import Nivel, Desenvolvedor
from rest_framework import filters

class DesenvolvedorViewSet(viewsets.ModelViewSet):
    queryset = Desenvolvedor.objects.all()
    serializer_class = DesenvolvedorSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['id']
    

class NivelViewSet(viewsets.ModelViewSet):
    queryset = Nivel.objects.all()
    serializer_class = NivelSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['id']


    