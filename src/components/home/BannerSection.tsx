import { Box, Container, Stack } from '@mui/material';

const BannerSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        py: 4,
        px: 3,
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth='xl'>
        <Stack
          direction='row'
          justifyContent='space-around'
          alignItems='center'
          spacing={3}
        >
          {[
            'telkomsel',
            'indosat',
            'xl-axiata',
            'smartfren',
            'by-u',
            'im3',
          ].map((provider) => (
            <img
              key={provider}
              src={`/images/providers/${provider}.png`}
              alt={`${provider} logo`}
              width={provider === 'by-u' || provider === 'im3' ? 70 : 100}
              style={{
                cursor: 'pointer',
                opacity: 1,
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default BannerSection;
