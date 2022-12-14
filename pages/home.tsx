import type { FunctionComponent } from 'react';

import { Avatar, Button, Container, Stack, Typography } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import {
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
} from '@firebase/firestore';

import Image from 'next/image';
import { PageLoading } from '../common/components/loading';
import { HomeOverview } from '../common/components/HomeOverview';
import { CardAccount } from '../common/components/cards/CardAccounts';
import { cardAccountMock } from '../common/components/cards/CardAccounts/CardAccount.mock';
import { NavigationMain } from '../common/components/navigation/NavigationMain/NavigationMain.component';
import { CardCredit } from '../common/components/cards';
import { cardCreditMock } from '../common/components/cards/CardCredit/CardCredit.mock';
import { db } from '../services/firebaseConfig2';

const Home: FunctionComponent = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [accounts, setAccounts] = useState<any[]>();

  const avatar = session?.user?.image ? session?.user?.image : '';
  const uid = session?.user?.id ? session?.user?.id : null;

  const q = query(collection(db, 'wallets'), where('ui', '==', uid));

  const walletsMain = onSnapshot(q, (querySnapshot) => {
    const walletsDB = new Array().fill(null);
    querySnapshot.forEach((doc) => {
      walletsDB.push(doc.data());
    });
    setAccounts(walletsDB);
  });

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
        <CardAccount accounts={accounts} />
        <CardCredit {...cardCreditMock} />
        <NavigationMain userId={uid} />
      </Container>
    </>
  );
};

export default Home;
