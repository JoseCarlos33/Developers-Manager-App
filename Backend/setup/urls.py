from django.contrib import admin
from django.urls import path, include
from developers.views import DesenvolvedorViewSet, NivelViewSet, Welcome

urlpatterns = [
    path('', Welcome.as_view()),
    path('admin/', admin.site.urls),
    path('api/dev/', DesenvolvedorViewSet.as_view()),
    path('api/level/', NivelViewSet.as_view())
]
