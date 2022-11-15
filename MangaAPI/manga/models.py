from django.db import models


class Genre(models.Model):
    genre = models.CharField(max_length=20)

    def __str__(self):
        return self.genre


class Manga(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    description = models.TextField()
    genres = models.ManyToManyField(Genre)

    def __str__(self):
        return self.name
