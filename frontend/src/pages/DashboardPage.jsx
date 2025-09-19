import { useState, useEffect } from 'react';
import { StudentForm } from '../components/StudentForm';
import { StudentTable } from '../components/StudentTable';
import { Users, UserCheck, TrendingUp, Clock } from 'lucide-react';

export const DashboardPage = () => {
  const [stats, setStats] = useState({
    totalStudents: 0,
    todayCheckins: 0,
    loading: true
  });

  useEffect(() => {
    fetchStats();
    // Refresh stats every minute
    const interval = setInterval(fetchStats, 60000);
    return () => clearInterval(interval);
  }, []);

  const fetchStats = async () => {
    try {
      // Fetch total students
      const studentsResponse = await fetch('http://localhost:8000/api/students/');
      const students = await studentsResponse.json();

      // Fetch today's check-ins
      const checkinsResponse = await fetch('http://localhost:8000/api/checkins/');
      const checkins = await checkinsResponse.json();

      // Filter check-ins for today
      const today = new Date().toISOString().split('T')[0];
      const todayCheckins = checkins.filter(checkin => 
        checkin.timestamp.startsWith(today)
      );

      setStats({
        totalStudents: students.length,
        todayCheckins: todayCheckins.length,
        loading: false
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
      setStats(prev => ({ ...prev, loading: false }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome to Dashboard</h1>
          <p className="mt-2 text-sm text-gray-600">Monitor student registrations and check-ins in real-time</p>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Total Students Card */}
          <div className="overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {stats.loading ? (
                    <span className="text-gray-400">...</span>
                  ) : (
                    stats.totalStudents
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Today's Check-ins */}
          <div className="overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
                <UserCheck className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Today's Check-ins</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {stats.loading ? (
                    <span className="text-gray-400">...</span>
                  ) : (
                    stats.todayCheckins
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Placeholder Stats for Visual Balance */}
          <div className="overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Check-in Rate</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {stats.loading ? "..." : `${Math.round((stats.todayCheckins / stats.totalStudents) * 100)}%`}
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Last Update</p>
                <p className="text-sm font-semibold text-gray-900">
                  {new Date().toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Student Management */}
          <div className="space-y-8">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-lg font-semibold text-gray-900">Add New Student</h2>
              <StudentForm />
            </div>
          </div>

          {/* Right Column - Student List */}
          <div className="space-y-8">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-lg font-semibold text-gray-900">Student Directory</h2>
              <StudentTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};