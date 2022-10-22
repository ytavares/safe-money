import type { FunctionComponent } from 'react';

import { Avatar, Button, Stack, Typography } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { PageLoading } from '../common/components/loading';

const Home: FunctionComponent = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const avatar = session?.user?.image ? session?.user?.image : '';

  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, [session, router]);

  const isLoading = status === 'loading';

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <>
      <Typography variant="h1">Pagina inicial</Typography>
      <Stack direction="column">
        <Avatar alt="usuario" src={avatar} />
        <Typography variant="h5">Bem vindo {session?.user?.name} !</Typography>
      </Stack>
      <Button variant="contained" onClick={() => signOut()}>
        Deslogar
      </Button>
    </>
  );
};

export default Home;
