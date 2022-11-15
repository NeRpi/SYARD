from rest_framework.routers import SimpleRouter
from .views import MangaViewSet, GenreViewSet

router = SimpleRouter()

router.register('genres', GenreViewSet, basename='genres')
router.register('', MangaViewSet, basename='mangas')

urlpatterns = router.urls
