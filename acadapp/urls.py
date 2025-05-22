from django.urls import path
from .import views

app_name = 'acadapp'

urlpatterns = [
    path('', views.home, name='home'),
    path('produto/', views.produto, name='produto'),
    path('contato/', views.contato, name='contato'),
    # Adicione outras URLs conforme necessário
]
