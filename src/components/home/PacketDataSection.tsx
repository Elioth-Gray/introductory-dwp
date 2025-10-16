import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Skeleton,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getAllPacketData } from '../../lib/api/packetData.api';
import { formatPrice } from '../../utils/helper';
import { usePhoneNumberStore } from '../../store/phoneNumber.store';

const PacketDataSection = () => {
  const operator = usePhoneNumberStore((state) => state.operator);

  const { data: packetData, isFetching } = useQuery({
    queryKey: ['packetData', operator],
    queryFn: () => getAllPacketData({ operator: operator || '' }),
  });

  return (
    <Box id='paket-data' sx={{ backgroundColor: '#F8FAFC', py: 8 }}>
      <Container maxWidth='lg'>
        <Typography
          variant='h3'
          component='h2'
          sx={{
            textAlign: 'center',
            fontWeight: 'semibold',
            mb: 1.5,
            color: 'black',
            fontSize: '2.5rem',
          }}
        >
          Paket Data Terbaik
        </Typography>
        <Typography
          variant='h6'
          sx={{
            textAlign: 'center',
            mb: 4.5,
            color: 'black',
            fontSize: '1.1rem',
            mx: 'auto',
          }}
        >
          Paket data premium dengan kuota melimpah yang dirancang untuk
          konektivitas lancar dan pengalaman digital modern
        </Typography>
        <Grid container spacing={4}>
          {isFetching
            ? Array.from({ length: 8 }).map((_, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }} key={index}>
                  <Card
                    sx={{
                      borderRadius: '0.7rem',
                      border: '1px solid #E0E7FF',
                      height: '100%',
                      backgroundColor: 'white',
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 4,
                        textAlign: 'left',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Skeleton
                        variant='text'
                        width={60}
                        height={20}
                        sx={{ mb: 2 }}
                      />
                      <Skeleton
                        variant='text'
                        width='80%'
                        height={32}
                        sx={{ mb: 2 }}
                      />
                      <Box sx={{ flexGrow: 1, mb: 3 }}>
                        <Skeleton
                          variant='text'
                          width='100%'
                          height={20}
                          sx={{ mb: 1 }}
                        />
                        <Skeleton
                          variant='text'
                          width='90%'
                          height={20}
                          sx={{ mb: 1 }}
                        />
                        <Skeleton variant='text' width='70%' height={20} />
                      </Box>

                      <Box sx={{ mb: 3 }}>
                        <Skeleton
                          variant='text'
                          width='50%'
                          height={36}
                          sx={{ mb: 1 }}
                        />
                        <Skeleton variant='text' width='40%' height={16} />
                      </Box>

                      <Skeleton
                        variant='rectangular'
                        width='100%'
                        height={48}
                        sx={{
                          borderRadius: '0.5rem',
                        }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))
            : (packetData?.data ?? []).map((packet, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }} key={index}>
                  <Card
                    sx={{
                      borderRadius: '0.7rem',
                      border: '1px solid #E0E7FF',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      height: '100%',
                      backgroundColor: 'white',
                      '&:hover': {
                        borderColor: '#6B46C1',
                        boxShadow: '0 12px 40px rgba(107, 70, 193, 0.2)',
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 4,
                        textAlign: 'left',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography
                        variant='caption'
                        sx={{
                          color: 'black',
                          fontSize: '0.7rem',
                          mb: 2,
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          fontWeight: 500,
                        }}
                      >
                        <img
                          src={`images/providers/${packet.operator}.png`}
                          alt={packet.operator}
                          width={
                            packet.operator === 'by-u' ||
                            packet.operator === 'im3'
                              ? 45
                              : 60
                          }
                        />
                      </Typography>

                      <Typography
                        variant='h5'
                        sx={{
                          fontWeight: 300,
                          color: '#1E293B',
                          mb: 2,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {packet.name}
                      </Typography>

                      <Typography
                        variant='body2'
                        sx={{
                          color: '#64748B',
                          mb: 3,
                          lineHeight: 1.6,
                          fontWeight: 300,
                          flexGrow: 1,
                        }}
                      >
                        {packet.description}
                      </Typography>

                      <Box sx={{ mb: 3 }}>
                        <Typography
                          variant='h4'
                          sx={{
                            fontWeight: 'bold',
                            color: '#6B46C1',
                            mb: 1,
                            fontSize: '1.7rem',
                          }}
                        >
                          {formatPrice(packet.price)}
                        </Typography>

                        <Typography
                          variant='body2'
                          sx={{
                            color: '#64748B',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            fontSize: '0.8rem',
                          }}
                        >
                          Berlaku {packet.validity}
                        </Typography>
                      </Box>

                      <Button
                        variant='outlined'
                        fullWidth
                        sx={{
                          borderColor: '#6B46C1',
                          color: '#6B46C1',
                          borderRadius: '0.5rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          fontWeight: 600,
                          py: 1.5,
                          '&:hover': {
                            backgroundColor: '#6B46C1',
                            color: 'white',
                          },
                        }}
                      >
                        Pilih Paket
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button
            variant='outlined'
            size='large'
            sx={{
              borderColor: '#6B46C1',
              color: '#6B46C1',
              px: 6,
              py: 1.5,
              borderRadius: '0.7rem',
              textTransform: 'uppercase',
              fontSize: '0.8rem',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#6B46C1',
                color: 'white',
              },
            }}
          >
            Lihat Semua Tawaran
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PacketDataSection;
