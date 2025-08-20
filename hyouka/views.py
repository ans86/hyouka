from django.http import HttpResponse
from django.shortcuts import render

def hyouka(request):
    return render(request, 'hyouka.html')