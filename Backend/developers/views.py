from rest_framework import routers, serializers, viewsets, status
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import NivelSerializer, DesenvolvedorSerializer
from .models import Nivel, Desenvolvedor
from rest_framework import filters, mixins, generics
from rest_framework.views import APIView
from django.http import Http404

class Welcome(APIView):

    def get(self, request, format=None):
        return Response(
            [   {
                    "Endpoints": [
                        {"Cadastro de Desenvolvedor(POST)": "http://localhost:8000/api/dev/"},
                        {"Lista de Desenvolvedores Cadastrados(GET)": "http://localhost:8000/api/dev/"},
                        {"Atualizar Informações de Desenvolvedores Cadastrados(PUT)": "http://localhost:8000/api/dev/'COLOQUE O ID DO DESENVOLVEDOR AQUI'"},
                        {"Deletar Desenvolvedor Cadastrado (DELETE)": "http://localhost:8000/api/dev/'COLOQUE O ID DO DESENVOLVEDOR AQUI'"},
                    ]
                }
            ]
        )
    
class DesenvolvedorViewSet( mixins.UpdateModelMixin, mixins.DestroyModelMixin, mixins.ListModelMixin, generics.GenericAPIView):
    
    queryset = Desenvolvedor.objects.all()
    serializer_class = DesenvolvedorSerializer
    
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

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

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)




class NivelViewSet(mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, mixins.ListModelMixin, generics.GenericAPIView):
    
    queryset = Nivel.objects.all()
    serializer_class = NivelSerializer
    
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


    