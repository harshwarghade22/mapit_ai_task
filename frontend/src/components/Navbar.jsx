import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path ? 'bg-blue-700' : '';
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-white">
              StudentSystem
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-4">
            <Link
              to="/"
              className={`rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors duration-150 ${isActive(
                '/'
              )}`}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors duration-150 ${isActive(
                '/dashboard'
              )}`}
            >
              Dashboard
            </Link>
            <Link
              to="/check-in"
              className={`rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors duration-150 ${isActive(
                '/check-in'
              )}`}
            >
              Check-in
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 focus:outline-none transition-colors duration-150"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } border-t border-blue-700 md:hidden transition-all duration-150 ease-in-out`}
      >
        <div className="space-y-1 px-4 pb-3 pt-2">
          <Link
            to="/"
            className={`block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-700 transition-colors duration-150 ${isActive(
              '/'
            )}`}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className={`block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-700 transition-colors duration-150 ${isActive(
              '/dashboard'
            )}`}
          >
            Dashboard
          </Link>
          <Link
            to="/check-in"
            className={`block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-700 transition-colors duration-150 ${isActive(
              '/check-in'
            )}`}
          >
            Check-in
          </Link>
        </div>
      </div>
    </nav>
  );
};