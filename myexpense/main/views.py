from django.shortcuts import render,render_to_response
from django.http import HttpResponse
from .models import Detail


def index(request):
    return render(request, 'basic.html')


def entry(request):
    return render(request, 'index.html')

def search(request):
      qst = Detail.objects.all().order_by('-date_deposite')

      if request.method == 'POST':     
            date_min = request.POST['fromDate']
            date_max = request.POST['toDate']
          
            if is_valid_queryparam(date_min):
                  qst = qst.filter(date_deposite__gte=date_min)

            if is_valid_queryparam(date_max):
                  qst = qst.filter(date_deposite__lte=date_max)
                  
      return render_to_response('ajax_search.html', {'query' : qst})

def add_amount(request):

      if request.method == 'POST':
            user = request.POST['user']
            amount = request.POST['amount']
            date = request.POST['date']

            qs = Detail(user_name=user, amount=amount, date_deposite=date)
            saveToDB(qs)

            return HttpResponse('')

def saveToDB(query):
    query.save()


def is_valid_queryparam(param):
    return param != '' and param is not None
