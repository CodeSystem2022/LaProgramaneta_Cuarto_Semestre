from django.contrib import admin
from .models impor Cart, Customer, Product, Pyment, OrderPlaced
from django.utils.html impor fromt_html
from django.urls impor reverse

# Register your models here.

#Registre el modelo Product en el panel de administracion
@admin.register(Product)
class ProductModelAdmin(admin,ModelAdmin):
    list_display=['id','title','disconted-price','cartegory','product_image']
    
# Registre el modelo Custmer en el panel de amdinistracion
@admin.register(Customer)
class CustoModelAdmin(admin.ModelAdmin):
    list_display=['id','user','locality','city','state','zipcode']
    
# Registra el modelo Cart en el panel de administracion
@admin.register(Cart)
class CartModelAmind(admin.ModelAdmin):
    list_display = ['id','user','products','quantity']
    
    #Define una funcion para mostrar enlaces a la pagina de edicion de productos al panel de adiministracion
    def productos(self, obj):
        # Genera un enlace a la pagina de edicion del poroducto usando el ID del producto
        link = reverse("admin:app_product_change", args=[obj.product.pk])
        return format_html('<a href="{}">{}</a', link, obj.product.title)
    
# Registra el modelo Payment en ek panel de administracion
@admin.registre(Payment)
class PaymentModelAdmin(admin.ModelAdmin):
    list_display=[]