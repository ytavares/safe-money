import { Box, Container, Link, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import logo from '../public/images/logoFilled.png';
import { ButtonIcon } from '../features/components/forms/FormLogin/FormLogin.styles';
import GoogleIcon from '@mui/icons-material/Google';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { PageLoading } from '../common/components/loading';

export default function Index() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const isLoading = status === 'loading';

  if (isLoading) {
    return <PageLoading />;
  }

  if (session) {
    router.push('/home');
  }

  const handleOAuthSignIn = (provider: string) => () => signIn(provider);
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
          Fique a vontade para se autenticar como quiser
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
          Conecte-se da maneira que preferir
        </Typography>
        <Stack direction="column" maxWidth={400}>
          <ButtonIcon
            variant="contained"
            startIcon={<GoogleIcon />}
            fullWidth
            onClick={handleOAuthSignIn('google')}
          >
            Registre-se com o Google
          </ButtonIcon>
        </Stack>
      </Stack>
    </Container>
  );
}
