from django.contrib import admin
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from developers.views import DesenvolvedorViewSet, NivelViewSet, Welcome

urlpatterns = [
    path('', Welcome.as_view()),
    path('admin/', admin.site.urls),
    path('api/dev/', DesenvolvedorViewSet.as_view()),
    path('api/dev/<int:pk>/', DesenvolvedorViewSet.as_view()),
    path('api/level/', NivelViewSet.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)