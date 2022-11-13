import type { FunctionComponent } from 'react';

import { useState } from 'react';

import {
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
} from '@firebase/firestore';

import { Container } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import { PageLoading } from '../common/components/loading';
import { HomeOverview } from '../common/components/HomeOverview';
import { NavigationMain } from '../common/components/navigation/NavigationMain/NavigationMain.component';
import { AccountsList, List } from '../features/components/lists';
import { AccountListMock } from '../features/components/lists/AccountsList/AccounstList.mock';
import { db } from '../services/firebaseConfig2';

const ContasListas: FunctionComponent = () => {
  const { data: session, status } = useSession();
  const uid = session?.user?.id ? session?.user?.id : null;
  const [accounts, setAccounts] = useState<any[]>();

  const q = query(collection(db, 'wallets'), where('ui', '==', uid));

  const walletsMain = onSnapshot(q, (querySnapshot) => {
    const walletsDB = new Array().fill(null);
    querySnapshot.forEach((doc) => {
      walletsDB.push(doc.data());
    });
    setAccounts(walletsDB);
  });

  const avatar = session?.user?.image ? session?.user?.image : '';

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
        <NavigationMain userId={uid} />
        <AccountsList list={accounts} />
      </Container>
    </>
  );
};

export default ContasListas;
