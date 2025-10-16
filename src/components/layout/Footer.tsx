import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  IconButton,
  Link,
} from '@mui/material';
import {
  Twitter,
  Facebook,
  Instagram,
  Email,
  Phone,
  WhatsApp,
  AccessTime,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: '#f8f9fa',
        py: 6,
        px: 15,
      }}
    >
      <Container maxWidth='xl'>
        <Grid container columns={12} spacing={8}>
          <Grid size={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <img src='/images/logo.png' alt='Internetku Logo' width={180} />
            </Box>

            <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
              Platform terpercaya untuk kebutuhan internet, pulsa dan paket data
              Anda. Nikmati kemudahan top-up dengan harga terbaik dan layanan
              24/7.
            </Typography>

            <Stack direction='row' spacing={1}>
              <IconButton
                size='small'
                aria-label='twitter'
                sx={{
                  backgroundColor: '#6B46C1',
                  color: 'white',
                  '&:hover': { backgroundColor: '#553C9A' },
                }}
              >
                <Twitter fontSize='small' />
              </IconButton>
              <IconButton
                size='small'
                aria-label='facebook'
                sx={{
                  backgroundColor: '#6B46C1',
                  color: 'white',
                  '&:hover': { backgroundColor: '#553C9A' },
                }}
              >
                <Facebook fontSize='small' />
              </IconButton>
              <IconButton
                size='small'
                aria-label='instagram'
                sx={{
                  backgroundColor: '#6B46C1',
                  color: 'white',
                  '&:hover': { backgroundColor: '#553C9A' },
                }}
              >
                <Instagram fontSize='small' />
              </IconButton>
            </Stack>
          </Grid>

          <Grid size={3}>
            <Typography
              variant='h6'
              sx={{ fontWeight: 'bold', mb: 2, color: '#1E293B' }}
            >
              LAYANAN
            </Typography>
            <Stack spacing={1}>
              {[
                'Pulsa',
                'Paket Data',
                'Voucher Game',
                'PLN Token',
                'E-Wallet',
              ].map((item) => (
                <Link
                  key={item}
                  href='#'
                  underline='none'
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: '#6B46C1' },
                    fontSize: '0.875rem',
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={3}>
            <Typography
              variant='h6'
              sx={{ fontWeight: 'bold', mb: 2, color: '#1E293B' }}
            >
              DUKUNGAN
            </Typography>
            <Stack spacing={1}>
              {[
                'Pusat Bantuan',
                'FAQ',
                'Hubungi Kami',
                'Syarat & Ketentuan',
                'Kebijakan Privasi',
              ].map((item) => (
                <Link
                  key={item}
                  href='#'
                  underline='none'
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: '#6B46C1' },
                    fontSize: '0.875rem',
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>
          <Grid size={3}>
            <Typography
              variant='h6'
              sx={{ fontWeight: 'bold', mb: 2, color: '#1E293B' }}
            >
              KONTAK
            </Typography>
            <Stack spacing={1}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email sx={{ fontSize: '1rem', color: '#6B46C1' }} />
                <Typography variant='body2' color='text.secondary'>
                  support@internetku.id
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ fontSize: '1rem', color: '#6B46C1' }} />
                <Typography variant='body2' color='text.secondary'>
                  0804-1-INET (4638)
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WhatsApp sx={{ fontSize: '1rem', color: '#6B46C1' }} />
                <Typography variant='body2' color='text.secondary'>
                  WhatsApp: +62 821-1234-5678
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccessTime sx={{ fontSize: '1rem', color: '#6B46C1' }} />
                <Typography variant='body2' color='text.secondary'>
                  Layanan 24/7
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid #e0e0e0',
            mt: 4,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant='body2' color='text.secondary'>
            INTERNETKU ©2025, Semua Hak Dilindungi. Platform Digital Internet &
            Top-Up Terpercaya Indonesia.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
