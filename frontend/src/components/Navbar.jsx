import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'bg-blue-700' : '';
  };

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-white">
              StudentSystem
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link
              to="/"
              className={`rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 ${isActive(
                '/'
              )}`}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 ${isActive(
                '/dashboard'
              )}`}
            >
              Dashboard
            </Link>
            <Link
              to="/check-in"
              className={`rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 ${isActive(
                '/check-in'
              )}`}
            >
              Check-in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};