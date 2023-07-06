import './Dashboard.css'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const DashboardPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    // Render loading state or spinner
    return <div>Loading...</div>;
  }

  if (!session) {
    // User is not authenticated, redirect to login page
    router.push('/page');
    return null;
  }

  // User is authenticated, render the dashboard content
  return (
    <div>
      <h1>Welcome to the Dashboard, {session.user.name}!</h1>
      {/* Add your dashboard components and content here */}
    </div>
  );
};

export default DashboardPage;
