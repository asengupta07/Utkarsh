from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from marketplace.models import Product


@csrf_exempt
def get_products(request):
    if request.method == "GET":
        products = Product.objects.all()
        print(list(products.values()))
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

def index(request):
    return render(request, 'index.html')