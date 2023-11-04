from django.urls import path
import views

urlpatterns = [
    path('register_seller', views.register_seller, name='register_seller'),
]