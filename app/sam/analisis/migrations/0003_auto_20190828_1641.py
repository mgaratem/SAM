# Generated by Django 2.2.4 on 2019-08-28 20:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('analisis', '0002_auto_20190827_1717'),
    ]

    operations = [
        migrations.AlterField(
            model_name='respuesta',
            name='actividad',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='alumno_actividad', to='usuarios.Actividad'),
        ),
    ]
