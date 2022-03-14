from rest_framework import serializers
from .models import Desenvolvedor, Nivel

class DesenvolvedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Desenvolvedor
        fields = ('id', 'nome', 'sexo', 'data_nascimento', 'idade', 'hobby', 'nivel')

class NivelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nivel
        fields = "__all__"
