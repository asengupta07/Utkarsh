from django.db import models
from accounts.models import User

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    image = models.ImageField(upload_to='products', null=True, blank=True)
    seller = models.ForeignKey(User, on_delete=models.CASCADE)
    stock = models.IntegerField(default=0)
    type = models.CharField(max_length=100)
    size = models.CharField(max_length=100, blank=True, null=True)
    min_order = models.IntegerField(default=1)

    def save(self, *args, **kwargs):
        if self.type != "apparel":
            self.size = None
        super().save(*args, **kwargs)
    

    def __str__(self):
        return self.name