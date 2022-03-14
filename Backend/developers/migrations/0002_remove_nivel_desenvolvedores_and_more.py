# Generated by Django 4.0.3 on 2022-03-13 03:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('developers', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='nivel',
            name='desenvolvedores',
        ),
        migrations.RemoveField(
            model_name='desenvolvedor',
            name='nivel',
        ),
        migrations.AddField(
            model_name='desenvolvedor',
            name='nivel',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='developers.nivel'),
            preserve_default=False,
        ),
    ]
