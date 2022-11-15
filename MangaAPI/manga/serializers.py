from rest_framework import serializers
from .models import *


class MangaSerializers(serializers.ModelSerializer):
    class Meta:
        model = Manga
        fields = ['id', 'name', 'price', 'description', 'genres']


class GenreSerializers(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ['id', 'genre']
