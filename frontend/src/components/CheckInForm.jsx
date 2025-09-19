import { useState } from 'react';
import { UserCheck, BadgeCheck, Loader2, XCircle, CheckCircle } from 'lucide-react';

export const CheckInForm = () => {
  const [studentId, setStudentId] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:8000/api/checkins/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ student_id: studentId })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStudentId('');
        setStatus({
          type: 'success',
          message: 'Check-in successful!'
        });
      } else {
        setStatus({
          type: 'error',
          message: data.detail || 'Student ID not found. Please check and try again.'
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({
        type: 'error',
        message: 'An error occurred. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card max-w-md mx-auto bg-white shadow-lg rounded-xl p-8">
      <div className="flex items-center justify-center mb-6">
        <UserCheck className="h-8 w-8 text-blue-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Student Check-in</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <label htmlFor="check_in_id" className="flex text-sm font-medium text-gray-700 mb-2 items-center">
            <BadgeCheck className="h-4 w-4 text-gray-500 mr-1" />
            Student ID
          </label>
          <div className="relative">
            <input
              type="text"
              id="check_in_id"
              className={`input-field pl-10 ${
                status.type === 'error' 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' 
                  : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500/50'
              }`}
              value={studentId}
              onChange={(e) => {
                setStudentId(e.target.value);
                if (status.message) setStatus({ type: '', message: '' });
              }}
              placeholder="Enter student ID"
              required
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BadgeCheck className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Status Message */}
        {status.message && (
          <div
            className={`rounded-lg p-4 ${
              status.type === 'success'
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {status.type === 'success' ? (
                  <CheckCircle className="h-5 w-5 text-green-400" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-400" />
                )}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">{status.message}</p>
              </div>
            </div>
          </div>
        )}

        <button 
          type="submit" 
          className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg text-base font-medium text-white transition-all duration-150 ${
            loading 
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          }`}
          disabled={loading}
        >
          <span className="flex items-center">
            {loading ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                Checking in...
              </>
            ) : (
              <>
                <UserCheck className="h-5 w-5 mr-2" />
                Check In
              </>
            )}
          </span>
        </button>
      </form>
    </div>
  );
};