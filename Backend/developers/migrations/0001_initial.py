# Generated by Django 4.0.3 on 2022-03-13 03:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Desenvolvedor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=50)),
                ('sexo', models.CharField(max_length=20)),
                ('data_nascimento', models.DateField()),
                ('idade', models.IntegerField()),
                ('hobby', models.CharField(default='', max_length=11)),
            ],
        ),
        migrations.CreateModel(
            name='Nivel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nivel', models.CharField(max_length=20)),
                ('desenvolvedores', models.ManyToManyField(blank=True, related_name='Desenvolvedores', to='developers.desenvolvedor')),
            ],
        ),
        migrations.AddField(
            model_name='desenvolvedor',
            name='nivel',
            field=models.ManyToManyField(blank=True, related_name='Desenvolvedores', to='developers.nivel'),
        ),
    ]
