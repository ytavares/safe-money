import { Box, Container, Link, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import logo from '../public/images/Logo.png';
import { Button } from '../features/components/forms/FormLogin/FormLogin.styles';

export default function Home() {
  return (
    <Container>
      <Stack alignItems="center" justifyContent="center" height="100vh">
        <Box sx={{ marginBottom: '-75px' }}>
          <Image src={logo} alt="logo" />
        </Box>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '21px',
            textAlign: 'center',
            maxWidth: '180px',
            color: '#636161',
            marginBottom: '15px',
          }}
        >
          Você sabe, tempo é dinheiro
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '18px',
            textAlign: 'center',
            color: '#9F9D9D',
            maxWidth: '374px',
            marginBottom: '170px',
          }}
        >
          Organize sua grana em poucos minutos e não perca tempo. Tenha tudo sob
          controle no seu celular ou no seu computador!
        </Typography>
        <Button
          variant="contained"
          sx={{ marginBottom: '8px' }}
          href="/newAccount"
        >
          Criar uma conta
        </Button>
        <Link href="/login" underline="none">
          Fazer login
        </Link>
      </Stack>
    </Container>
  );
}
