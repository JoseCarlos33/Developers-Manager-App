from django.db import models

class Nivel(models.Model):
    nivel = models.CharField(max_length=20)
    
    def __str__(self):
        return self.nivel

class Desenvolvedor(models.Model):

    nivel = models.ForeignKey(Nivel, related_name='desenvolvedores', on_delete=models.PROTECT, blank=True, null=True)
    nome = models.CharField(max_length=50)
    sexo = models.CharField(max_length=20)
    data_nascimento = models.DateField()
    idade = models.IntegerField()
    hobby = models.CharField(max_length=11, default="")

    def __str__(self):
        return self.nome


        
