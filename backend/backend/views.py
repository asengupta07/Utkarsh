from django.shortcuts import render
from django.http import FileResponse
import os
from django.conf import settings
from django.http import Http404


def index(request):
    return render(request, 'index.html')

def serve_image(request, image_path):
    image_full_path = os.path.join(settings.BASE_DIR, 'products/', image_path)
    print("image_full_path: ", image_full_path)
    if os.path.isfile(image_full_path):
        response = FileResponse(open(image_full_path, 'rb'))
        return response
    raise Http404("Image not found")