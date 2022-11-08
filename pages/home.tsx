import type { FunctionComponent } from 'react';

import { Avatar, Button, Container, Stack, Typography } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { PageLoading } from '../common/components/loading';
import { HomeOverview } from '../common/components/HomeOverview';
import { CardAccount } from '../common/components/cards/CardAccounts';
import { cardAccountMock } from '../common/components/cards/CardAccounts/CardAccount.mock';
import { NavigationMain } from '../common/components/navigation/NavigationMain/NavigationMain.component';
import { CardCredit } from '../common/components/cards';
import { cardCreditMock } from '../common/components/cards/CardCredit/CardCredit.mock';

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
      <HomeOverview
        srcAvatar={avatar}
        userName={session?.user?.name}
        onDisconnect={() => signOut()}
      />
      <Container maxWidth="lg">
        <CardAccount {...cardAccountMock} />
        <CardCredit {...cardCreditMock} />
        <NavigationMain />
      </Container>
    </>
  );
};

export default Home;
