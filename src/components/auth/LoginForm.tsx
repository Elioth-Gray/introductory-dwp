import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSchema, type AuthSchema } from '../../schemas/auth.schema';
import {
  Button,
  TextField,
  Typography,
  InputAdornment,
  Box,
  Alert,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  ArrowForward,
} from '@mui/icons-material';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { loginAction } from '../../lib/api/auth.api';
import { useNavigate } from 'react-router';

const LoginForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState<{
    show: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({ show: false, message: '', severity: 'success' });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const form = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const mutation = useMutation({
    mutationFn: loginAction,
    onSuccess: (result) => {
      if (result.success) {
        setAlert({
          show: true,
          message: result.message || 'Login berhasil',
          severity: 'success',
        });
        form.reset();
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        setAlert({
          show: true,
          message: result.message || 'Login gagal',
          severity: 'error',
        });
      }
    },
    onError: () => {
      setAlert({
        show: true,
        message: 'Terjadi kesalahan',
        severity: 'error',
      });
    },
  });

  const onSubmit = (data: AuthSchema) => {
    mutation.mutate(data);
  };

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)}>
      {alert.show && (
        <Alert
          severity={alert.severity}
          sx={{ mb: 3, borderRadius: 2 }}
          variant='filled'
        >
          {alert.message}
        </Alert>
      )}

      <Typography
        variant='body2'
        sx={{
          mb: 1,
          color: 'text.secondary',
          fontWeight: 500,
        }}
      >
        Email
      </Typography>
      <TextField
        fullWidth
        placeholder='your@email.com'
        type='email'
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
        size='small'
        sx={{
          mb: 3,
          '& .MuiOutlinedInput-root': {
            height: '45px',
            borderRadius: 2,
            backgroundColor: 'secondary.light',
            border: 'none',
            outline: 'none',
            fontSize: '0.8rem',
            '& fieldset': {
              border: 'none',
            },
            '&:hover fieldset': {
              border: 'none',
            },
            '&.Mui-focused fieldset': {
              border: '1px solid',
              borderColor: 'primary.main',
              outline: 'none',
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Email sx={{ color: 'text.secondary', fontSize: 18 }} />
            </InputAdornment>
          ),
        }}
      />

      <Typography
        variant='body2'
        sx={{
          mb: 1,
          color: 'text.secondary',
          fontWeight: 500,
        }}
      >
        Password
      </Typography>
      <TextField
        fullWidth
        type={showPassword ? 'text' : 'password'}
        placeholder='••••••'
        {...register('password')}
        error={!!errors.password}
        helperText={errors.password?.message}
        size='small'
        sx={{
          mb: 2,
          '& .MuiOutlinedInput-root': {
            height: '45px',
            borderRadius: 2,
            backgroundColor: 'secondary.light',
            border: 'none',
            outline: 'none',
            fontSize: '0.8rem',
            '& fieldset': {
              border: 'none',
            },
            '&:hover fieldset': {
              border: 'none',
            },
            '&.Mui-focused fieldset': {
              border: '1px solid',
              borderColor: 'primary.main',
              outline: 'none',
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Lock sx={{ color: 'text.secondary', fontSize: 18 }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position='end' sx={{ zIndex: 10 }}>
              <div
                onClick={handleClickShowPassword}
                style={{
                  cursor: 'pointer',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  transition: 'background-color 0.2s',
                  zIndex: 30,
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {showPassword ? (
                  <VisibilityOff
                    sx={{ color: 'text.secondary', fontSize: 20 }}
                  />
                ) : (
                  <Visibility sx={{ color: 'text.secondary', fontSize: 20 }} />
                )}
              </div>
            </InputAdornment>
          ),
        }}
      />
      <Button
        type='submit'
        fullWidth
        variant='contained'
        disabled={mutation.isPending}
        endIcon={<ArrowForward sx={{ fontSize: '1rem' }} />}
        sx={{
          py: 1,
          mt: 2,
          fontSize: '1rem',
          fontWeight: 'bold',
          textTransform: 'none',
          borderRadius: 5,
          backgroundColor: 'primary.main',
          color: 'white',
          maxWidth: 2 / 3,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          '& .MuiButton-startIcon': {
            marginRight: '8px',
          },
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
        }}
      >
        {mutation.isPending ? 'Signing in...' : 'Sign in'}
      </Button>
    </Box>
  );
};

export default LoginForm;
