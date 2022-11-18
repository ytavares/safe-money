import { FunctionComponent, useEffect } from 'react';

import { Card, Container } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import { Chart } from 'react-google-charts';
import { chain } from 'lodash';

import { collection, query, where, onSnapshot } from '@firebase/firestore';

import { PageLoading } from '../common/components/loading';
import { HomeOverview } from '../common/components/HomeOverview';
import { db } from '../services/firebaseConfig2';
import { NavigationMain } from '../common/components/navigation';
import { CardGraph } from '../common/components/cards/CardGraph';

const Graficos: FunctionComponent = () => {
  const { data: session, status } = useSession();
  const [accounts, setAccounts] = useState<any[]>();
  const [despesas, setDespesas] = useState<number>(0);
  const [receitas, setReceitas] = useState<number>();

  const avatar = session?.user?.image ? session?.user?.image : '';
  const uid = session?.user?.id ? session?.user?.id : null;

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
        <CardGraph />
        <NavigationMain userId={uid} />
      </Container>
    </>
  );
};

export default Graficos;
