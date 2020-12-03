import uuid
import cloudinary

from django.db import models
from django.core.validators import MaxValueValidator


class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


# TODO: implement image field
# TODO: implement user foreing key
# TODO: implement category field


class Products(BaseModel):
    public_id = models.UUIDField(unique=True, default=uuid.uuid4, editable=False)
    product_code = models.CharField(max_length=255, blank=False, null=False)
    owner = models.ForeignKey(
        "auth.User", related_name="products", on_delete=models.CASCADE
    )
    title = models.CharField(max_length=255, blank=False, null=False)
    image = cloudinary.models.CloudinaryField("image", null=True)
    quantity = models.PositiveIntegerField(
        validators=[MaxValueValidator(10000)], blank=False, null=False
    )
    unit_price = models.DecimalField(
        max_digits=18, decimal_places=2, blank=False, null=False
    )
    STATUS_CHOICE = (
        ("available", "Disponível"),
        ("unavailable", "Indisponível"),
        ("deleted", "Deletado"),
    )
    status = models.CharField( max_length=20, choices=STATUS_CHOICE)
   

    def __str__(self):
        return f"[{self.public_id}: {self.title}]"
    
    def update_status(self):
        if self.quantity > 0:
            self.status = "available"
            
        else:
            self.status = "unavailable"
            

    def set_deleted_status(self):
        self.status = "deleted"

    class Meta:
        ordering = ["-created_at"]
