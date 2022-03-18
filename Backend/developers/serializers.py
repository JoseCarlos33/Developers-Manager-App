from rest_framework import serializers
from .models import Desenvolvedor, Nivel

class DesenvolvedorSerializer(serializers.ModelSerializer):
    nivel = serializers.StringRelatedField(many=False, read_only=True)
    class Meta:
        model = Desenvolvedor
        fields = ('id', 'nome', 'sexo', 'data_nascimento', 'idade', 'hobby', 'nivel')

class NivelSerializer(serializers.ModelSerializer):
    desenvolvedores = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Nivel
        fields = ["id", "nivel", "desenvolvedores"]
