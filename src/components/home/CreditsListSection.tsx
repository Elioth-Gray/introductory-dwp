import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography,
  Skeleton,
} from '@mui/material';
import { formatPrice } from '../../utils/helper';
import { useQuery } from '@tanstack/react-query';
import { getAllCredits } from '../../lib/api/credits.api';

import { usePhoneNumberStore } from '../../store/phoneNumber.store';

const CreditsListSection = () => {
  const operator = usePhoneNumberStore((state) => state.operator);

  const { data: creditData, isFetching } = useQuery({
    queryKey: ['credits', operator],
    queryFn: () => getAllCredits({ operator: operator || '', limit: 8 }),
  });

  return (
    <Box id='pulsa' sx={{ width: '100%', px: 10 }}>
      <Container maxWidth='xl' sx={{ py: 5, px: 10 }}>
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
          Paket Pulsa Terbaik
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
          Pilih dari koleksi paket pulsa premium yang kami sediakan khusus untuk
          gaya hidup digital Anda.
        </Typography>

        <Grid container spacing={3}>
          {isFetching
            ? Array.from({ length: 8 }).map((_, index) => (
                <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
                  <Card
                    sx={{
                      borderRadius: '0.7rem',
                      border: '1px solid #E0E7FF',
                      backgroundColor: 'white',
                      height: '100%',
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 3,
                        textAlign: 'left',
                        position: 'relative',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Skeleton
                        variant='text'
                        width={80}
                        height={20}
                        sx={{ mb: 2 }}
                      />

                      <Box
                        sx={{
                          flexGrow: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}
                      >
                        <Skeleton
                          variant='text'
                          width='60%'
                          height={28}
                          sx={{ mb: 1 }}
                        />

                        <Skeleton
                          variant='text'
                          width='40%'
                          height={20}
                          sx={{ mb: 1 }}
                        />
                      </Box>

                      <Skeleton
                        variant='rectangular'
                        width='100%'
                        height={40}
                        sx={{
                          borderRadius: '0.5rem',
                          mt: 2,
                        }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))
            : (creditData?.data ?? []).map((pkg, index) => (
                <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
                  <Card
                    sx={{
                      borderRadius: '0.7rem',
                      border: '1px solid #E0E7FF',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      backgroundColor: 'white',
                      height: '100%',
                      '&:hover': {
                        borderColor: '#6B46C1',
                        boxShadow: '0 8px 30px rgba(107, 70, 193, 0.15)',
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 3,
                        textAlign: 'left',
                        position: 'relative',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      {pkg.discount && (
                        <Chip
                          label={`-${pkg.discount}`}
                          sx={{
                            position: 'absolute',
                            top: 12,
                            right: 12,
                            fontSize: '0.7rem',
                            height: 20,
                            backgroundColor: '#6B46C1',
                            color: 'white',
                            fontWeight: 600,
                          }}
                        />
                      )}
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
                        {pkg.operator === 'Semua Operator' ? (
                          'Semua Operator'
                        ) : (
                          <img
                            src={`images/providers/${pkg.operator}.png`}
                            alt={pkg.operator}
                            width={
                              pkg.operator === 'by-u' || pkg.operator === 'im3'
                                ? 45
                                : 60
                            }
                          />
                        )}
                      </Typography>
                      <Box
                        sx={{
                          flexGrow: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography
                          variant='h5'
                          sx={{
                            fontWeight: 300,
                            color: '#1E293B',
                            mb: 1,
                            fontSize: '1.2rem',
                          }}
                        >
                          {formatPrice(pkg.amount)}
                        </Typography>

                        {pkg.discount ? (
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 0.5,
                            }}
                          >
                            <Typography
                              variant='body2'
                              sx={{
                                color: '#94A3B8',
                                fontSize: '0.8rem',
                                textDecoration: 'line-through',
                              }}
                            >
                              {formatPrice(pkg.price)}
                            </Typography>
                            <Typography
                              variant='body2'
                              sx={{
                                color: '#6B46C1',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                              }}
                            >
                              {formatPrice(
                                pkg.price -
                                  (pkg.price *
                                    parseInt(pkg.discount.replace('%', ''))) /
                                    100,
                              )}
                            </Typography>
                          </Box>
                        ) : (
                          <Typography
                            variant='body2'
                            sx={{
                              color: '#6B46C1',
                              fontWeight: 600,
                              fontSize: '0.9rem',
                            }}
                          >
                            {formatPrice(pkg.price)}
                          </Typography>
                        )}
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
                          py: 1.2,
                          fontSize: '0.75rem',
                          mt: 2,
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

export default CreditsListSection;
