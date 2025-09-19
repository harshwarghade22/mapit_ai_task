from django.urls import path
from .views import StudentListCreateView, CheckInListCreateView

urlpatterns = [
    path('students/', StudentListCreateView.as_view(), name='student-list-create'),
    path('checkins/', CheckInListCreateView.as_view(), name='checkin-list-create'),
]
