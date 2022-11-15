import type { FunctionComponent } from 'react';

import { Card, Container } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import { Chart } from 'react-google-charts';

import { collection, query, where, onSnapshot } from '@firebase/firestore';

import { PageLoading } from '../common/components/loading';
import { HomeOverview } from '../common/components/HomeOverview';
import { db } from '../services/firebaseConfig2';
import { NavigationMain } from '../common/components/navigation';

const Graficos: FunctionComponent = () => {
  const { data: session, status } = useSession();
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

  const isLoading = status === 'loading';

  if (isLoading) {
    return <PageLoading />;
  }

  const data = [
    ['Task', 'Hours per Day'],
    ['Despesa', 10],
    ['Receita', 10],
  ];

  const options = {
    title: 'Balanço geral',
  };

  return (
    <>
      <HomeOverview
        srcAvatar={avatar}
        userName={session?.user?.name}
        onDisconnect={() => signOut()}
      />
      <Container maxWidth="lg">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={'100%'}
          height={'400px'}
        />
        <NavigationMain userId={uid} />
      </Container>
    </>
  );
};

export default Graficos;
