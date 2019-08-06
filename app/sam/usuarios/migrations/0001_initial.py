# Generated by Django 2.2 on 2019-08-06 06:39

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Alumno',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=255)),
                ('apellidos', models.CharField(max_length=255)),
                ('rut', models.CharField(max_length=50, unique=True)),
                ('generacion', models.IntegerField(default=2019)),
                ('email', models.EmailField(default=None, max_length=254, unique=True)),
                ('emailPersonal', models.EmailField(default=None, max_length=254)),
                ('es_Mechon', models.BooleanField(default=None)),
                ('usuario', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
