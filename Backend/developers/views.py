from rest_framework import routers, serializers, viewsets, status
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import NivelSerializer, DesenvolvedorSerializer
from .models import Nivel, Desenvolvedor
from rest_framework import filters
from rest_framework.views import APIView

class Welcome(APIView):

    def get(self, request, format=None):
        return Response(
            [   {
                    "Endpoints": [
                        {"Cadastro de Desenvolvedor(POST)": "http://localhost:8000/api/dev/"},
                        {"Lista de Desenvolvedores Cadastrados(GET)": "http://localhost:8000/api/dev/"},
                    ]
                }
            ]
        )
    
class DesenvolvedorViewSet(APIView):
    serializer_class = DesenvolvedorSerializer

    def get(self, request, format=None):
        desenvolvedores = Desenvolvedor.objects.all()
        serializer = self.serializer_class(desenvolvedores, many=True)
        
        if serializer.data:
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response("No momento nao foi possível exibir os dados dos desenvolvedores", status=status.HTTP_400_BAD_REQUEST)

    def post(self, request, format=None):
        serializer = self.serializer_class(data=
            {   
                'nome': request.data['nome'],
                'sexo': request.data['sexo'],
                'data_nascimento': request.data['data_nascimento'],
                'idade': request.data['idade'],
                'hobby': request.data['hobby'],
                'nivel': request.data['nivel'],
            }
        )

        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class NivelViewSet(APIView):
    queryset = Nivel.objects.all()
    serializer_class = NivelSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['id']


    