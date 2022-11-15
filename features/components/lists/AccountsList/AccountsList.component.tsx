import type { FunctionComponent } from 'react';
import type { AccountsListProps } from './AccountsList.interface';

import { useMemo } from 'react';
import clsx from 'clsx';
import { useCountUp } from 'use-count-up';

import { ListItem } from './components';
import {
  Card,
  ListStack,
  PlaceholderPhrase,
  Total,
  Value,
} from './AccountsList.styles';

export const AccountsList: FunctionComponent<AccountsListProps> = ({
  list,
}) => {
  const totalValue = useMemo<number>(() => {
    return (
      list?.reduce((acc, cur) => {
        return cur.accountType === 'Receita'
          ? acc + (cur?.amount || 0)
          : acc - (cur?.amount || 0);
      }, 0) || 0
    );
  }, [list]);

  const { value } = useCountUp({
    isCounting: true,
    end: totalValue,
    duration: 2,
  });

  return (
    <Card>
      {list?.length === 0 && (
        <PlaceholderPhrase textAlign="center">
          Você ainda não tem nenhuma conta cadastrada. 😊​😊​
        </PlaceholderPhrase>
      )}
      {list?.map((item) => (
        <ListItem
          category={item.category}
          accountName={item.accountName}
          amount={item.amount}
          accountType={item.accountType}
          key={item.accountName}
        />
      ))}
      {list?.length !== 0 && (
        <ListStack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Total>Total:</Total>
          <Value className={clsx(totalValue < 0 ? 'negative' : 'positive')}>
            R$ {value}
          </Value>
        </ListStack>
      )}
    </Card>
  );
};
