import { FunctionComponent, useMemo } from 'react';
import type { CardAccountProps } from './CardAccount.interface';

import { chain } from 'lodash';

import { Divider, Stack } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import clsx from 'clsx';
import {
  Card,
  Button,
  BalanceBox,
  BalanceTitle,
  BalanceValue,
  AccountsTitle,
  AccountsItem,
  AccountIcon,
  AccountName,
  AccountBalance,
  PlaceholderPhrase,
} from './CardAccount.styles';
import Image from 'next/image';
import ItauLogo from '../../../../public/images/itau-logo.jpg';

export const CardAccount: FunctionComponent<CardAccountProps> = ({
  accounts,
}) => {
  const totalValue = useMemo<number>(() => {
    return (
      accounts?.reduce((acc, cur) => {
        return cur.accountType === 'Receita'
          ? acc + (cur?.amount || 0)
          : acc - (cur?.amount || 0);
      }, 0) || 0
    );
  }, [accounts]);
  const bankAccounts = chain(accounts)
    .groupBy('accountBank')
    .map((value, key) => ({
      accountBank: key,
      accounts: value,
      totalBankValue:
        value?.reduce((acc, cur) => {
          return cur.accountType === 'Receita'
            ? acc + (cur?.amount || 0)
            : acc - (cur?.amount || 0);
        }, 0) || 0,
    }))
    .value();

  return (
    <Card>
      <Stack direction="column">
        <BalanceBox
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <BalanceTitle>Saldo geral</BalanceTitle>
          <BalanceValue>R$: {totalValue}</BalanceValue>
        </BalanceBox>

        <Divider />

        <AccountsTitle>Minhas contas</AccountsTitle>

        {bankAccounts && (
          <Stack>
            {bankAccounts?.map((account) => (
              <AccountsItem
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                key={account.accountBank}
              >
                <Stack direction="row" alignItems="center">
                  <AccountIcon>
                    <AccountBalanceWalletIcon />
                  </AccountIcon>
                  <AccountName>{account.accountBank}</AccountName>
                </Stack>
                <AccountBalance
                  className={clsx(
                    account.totalBankValue > 0 ? 'positive' : 'negative'
                  )}
                >
                  R$: {account.totalBankValue}
                </AccountBalance>
              </AccountsItem>
            ))}
          </Stack>
        )}

        {bankAccounts.length === 0 && (
          <PlaceholderPhrase textAlign="center">
            Você ainda não tem nenhuma conta cadastrada. 😊​😊​
          </PlaceholderPhrase>
        )}

        <Button href="/lista-contas">Gerenciar contas</Button>
      </Stack>
    </Card>
  );
};
