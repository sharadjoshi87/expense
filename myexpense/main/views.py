from django.shortcuts import render, render_to_response
from django.http import HttpResponse
from .models import Detail


def index(request):
    return render(request, 'basic.html')


def entry(request):
    defaultUsers = {'Anand Chauhan': 'Anand Chauhan', 'Aman Johri': 'Aman Johri', 'Anil Kumar Sahu': 'Anil Kumar Sahu', 'Prashant Jain': 'Prashant Jain',
                    'Rahul Chakraborty': 'Rahul Chakraborty', 'Sharad Joshi': 'Sharad Joshi', 'Shobhit Sharma': 'Shobhit Sharma'}
    users = {}
    send = {}
    last_six = Detail.objects.all().order_by('-date_deposite')[:6]
    print(type(last_six))
    for ls in last_six:
        users[ls.user_name] = ls.user_name

    sorted_users = sorted(users.values())
    sorted_defaultusers = sorted(defaultUsers.values())
    print(sorted_defaultusers)
    print(sorted_users)

    diff = sorted(set(sorted_defaultusers) - set(sorted_users))
    print(diff)
    print(type(diff))

    for i in diff:
        send[i] = i

    return render(request, 'index.html', {'name':list(send.keys())[0]})


def search(request):
    qst = Detail.objects.all().order_by('-date_deposite')

    if request.method == 'POST':
        date_min = request.POST['fromDate']
        date_max = request.POST['toDate']

        if is_valid_queryparam(date_min):
            qst = qst.filter(date_deposite__gte=date_min)

        if is_valid_queryparam(date_max):
            qst = qst.filter(date_deposite__lte=date_max)

    return render_to_response('ajax_search.html', {'query': qst})


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

def detail(request):
    return render(request, 'detail.html')
