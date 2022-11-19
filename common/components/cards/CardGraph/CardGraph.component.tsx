import type { FunctionComponent } from 'react';
import type { CardGraphProps } from './CardGraph.interface';
import { useSession } from 'next-auth/react';
import { Stack, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from '@firebase/firestore';
import { Chart } from 'react-google-charts';
import { chain } from 'lodash';
import {
  Card,
  DespesaText,
  DisponivelText,
  PlaceholderPhrase,
  ReceitaText,
} from './CardGraph.styles';
import { db } from '../../../../services/firebaseConfig2';

export const CardGraph: FunctionComponent<CardGraphProps> = () => {
  const { data: session, status } = useSession();
  const [accounts, setAccounts] = useState<any[]>();
  const [despesas, setDespesas] = useState<number>(0);
  const [receitas, setReceitas] = useState<number>(0);

  const uid = session?.user?.id ? session?.user?.id : null;

  const q = query(collection(db, 'wallets'), where('ui', '==', uid));

  const walletsMain = onSnapshot(q, (querySnapshot) => {
    const walletsDB = new Array().fill(null);
    querySnapshot.forEach((doc) => {
      walletsDB.push(doc.data());
    });
    setAccounts(walletsDB);
  });

  const accountTypes = chain(accounts)
    .groupBy('accountType')
    .map((value, key) => ({
      accountType: key,
      accounts: value,
      totalAccountTypeValue:
        value?.reduce((acc, cur) => {
          return cur.accountType === 'Receita'
            ? acc + (cur?.amount || 0)
            : acc - (cur?.amount || 0);
        }, 0) || 0,
    }))
    .value();

  useEffect(() => {
    accountTypes.map((item) => {
      if (item.accountType === 'Despesa') {
        setDespesas(item.totalAccountTypeValue);
      } else {
        setReceitas(item.totalAccountTypeValue);
      }
    });
  }, [accountTypes]);
  const totDespesas = Math.abs(despesas);

  const tot = totDespesas + receitas;

  const percent = totDespesas;

  //x = percent
  //y = total
  // Quanto é 80% do valor total de despesa e receita(tot)
  const percentTot = (80 / 100) * receitas;

  //80% do valor de receita menos o valor gasto em despesas
  const totalGasto = percentTot - totDespesas;

  //x = percent
  //y = total
  // X é a porcentagem de Y(total)
  const percentDespesa = (receitas / tot) * 100;

  const data = [
    ['Task', 'Hours per Day'],
    ['Despesa', totDespesas],
    ['Receita', receitas],
  ];

  const options = {
    title: 'Balanço geral',
    colors: ['red', '#12C970'],
  };

  return (
    <Card>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={'100%'}
          height={'300px'}
        />
        <Stack
          justifyContent="flex-start"
          alignItems="center"
          p={4}
          sx={{ marginTop: '-80px', zIndex: 999 }}
        >
          <PlaceholderPhrase textAlign="center">
            Seguindo umas das maneiras para melhorar sua vida financeira,
            indicamos que economize 20% de suas receitas e direcione no máximo
            80% para despesas . 😊​😊​
          </PlaceholderPhrase>
          <ReceitaText>Receita: R${receitas}</ReceitaText>
          <DespesaText>Despesas: R${totDespesas}</DespesaText>
          <DisponivelText>
            Disponível para gastar: R${totalGasto}
          </DisponivelText>
          {totalGasto < 0 && (
            <PlaceholderPhrase textAlign="center" className="red">
              Você não conseguiu guardar os 20% desse mês. 😥😥 Não desista, no
              próximo mês nós conseguiremos. 🫡🫡
            </PlaceholderPhrase>
          )}
        </Stack>
      </Stack>
    </Card>
  );
};
