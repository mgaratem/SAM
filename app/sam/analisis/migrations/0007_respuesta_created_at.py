# Generated by Django 2.2.4 on 2019-08-29 08:59

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('analisis', '0006_remove_respuesta_created_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='respuesta',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
