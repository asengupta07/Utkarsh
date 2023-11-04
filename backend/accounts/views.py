from .models import User, Seller
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile


@csrf_exempt
def register_seller(request):
    if "user_id" in request.session:
        return
    if request.method == "POST":
        first_name = request.POST["first_name"]
        last_name = request.POST["last_name"]
        address1 = request.POST["address1"]
        address2 = request.POST["address2"]
        city = request.POST["city"]
        state = request.POST["state"]
        pin = request.POST["pin"]
        address = address1 + "," + address2 + "," + city + "," + state + "," + pin
        email = request.POST["email"]
        phone = request.POST["phone"]
        password = request.POST["password"]
        confirm_password = request.POST["confirm_password"]
        aadhar = request.POST["aadhar"]
        voter = request.POST["voter"]
        pan = request.POST["pan"]
        gst = request.POST["gst"]
        image = request.FILES["image"]
        image_path = default_storage.save('sellers/' + image.name, ContentFile(image.read()))
        if password == confirm_password:
            if Seller.objects.filter(aadhar=aadhar).exists():
                return
            user = User(
                first_name=first_name,
                last_name=last_name,
                address=address,
                phone=phone,
                email=email,
                password=password,
            )
            user.save()
            seller = Seller(
                user=user,
                first_name=first_name,
                last_name=last_name,
                address=address,
                phone=phone,
                email=email,
                password=password,
                image=image_path,
                aadhar=aadhar,
                voter=voter,
                pan=pan,
                gst=gst,
            )
            seller.save()
    
