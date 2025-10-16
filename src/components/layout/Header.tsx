import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Divider,
} from '@mui/material';
import { AccountCircle, Logout, History } from '@mui/icons-material';
import { useAuthStore } from '../../store/auth.store';
import { useNavigate, useLocation } from 'react-router';
import { getInitials } from '../../utils/helper';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { email, username, clearAuth } = useAuthStore();
  const isLoggedIn = email && username;

  const menuItems = [
    { label: 'Beranda', path: '/' },
    { label: 'Pulsa', path: '/#pulsa' },
    { label: 'Paket Data', path: '/#paket-data' },
  ];

  const handleNavigation = (path: string) => {
    if (path.startsWith('/#')) {
      const section = path.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      navigate(path);
    }
  };

  const isActiveMenu = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    clearAuth();
    handleClose();
  };

  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: 'white',
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
        px: 4,
      }}
    >
      <Toolbar
        sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 }, py: 2 }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            onClick={() => navigate('/')}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8,
              },
              transition: 'opacity 0.2s ease',
            }}
          >
            <img
              src='/images/logo.png'
              width={150}
              alt='Logo'
              style={{ display: 'block' }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 6,
          }}
        >
          {menuItems.map((item) => (
            <Button
              key={item.label}
              onClick={() => handleNavigation(item.path)}
              sx={{
                color: isActiveMenu(item.path) ? '#6B46C1' : '#64748B',
                textTransform: 'none',
                fontSize: '0.9rem',
                fontWeight: isActiveMenu(item.path) ? '700' : '500',
                letterSpacing: '0.05em',
                px: 0,
                py: 1,
                borderRadius: 0,
                position: 'relative',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#6B46C1',
                },
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: '#6B46C1',
                  transform: isActiveMenu(item.path)
                    ? 'scaleX(1)'
                    : 'scaleX(0)',
                  transition: 'transform 0.2s ease',
                },
                '&:hover:after': {
                  transform: 'scaleX(1)',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {isLoggedIn ? (
            <>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  cursor: 'pointer',
                  p: 1,
                  px: 2,
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(107, 70, 193, 0.1)',
                  },
                }}
                onClick={handleProfileClick}
              >
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    backgroundColor: '#6B46C1',
                    fontSize: '0.875rem',
                  }}
                >
                  {getInitials(username || '')}
                </Avatar>
                <Box sx={{ display: 'block' }}>
                  <Typography
                    variant='body2'
                    sx={{
                      fontWeight: 600,
                      color: '#1E293B',
                      lineHeight: 1.1,
                    }}
                  >
                    {username}
                  </Typography>
                  <Typography
                    variant='caption'
                    sx={{
                      color: '#64748B',
                      lineHeight: 1,
                      display: 'block',
                      marginTop: '1px',
                    }}
                  >
                    {email}
                  </Typography>
                </Box>
              </Box>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                sx={{
                  mt: 1,
                  '& .MuiPaper-root': {
                    borderRadius: 2,
                    minWidth: 180,
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <MenuItem onClick={handleClose}>
                  <AccountCircle
                    sx={{ mr: 1, color: '#64748B', fontSize: '1.2rem' }}
                  />
                  <Typography variant='body2' sx={{ fontSize: '0.875rem' }}>
                    Profile
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate('/history');
                    handleClose();
                  }}
                >
                  <History
                    sx={{ mr: 1, color: '#64748B', fontSize: '1.2rem' }}
                  />
                  <Typography variant='body2' sx={{ fontSize: '0.875rem' }}>
                    Riwayat Pembelian
                  </Typography>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>
                  <Logout
                    sx={{ mr: 1, color: '#64748B', fontSize: '1.2rem' }}
                  />
                  <Typography variant='body2' sx={{ fontSize: '0.875rem' }}>
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              variant='contained'
              onClick={() => navigate('/login')}
              sx={{
                backgroundColor: '#6B46C1',
                color: 'white',
                textTransform: 'none',
                fontWeight: 600,
                px: 3,
                py: 1,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#553C9A',
                },
              }}
            >
              Sign In
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
