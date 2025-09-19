import { useState } from 'react';
import { UserPlus, Mail, IdCard } from 'lucide-react';

export const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    student_id: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    try {
      const response = await fetch('http://localhost:8000/api/students/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      
      if (response.ok) {
        setFormData({ name: '', email: '', student_id: '' });
        setStatus({
          type: 'success',
          message: 'Student successfully registered!'
        });
      } else {
        setStatus({
          type: 'error',
          message: data.detail || 'Failed to register student. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({
        type: 'error',
        message: 'An error occurred while registering the student.'
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900">
              Full Name
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pl-11 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter student's full name"
                required
              />
              <UserPlus className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email Address
            </label>
            <div className="relative mt-1">
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pl-11 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="student@example.com"
                required
              />
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div>
            <label htmlFor="student_id" className="block text-sm font-medium text-gray-900">
              Student ID
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                id="student_id"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pl-11 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                value={formData.student_id}
                onChange={(e) => setFormData({ ...formData, student_id: e.target.value })}
                placeholder="Enter unique student ID"
                required
              />
              <IdCard className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {status.message && (
          <div
            className={`rounded-md p-4 ${
              status.type === 'success' 
                ? 'bg-green-50 text-green-700' 
                : 'bg-red-50 text-red-700'
            }`}
          >
            <p className="text-sm font-medium">{status.message}</p>
          </div>
        )}

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2"
        >
          Register New Student
        </button>
      </form>
    </div>
  );
};