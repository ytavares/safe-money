import { Box, Container, Link, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import logo from '../public/images/logoFilled.png';
import {
  ButtonCount,
  ButtonIcon,
} from '../features/components/forms/FormLogin/FormLogin.styles';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';

export default function LostPassword() {
  return (
    <Container>
      <Stack alignItems="center" justifyContent="center" height="100vh">
        <Link href="/">
          <Box>
            <Image src={logo} alt="logo" />
          </Box>
        </Link>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '12px',
            lineHeight: '16px',
            color: '#000000',
            maxWidth: '148px',
            textAlign: 'center',
            marginBottom: '75px',
          }}
        >
          Fique a vontade para criar sua conta como quiser
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '16px',
            color: '#000000',
            textAlign: 'center',
            marginBottom: '19px',
          }}
        >
          Crie sua conta para começar a controlar seus gastos
        </Typography>
        <Stack direction="column" maxWidth={400}>
          <ButtonCount
            variant="contained"
            sx={{ marginBottom: '11px', maxWidth: '335px', marginTop: 0 }}
            href="/login"
            fullWidth
          >
            Já tenho uma conta
          </ButtonCount>
          <ButtonIcon
            variant="contained"
            startIcon={<SmartphoneIcon />}
            fullWidth
          >
            Registre-se com o número do telefone
          </ButtonIcon>
          <ButtonIcon variant="contained" startIcon={<GoogleIcon />} fullWidth>
            Registre-se com o Google
          </ButtonIcon>
          <ButtonIcon
            variant="contained"
            startIcon={<FacebookIcon />}
            fullWidth
          >
            Registre-se com o Facebook
          </ButtonIcon>
          <ButtonIcon variant="contained" startIcon={<AppleIcon />} fullWidth>
            Registre-se com a Apple
          </ButtonIcon>
        </Stack>
      </Stack>
    </Container>
  );
}
