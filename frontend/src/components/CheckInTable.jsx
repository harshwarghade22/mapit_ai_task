import { useState, useEffect } from 'react';
import { Clock, UserCheck, BadgeCheck, RefreshCw, Loader2, ClipboardList } from 'lucide-react';

export const CheckInTable = () => {
  const [checkins, setCheckins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchCheckins();
    // Refresh checkins every 30 seconds
    const interval = setInterval(fetchCheckins, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchCheckins = async () => {
    setRefreshing(true);
    try {
      const response = await fetch('http://localhost:8000/api/checkins/');
      if (response.ok) {
        const data = await response.json();
        setCheckins(data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleRefresh = () => {
    fetchCheckins();
  };

  // Get current checkins for pagination
  const indexOfLastCheckin = currentPage * itemsPerPage;
  const indexOfFirstCheckin = indexOfLastCheckin - itemsPerPage;
  const currentCheckins = checkins.slice(indexOfFirstCheckin, indexOfLastCheckin);
  const totalPages = Math.ceil(checkins.length / itemsPerPage);

  if (loading) {
    return (
      <div className="card">
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        </div>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden bg-white shadow-lg rounded-xl">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center">
          <ClipboardList className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-xl font-bold text-gray-800">Recent Check-ins</h2>
        </div>
        <button
          onClick={handleRefresh}
          disabled={refreshing}
          className={`p-2 rounded-lg transition-all duration-150 ${
            refreshing ? 'bg-gray-100' : 'hover:bg-gray-100'
          }`}
          title="Refresh check-ins"
        >
          <RefreshCw className={`h-5 w-5 text-gray-600 ${refreshing ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                <div className="flex items-center">
                  <UserCheck className="h-4 w-4 mr-1 text-gray-400" />
                  Student Name
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                <div className="flex items-center">
                  <BadgeCheck className="h-4 w-4 mr-1 text-gray-400" />
                  Student ID
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-gray-400" />
                  Check-in Time
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {currentCheckins.map((checkin) => (
              <tr key={checkin.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{checkin.student.name}</div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="text-sm text-gray-600">{checkin.student.student_id}</div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="text-sm text-gray-600">
                    {new Date(checkin.timestamp).toLocaleString()}
                  </div>
                </td>
              </tr>
            ))}
            {currentCheckins.length === 0 && (
              <tr>
                <td colSpan="3" className="px-6 py-8 text-center text-gray-500">
                  No check-ins found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between px-6 py-3 bg-gray-50 border-t border-gray-200">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              currentPage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
            }`}
          >
            Previous
          </button>
          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              currentPage === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};