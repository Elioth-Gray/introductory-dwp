import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Login from './pages/Login';
import Home from './pages/Home';
import History from './pages/History';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthGuard from './middleware/AuthGuard';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './themes/theme';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <AuthGuard requireAuth={false}>
        <Login />
      </AuthGuard>
    ),
  },
  {
    path: '/',
    element: (
      <AuthGuard allowBoth>
        <Home />
      </AuthGuard>
    ),
  },
  {
    path: '/history',
    element: (
      <AuthGuard requireAuth>
        <History />
      </AuthGuard>
    ),
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
);
