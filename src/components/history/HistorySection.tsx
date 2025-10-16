import { useMemo, useCallback } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Button,
  TextField,
  MenuItem,
  IconButton,
  Pagination,
  Skeleton,
} from '@mui/material';
import {
  ArrowBack,
  CheckCircle,
  AccessTime,
  Cancel,
  FilterList,
} from '@mui/icons-material';
import { useNavigate, useSearchParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getPurchaseHistory } from '../../lib/api/purchaseHistory.api';
import {
  formatCurrency,
  formatDate,
  getProviderDisplayName,
  getStatusDisplayName,
  getTypeDisplayName,
} from '../../utils/helper';
import { type PurchaseHistory } from '../../types/purchaseHistory.type';
import { useAuthStore } from '../../store/auth.store';

interface SearchParams {
  page?: string;
  provider?: string;
  status?: string;
  type?: string;
}

const HistorySection = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const provider = searchParams.get('provider') ?? 'all';
  const status = searchParams.get('status') ?? 'all';
  const type = searchParams.get('type') ?? 'all';
  const page = parseInt(searchParams.get('page') ?? '1', 10);

  const itemsPerPage = 5;

  const userId = useAuthStore((state) => state.id);

  const queryParams = useMemo(
    () => ({
      page,
      limit: itemsPerPage,
      operator: provider !== 'all' ? provider : undefined,
      status: status !== 'all' ? status : undefined,
      type: type !== 'all' ? type : undefined,
      userId: userId || undefined,
    }),
    [page, provider, status, type, itemsPerPage, userId],
  );

  const setQueryParam = useCallback(
    (key: keyof SearchParams, value: string) => {
      const newParams = new URLSearchParams(searchParams);

      if (!value || value === 'all') {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }

      if (key !== 'page') {
        newParams.delete('page');
      }

      navigate(
        {
          pathname: '/history',
          search: newParams.toString() ? `?${newParams.toString()}` : '',
        },
        { replace: true },
      );
    },
    [searchParams, navigate],
  );

  const setPageParam = useCallback(
    (newPage: number) => {
      const newParams = new URLSearchParams(searchParams);

      if (newPage === 1) {
        newParams.delete('page');
      } else {
        newParams.set('page', newPage.toString());
      }

      navigate(
        {
          pathname: '/history',
          search: newParams.toString() ? `?${newParams.toString()}` : '',
        },
        { replace: true },
      );
    },
    [searchParams, navigate],
  );

  const {
    data: historyResponse,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['history', { ...queryParams, page: undefined }],
    queryFn: () =>
      getPurchaseHistory({ ...queryParams, page: undefined, limit: undefined }),
  });

  const allHistoryData = historyResponse?.success
    ? historyResponse.data || []
    : [];

  const totalItems = allHistoryData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const historyData = allHistoryData.slice(startIndex, endIndex);

  const pagination = {
    currentPage: page,
    totalPages,
    totalItems,
    itemsPerPage,
  };

  const uniqueProviders = [
    'telkomsel',
    'indosat',
    'xl-axiata',
    'smartfren',
    'by-u',
    'im3',
  ];
  const statusOptions = ['completed', 'pending', 'failed'];
  const typeOptions = ['credit', 'packet_data'];
  const handleFilterChange = (
    filterType: 'provider' | 'status' | 'type',
    value: string,
  ) => {
    setQueryParam(filterType, value);
  };

  const handleResetFilters = useCallback(() => {
    navigate('/history', { replace: true });
  }, [navigate]);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPageParam(value);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle sx={{ color: '#10B981', fontSize: '1.2rem' }} />;
      case 'pending':
        return <AccessTime sx={{ color: '#F59E0B', fontSize: '1.2rem' }} />;
      case 'failed':
        return <Cancel sx={{ color: '#EF4444', fontSize: '1.2rem' }} />;
      default:
        return <AccessTime sx={{ color: '#6B7280', fontSize: '1.2rem' }} />;
    }
  };

  const getStatusColor = (
    status: string,
  ): 'success' | 'warning' | 'error' | 'default' => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'pending':
        return 'warning';
      case 'failed':
        return 'error';
      default:
        return 'default';
    }
  };

  const HistoryItemSkeleton = () => (
    <Card
      sx={{
        mb: 1.5,
        border: '1px solid',
        borderColor: 'grey.200',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'start', gap: 1.5 }}>
            <Skeleton
              variant='text'
              sx={{
                minWidth: '25px',
                fontSize: '0.9rem',
              }}
            />
            <Skeleton variant='rectangular' width={100} height={40} />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 0.5,
              }}
            >
              <Skeleton variant='text' width='40%' height={24} />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Skeleton variant='circular' width={20} height={20} />
                <Skeleton variant='rounded' width={80} height={24} />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box>
                <Skeleton variant='text' width='60%' height={16} />
                <Skeleton variant='text' width='80%' height={16} />
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <Skeleton
                  variant='text'
                  width={100}
                  height={28}
                  sx={{ mb: 0.5 }}
                />
                <Skeleton variant='rounded' width={90} height={28} />
              </Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ px: 10 }}>
      <Container maxWidth='xl' sx={{ py: 4 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            mb: 3,
          }}
        >
          <IconButton
            onClick={() => navigate('/')}
            sx={{ mr: 2, color: 'text.primary' }}
          >
            <ArrowBack />
          </IconButton>
          <Typography
            variant='h5'
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              fontSize: '1.3rem',
            }}
          >
            Riwayat Pembelian
          </Typography>
        </Box>

        <Card sx={{ mb: 3, p: 2, px: 3, borderRadius: 2, width: '50%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
            <FilterList sx={{ color: 'primary.main', fontSize: '1.3rem' }} />
            <Typography
              variant='h6'
              sx={{
                fontWeight: 600,
                color: 'text.primary',
                fontSize: '1rem',
              }}
            >
              Filter Transaksi
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'end',
            }}
          >
            <Box sx={{ flex: 1 }}>
              <TextField
                select
                fullWidth
                label='Tipe Transaksi'
                value={type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                size='small'
                sx={{
                  '& .MuiInputBase-root': {
                    height: '35px',
                    fontSize: '0.875rem',
                  },
                }}
              >
                <MenuItem value='all' sx={{ fontSize: '0.875rem' }}>
                  Semua Tipe
                </MenuItem>
                {typeOptions.map((type) => (
                  <MenuItem
                    key={type}
                    value={type}
                    sx={{ fontSize: '0.875rem' }}
                  >
                    {getTypeDisplayName(type)}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box sx={{ flex: 1 }}>
              <TextField
                select
                fullWidth
                label='Provider'
                value={provider}
                onChange={(e) => handleFilterChange('provider', e.target.value)}
                size='small'
                sx={{
                  '& .MuiInputBase-root': {
                    height: '35px',
                    fontSize: '0.875rem',
                  },
                }}
              >
                <MenuItem value='all' sx={{ fontSize: '0.875rem' }}>
                  Semua Provider
                </MenuItem>
                {uniqueProviders.map((provider) => (
                  <MenuItem
                    key={provider}
                    value={provider}
                    sx={{ fontSize: '0.875rem' }}
                  >
                    {getProviderDisplayName(provider)}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box sx={{ flex: 1 }}>
              <TextField
                select
                fullWidth
                label='Pembayaran'
                value={status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                size='small'
                sx={{
                  '& .MuiInputBase-root': {
                    height: '35px',
                    fontSize: '0.875rem',
                  },
                }}
              >
                <MenuItem value='all' sx={{ fontSize: '0.875rem' }}>
                  Semua Status
                </MenuItem>
                {statusOptions.map((status) => (
                  <MenuItem
                    key={status}
                    value={status}
                    sx={{ fontSize: '0.875rem' }}
                  >
                    {getStatusDisplayName(status)}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Button
              variant='outlined'
              size='small'
              onClick={handleResetFilters}
              sx={{
                height: '35px',
                px: 2,
                fontSize: '0.875rem',
                borderColor: 'grey.400',
                color: 'grey.600',
                '&:hover': {
                  borderColor: 'grey.600',
                  bgcolor: 'grey.50',
                },
              }}
            >
              Reset Filter
            </Button>
          </Box>
        </Card>

        <Box sx={{ mb: 2 }}>
          {isLoading ? (
            <Skeleton variant='text' width='50%' height={20} />
          ) : (
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              Menampilkan {startIndex + 1}-{Math.min(endIndex, totalItems)} dari{' '}
              {totalItems} transaksi (Halaman {page} dari {totalPages})
            </Typography>
          )}
        </Box>

        <Box sx={{ mb: 4 }}>
          {isLoading ? (
            <>
              {Array.from({ length: itemsPerPage }).map((_, index) => (
                <HistoryItemSkeleton key={index} />
              ))}
            </>
          ) : error ? (
            <Card sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant='h6' sx={{ color: 'error.main', mb: 1 }}>
                Terjadi kesalahan
              </Typography>
              <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                Gagal memuat data riwayat transaksi
              </Typography>
            </Card>
          ) : historyData.length === 0 ? (
            <Card sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant='h6' sx={{ color: 'text.secondary', mb: 1 }}>
                Tidak ada transaksi ditemukan
              </Typography>
            </Card>
          ) : (
            historyData.map((item: PurchaseHistory, index: number) => (
              <Card
                key={item.id}
                sx={{
                  mb: 1.5,
                  border: '1px solid',
                  borderColor: 'primary.main',
                  borderRadius: 2,
                  overflow: 'hidden',
                  '&:hover': {
                    boxShadow: '0 2px 8px rgba(107, 70, 193, 0.15)',
                  },
                }}
              >
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{ display: 'flex', alignItems: 'start', gap: 1.5 }}
                    >
                      <Typography
                        variant='body1'
                        sx={{
                          fontWeight: 700,
                          color: 'primary.main',
                          minWidth: '25px',
                          fontSize: '0.9rem',
                        }}
                      >
                        #{startIndex + index + 1}
                      </Typography>
                      <img
                        src={`/images/providers/${item.operator}.png`}
                        alt={getProviderDisplayName(item.operator)}
                        width={
                          item.operator === 'by-u' || item.operator === 'im3'
                            ? 80
                            : 100
                        }
                      />
                    </Box>

                    <Box sx={{ flex: 1 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          mb: 0.5,
                        }}
                      >
                        <Typography
                          variant='subtitle1'
                          sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                            fontSize: '1rem',
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                          }}
                        >
                          {getStatusIcon(item.status)}
                          <Chip
                            label={getStatusDisplayName(item.status)}
                            color={getStatusColor(item.status)}
                            size='small'
                            sx={{ fontWeight: 500, fontSize: '0.75rem' }}
                          />
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Box>
                          <Typography
                            variant='body2'
                            sx={{
                              color: 'text.secondary',
                              fontSize: '0.8rem',
                            }}
                          >
                            {item.phone_number} •{' '}
                            {getProviderDisplayName(item.operator)}
                          </Typography>
                          <Typography
                            variant='body2'
                            sx={{
                              color: 'text.secondary',
                              fontSize: '0.8rem',
                            }}
                          >
                            {formatDate(item.date)} • {item.transaction_id}
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                          <Typography
                            variant='subtitle1'
                            sx={{
                              fontWeight: 700,
                              color: 'text.primary',
                              fontSize: '1.2rem',
                              mb: 0.5,
                            }}
                          >
                            {formatCurrency(item.price)}
                          </Typography>
                          <Button
                            variant='outlined'
                            size='small'
                            sx={{
                              borderColor: 'primary.main',
                              color: 'primary.main',
                              fontSize: '0.75rem',
                              py: 0.25,
                              px: 1,
                              '&:hover': {
                                borderColor: 'primary.dark',
                                bgcolor: 'primary.main',
                                color: 'white',
                              },
                            }}
                          >
                            Lihat Detail
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))
          )}
        </Box>

        {pagination.totalPages > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 2 }}>
            <Pagination
              count={pagination.totalPages}
              page={pagination.currentPage}
              onChange={handlePageChange}
              color='primary'
              size='large'
              showFirstButton
              showLastButton
              sx={{
                '& .MuiPaginationItem-root': {
                  fontSize: '0.9rem',
                  fontWeight: 500,
                },
                '& .Mui-selected': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                },
              }}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default HistorySection;
