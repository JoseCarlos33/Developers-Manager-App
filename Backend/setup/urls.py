from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import SimpleRouter
from developers.views import DesenvolvedorViewSet, NivelViewSet

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/dev', DesenvolvedorViewSet.as_view({'get': 'list'})),
    path('api/level', NivelViewSet.as_view({'get': 'list'}))
]
