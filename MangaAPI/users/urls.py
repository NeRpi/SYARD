from django.urls import path
from .views import *
from .api import *

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('login/', LoginView.as_view()),
    path('register/', RegisterApi.as_view()),
]
