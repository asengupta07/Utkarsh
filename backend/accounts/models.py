from django.db import models

class User(models.Model):
    id = models.AutoField(primary_key=True)
    password = models.CharField(max_length=100)
    email = models.CharField(max_length=100, default="")
    phone = models.CharField(max_length=100, unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.TextField()

    def __str__(self):
        return self.first_name + " " + self.last_name
    

class Seller(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='sellers', null=True, blank=True)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)
    num_ratings = models.IntegerField(default=0)

    def __str__(self):
        return self.name
