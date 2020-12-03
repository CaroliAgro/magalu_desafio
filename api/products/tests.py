from django.test import TestCase, Client
from django.test import client
from .models import Products

# ! TODO: should not create a product without a user_id


class ProductsModelTests(TestCase):

    client = Client()
    # ? Product Test
    def test_product_has_title_attribute(self):
        product = Products(title="Fake Product")
        self.assertEqual(product.title, "Fake Product")

    def test_product_has_unit_price_attribute(self):
        product = Products(unit_price=99.99)
        self.assertEqual(product.unit_price, 99.99)

    def test_product_has_product_code_attribute(self):
        product = Products(product_code="12732eh")
        self.assertEqual(product.product_code, "12732eh")

    def test_product_has_quantity_attribute(self):
        product = Products(quantity=10)
        self.assertEqual(product.quantity, 10)


    