import {
  Alert,
  Box,
  Button,
  Card,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {
  phoneNumberSchema,
  type PhoneNumberSchema,
} from '../../schemas/phoneNumber.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getPhoneNumberDetail } from '../../lib/api/phoneNumber.api';
import { usePhoneNumberStore } from '../../store/phoneNumber.store';

const PhoneNumberSection = () => {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertSeverity, setAlertSeverity] = useState<'error' | 'success'>(
    'error',
  );

  const queryClient = useQueryClient();

  const form = useForm<PhoneNumberSchema>({
    resolver: zodResolver(phoneNumberSchema),
    mode: 'onSubmit',
    defaultValues: {
      phoneNumber: usePhoneNumberStore((state) => state.phoneNumber) || '',
    },
  });

  const { register, handleSubmit, formState, watch } = form;

  const phoneNumberValue = watch('phoneNumber');

  const mutation = useMutation({
    mutationFn: getPhoneNumberDetail,
    onSuccess: (result) => {
      if (result.success) {
        if (result.data) {
          console.log(result.data);
          usePhoneNumberStore
            .getState()
            .setPhone(result.data?.phonenumber, result.data?.operator);
          setAlertMessage('Nomor telepon berhasil diverifikasi!');
          setAlertSeverity('success');

          queryClient.invalidateQueries({ queryKey: ['credits'] });
          queryClient.invalidateQueries({ queryKey: ['packetData'] });
        }
      } else {
        setAlertMessage('Nomor telepon tidak valid atau tidak ditemukan');
        setAlertSeverity('error');
      }
    },
    onError: () => {
      setAlertMessage('Nomor telepon tidak valid atau tidak ditemukan');
      setAlertSeverity('error');
    },
  });

  const onSubmit = (data: PhoneNumberSchema) => {
    mutation.mutate(data);
  };

  console.log(usePhoneNumberStore((state) => state.phoneNumber));

  return (
    <Container maxWidth='md' sx={{ py: 8 }} id='phone-number-section'>
      <Card
        sx={{
          py: 6,
          px: 6,
          borderRadius: 3,
          boxShadow: 'none',
          border: '2px solid #6B46C1',
          backgroundColor: 'white',
        }}
      >
        <Typography
          variant='h4'
          component='h2'
          sx={{
            textAlign: 'center',
            fontWeight: 'semibold',
            mb: 2,
            color: '#1E293B',
            fontSize: '1.9rem',
          }}
        >
          Temukan Paket Terbaik dengan Nomor Anda
        </Typography>

        <Typography
          variant='body1'
          sx={{
            textAlign: 'center',
            color: 'black',
            mb: 4,
            fontWeight: 300,
          }}
        >
          Masukkan nomor ponsel Anda, kami akan mendeteksi operator secara
          otomatis dan menampilkan pilihan yang paling sesuai.
        </Typography>

        {alertMessage && (
          <Alert
            severity={alertSeverity}
            sx={{ mb: 3, maxWidth: 500, mx: 'auto', borderRadius: 3 }}
            onClose={() => setAlertMessage(null)}
          >
            {alertMessage}
          </Alert>
        )}

        <Box
          component='form'
          sx={{
            display: 'flex',
            gap: 0,
            alignItems: 'stretch',
            maxWidth: 500,
            mx: 'auto',
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            fullWidth
            placeholder='Masukkan nomor telepon'
            variant='outlined'
            {...register('phoneNumber')}
            error={!!formState.errors.phoneNumber}
            helperText={formState.errors.phoneNumber?.message}
            inputProps={{
              maxLength: 13,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <PhoneIcon sx={{ color: '#999' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '25px 0 0 25px',
                backgroundColor: '#F1F5F9',
                border: 'none',
                '& fieldset': {
                  border: 'none',
                },
                '&.Mui-focused fieldset': {
                  border: '1px solid black',
                  outline: 'none',
                },
              },
            }}
          />
          <Button
            type='submit'
            variant='contained'
            disabled={!phoneNumberValue || phoneNumberValue.trim() === ''}
            sx={{
              backgroundColor: '#6B46C1',
              color: 'white',
              px: 4,
              borderRadius: '0 25px 25px 0',
              textTransform: 'uppercase',
              fontWeight: 600,
              letterSpacing: '0.1em',
              fontSize: '0.8rem',
              minWidth: 120,
              '&:hover': {
                backgroundColor: '#553C9A',
              },
              '&:disabled': {
                backgroundColor: '#9CA3AF',
                color: '#6B7280',
              },
            }}
          >
            Verifikasi
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default PhoneNumberSection;
