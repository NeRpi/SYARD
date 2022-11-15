from rest_framework import viewsets
from .serializers import MangaSerializers, GenreSerializers
from .models import Manga, Genre


class MangaViewSet(viewsets.ModelViewSet):
    queryset = Manga.objects.all()
    serializer_class = MangaSerializers


class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializers
