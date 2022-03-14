from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Desenvolvedor, Nivel

class DesenvolvedorSerializer(serializers.ModelSerializer):

    class Meta:
        ordering = ['-id']
        model = Desenvolvedor
        fields = ("id", "name", "biography", "date_of_birth", "books")
        extra_kwargs = {'Nivel': {'required': True}}

class NivelSerializer(serializers.ModelSerializer):
    desenvolvedores = DesenvolvedorSerializer(many=True, read_only=True)

    class Meta:
        ordering = ['-id']
        model = Nivel
        fields = ("id", "nivel")
        extra_kwargs = {'Desenvolvedor': {'required': False}}
