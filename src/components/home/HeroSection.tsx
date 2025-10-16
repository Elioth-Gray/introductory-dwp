import { Box, Container, Grid, Typography, Stack, Button } from '@mui/material';

const HeroSection = () => {
  const handleScrollToPhoneNumber = () => {
    const phoneNumberSection = document.getElementById('phone-number-section');
    if (phoneNumberSection) {
      phoneNumberSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Box
      sx={{
        maxHeight: '80vh',
        background: 'linear-gradient(135deg, #F8FAFC 0%, #E0E7FF 100%)',
        overflow: 'hidden',
        px: 16,
        py: 3,
      }}
    >
      <Container maxWidth='xl'>
        <Grid
          container
          spacing={4}
          columns={2}
          alignItems='center'
          rowSpacing={4}
        >
          <Grid size={1} sx={{ py: 8 }}>
            <Typography
              variant='h1'
              component='h1'
              sx={{
                fontWeight: 'bold',

                mb: 2,
                fontSize: '3.2rem',
                lineHeight: 1.2,
              }}
            >
              Selalu Terhubung, Tanpa Batas, Tanpa Ribet.
            </Typography>

            <Typography
              variant='h5'
              sx={{
                color: '#64748B',
                mb: 3,
                lineHeight: 1.6,
                fontWeight: 300,
                fontSize: '1.1rem',
              }}
            >
              Nikmati kebebasan berselancar dengan jaringan cepat dan paket data
              yang dirancang untuk setiap gaya hidup digital.
            </Typography>

            <Button
              variant='contained'
              size='large'
              onClick={handleScrollToPhoneNumber}
              sx={{
                backgroundColor: '#6B46C1',
                color: 'white',
                px: 6,
                py: 1.5,
                borderRadius: '0.8rem',
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                mb: 4,
                '&:hover': {
                  backgroundColor: '#553C9A',
                  boxShadow: '0 8px 25px rgba(107, 70, 193, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Cari Paket
            </Button>
            <Stack direction='row' spacing={6} sx={{ mt: 0 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                  justifyContent: 'start',
                }}
              >
                <Typography
                  variant='h5'
                  sx={{
                    color: '#6B46C1',
                    fontWeight: 'bold',
                    fontSize: '2.2rem',
                  }}
                >
                  15+
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    color: '#64748B',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontSize: '0.8rem',
                  }}
                >
                  Mitra Provider
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                  justifyContent: 'start',
                }}
              >
                <Typography
                  variant='h5'
                  sx={{
                    color: '#6B46C1',
                    fontWeight: 'bold',
                    fontSize: '2.2rem',
                  }}
                >
                  100K+
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    color: '#64748B',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontSize: '0.8rem',
                  }}
                >
                  Pelanggan Puas
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                  justifyContent: 'start',
                }}
              >
                <Typography
                  variant='h5'
                  sx={{
                    color: '#6B46C1',
                    fontWeight: 'bold',
                    fontSize: '2.2rem',
                  }}
                >
                  24/7
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    color: '#64748B',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontSize: '0.8rem',
                  }}
                >
                  Dukungan Pelanggan
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid size={1}>
            <img src='/images/home/hero.png' width={550}></img>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
