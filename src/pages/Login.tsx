import { Box, Typography, Container, Paper } from '@mui/material';
import { Grid } from '@mui/material';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
  return (
    <Grid
      container
      columns={5}
      sx={{ position: 'relative', overflow: 'hidden' }}
    >
      <Grid size={3}>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -50,
              right: -50,
              width: 120,
              height: 120,
              borderRadius: '50%',
              backgroundColor: 'secondary.main',
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 20,
              right: 20,
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: 'secondary.light',
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -30,
              left: -30,
              width: 150,
              height: 150,
              borderRadius: '50%',
              backgroundColor: 'secondary.dark',
              zIndex: 0,
            }}
          />

          <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 10 }}>
            <Paper
              elevation={0}
              sx={{
                py: '4.5rem',
                px: 6,
                backgroundColor: 'background.paper',
                borderRadius: 4,
                border: 'none',
                outline: 'none',
                boxShadow:
                  '0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.08)',
                maxWidth: 450,
                mx: 'auto',
                position: 'relative',
                zIndex: 10,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  mb: 4,
                }}
              >
                <img
                  src='/images/logo.png'
                  alt='Logo'
                  style={{
                    maxWidth: '150px',
                    height: 'auto',
                    maxHeight: '60px',
                    objectFit: 'contain',
                  }}
                />
              </Box>

              <Typography
                variant='h4'
                component='h1'
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                  textAlign: 'start',
                  color: 'text.primary',
                }}
              >
                Sign in
              </Typography>
              <Typography
                variant='body1'
                component='p'
                sx={{
                  fontWeight: 'thin',
                  fontSize: '0.9rem',
                  opacity: 0.6,
                  mb: 4,
                  textAlign: 'start',
                  color: 'text.primary',
                }}
              >
                Selamat datang, silahkan masuk kembali menggunakan akun anda!
              </Typography>
              <LoginForm></LoginForm>
            </Paper>
          </Container>
        </Box>
      </Grid>
      <Grid
        size={2}
        sx={{
          backgroundColor: 'secondary.main',
          position: 'relative',
          overflow: 'hidden',
        }}
      ></Grid>
      <img
        src='/images/auth/banner.png'
        alt='Banner'
        style={{
          position: 'absolute',
          bottom: 30,
          right: -50,
          width: '1000px',
          height: 'auto',
          maxHeight: '80vh',
          objectFit: 'contain',
          objectPosition: 'center',
          zIndex: 0,
        }}
      />
    </Grid>
  );
};

export default Login;
