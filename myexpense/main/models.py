from django.db import models

# app_name = 'main'
class Detail(models.Model):
    user_name = models.CharField(max_length=50)
    amount = models.IntegerField()
    date_deposite = models.DateField()

    def __str__(self):
        return self.user_name