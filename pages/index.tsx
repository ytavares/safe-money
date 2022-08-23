import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import logo from '../public/images/Logo.png';
import { FormLogin } from '../features/components/forms/FormLogin';

export default function Home() {
  return (
    <Stack alignItems="center" justifyContent="center" height="100vh">
      <Box sx={{ marginBottom: '-75px' }}>
        <Image src={logo} alt="logo" />
      </Box>
      <FormLogin />
    </Stack>
  );
}
