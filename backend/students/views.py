from rest_framework import generics, status
from rest_framework.response import Response
from .models import Student, CheckIn
from .serializers import StudentSerializer, CheckInSerializer

class StudentListCreateView(generics.ListCreateAPIView):
	queryset = Student.objects.all()
	serializer_class = StudentSerializer

class CheckInListCreateView(generics.ListCreateAPIView):
	queryset = CheckIn.objects.select_related('student').all().order_by('-timestamp')
	serializer_class = CheckInSerializer
