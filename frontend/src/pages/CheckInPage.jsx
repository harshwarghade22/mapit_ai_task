import { CheckInForm } from '../components/CheckInForm';
import { CheckInTable } from '../components/CheckInTable';

export const CheckInPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">Student Check-in</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <CheckInForm />
          <CheckInTable />
        </div>
      </div>
    </div>
  );
};