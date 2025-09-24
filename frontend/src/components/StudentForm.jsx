import { useState } from 'react';
import { UserPlus, Mail, IdCard, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    student_id: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    setLoading(true);
    
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
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "w-full rounded-lg border border-gray-300 px-4 py-2.5 pl-11 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200";
  const labelClasses = "block text-sm font-medium text-gray-900 mb-1";

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <UserPlus className="h-5 w-5 mr-2 text-blue-600" />
        Register New Student
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className={labelClasses}>
              Full Name
            </label>
            <div className="relative mt-1 group">
              <input
                type="text"
                id="name"
                className={inputClasses}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter student's full name"
                required
                disabled={loading}
              />
              <UserPlus className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>
              Email Address
            </label>
            <div className="relative mt-1 group">
              <input
                type="email"
                id="email"
                className={inputClasses}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="student@example.com"
                required
                disabled={loading}
              />
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
            </div>
          </div>

          <div>
            <label htmlFor="student_id" className={labelClasses}>
              Student ID
            </label>
            <div className="relative mt-1 group">
              <input
                type="text"
                id="student_id"
                className={inputClasses}
                value={formData.student_id}
                onChange={(e) => setFormData({ ...formData, student_id: e.target.value })}
                placeholder="Enter unique student ID"
                required
                disabled={loading}
              />
              <IdCard className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
            </div>
          </div>
        </div>

        {status.message && (
          <div
            className={`rounded-lg p-4 flex items-center ${
              status.type === 'success' 
                ? 'bg-green-50 text-green-700 border border-green-200' 
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            {status.type === 'success' ? (
              <CheckCircle className="h-5 w-5 mr-2" />
            ) : (
              <AlertCircle className="h-5 w-5 mr-2" />
            )}
            <p className="text-sm font-medium">{status.message}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Registering...
            </>
          ) : (
            'Register New Student'
          )}
        </button>
      </form>
    </div>
  );
};