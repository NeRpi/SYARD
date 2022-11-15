from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import MyTokenObtainSerializer


class LoginView(TokenObtainPairView):
    serializer_class = MyTokenObtainSerializer
