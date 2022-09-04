import { Box, Container, Link, Stack } from '@mui/material';
import Image from 'next/image';
import logo from '../public/images/Logo.png';
import { FormLogin } from '../features/components/forms/FormLogin';

export default function Login() {
  return (
    <Container>
      <Stack alignItems="center" justifyContent="center" height="100vh">
        <Link href="/">
          <Box sx={{ marginBottom: '-75px' }}>
            <Image src={logo} alt="logo" />
          </Box>
        </Link>
        <FormLogin />
      </Stack>
    </Container>
  );
}
