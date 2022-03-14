from django.contrib import admin
from . import models

class Desenvolvedores(admin.ModelAdmin):
    list_display = ('id','nome')
    list_display_links = ('nome', 'id')
    search_fields = ('nome','nivel')
    list_per_page = 10

class Niveis(admin.ModelAdmin):
    list_display = ('id', 'nivel')
    list_display_links = (['id'])
    search_fields = ('nivel', 'id')
    list_per_page = 10

admin.site.register(models.Desenvolvedor, Desenvolvedores)
admin.site.register(models.Nivel, Niveis)