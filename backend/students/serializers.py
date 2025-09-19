from rest_framework import serializers
from .models import Student, CheckIn

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'name', 'email', 'student_id']

class CheckInSerializer(serializers.ModelSerializer):
    student = StudentSerializer(read_only=True)
    student_id = serializers.CharField(write_only=True)

    class Meta:
        model = CheckIn
        fields = ['id', 'student', 'student_id', 'timestamp']

    def create(self, validated_data):
        student_id = validated_data.pop('student_id')
        try:
            student = Student.objects.get(student_id=student_id)
            return CheckIn.objects.create(student=student, **validated_data)
        except Student.DoesNotExist:
            from rest_framework.exceptions import ValidationError
            raise ValidationError({
                'detail': f'Student with ID {student_id} is not registered in the system.'
            })
