from django.db import models

class Student(models.Model):
	name = models.CharField(max_length=100)
	email = models.EmailField(unique=True)
	student_id = models.CharField(max_length=20, unique=True)

	def __str__(self):
		return f"{self.name} ({self.student_id})"

class CheckIn(models.Model):
	student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='checkins')
	timestamp = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return f"{self.student.name} checked in at {self.timestamp}"
