from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Product


@csrf_exempt
def get_products(request, id=None):
    if request.method == "GET":
        if id is not None:
            try:
                product = Product.objects.filter(id=id).values()
                return JsonResponse({"product": dict(product.values()[0])})
            except Product.DoesNotExist:
                return JsonResponse({"error": "Product not found"}, status=404)
        else:
            products = Product.objects.all()
            return JsonResponse({"products": list(products.values())})
    else:
        return JsonResponse({"error": "GET request required."})
    

@csrf_exempt
def get_product(request):
    if request.method == "POST":
        product_id = request.POST["product_id"]
        product = Product.objects.get(id=product_id)
        return JsonResponse({"product": product.to_dict()})
    else:
        return JsonResponse({"error": "GET request required."})