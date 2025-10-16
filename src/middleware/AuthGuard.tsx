import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuthStore } from '../store/auth.store';

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  allowBoth?: boolean;
}

const AuthGuard = ({
  children,
  requireAuth = false,
  allowBoth = false,
}: AuthGuardProps) => {
  const navigate = useNavigate();
  const { email } = useAuthStore();
  const isAuthenticated = !!email;

  useEffect(() => {
    if (requireAuth && !isAuthenticated) {
      navigate('/login');
    } else if (!requireAuth && !allowBoth && isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, requireAuth, allowBoth, navigate]);

  if (requireAuth && !isAuthenticated) {
    return null;
  }

  if (!requireAuth && !allowBoth && isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;
