from django.urls import path
from . import views

app_name = "marketplace"

urlpatterns = [
    path("get_products/", views.get_products, name="get_products"),
    path("get_product/", views.get_product, name="get_product"),
]