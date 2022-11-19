import { FunctionComponent, useMemo } from 'react';
import type { CardAccountProps } from './CardAccount.interface';

import { chain } from 'lodash';

import { Avatar, Box, Divider, Stack } from '@mui/material';
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
  BankIcon,
} from './CardAccount.styles';
import Image from 'next/image';
import ItauLogo from '../../../../public/images/itau-logo.jpg';
import NuBankLogo from '../../../../public/images/nubankLogo.png';
import BradescoLogo from '../../../../public/images/bradescoLogo.png';
import BancoBrasilLogo from '../../../../public/images/brancoBrasilLogo.png';
import SantanderLogo from '../../../../public/images/santanderLogo.png';

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

  const ItauLogoPng = ItauLogo ? ItauLogo : '';

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

        <AccountsTitle>Minhas Carteiras</AccountsTitle>

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
                  {account.accountBank === 'Itau' && (
                    <BankIcon sx={{ borderRadius: '50%' }}>
                      <Image src={ItauLogo} alt="itau" width="29" height="29" />
                    </BankIcon>
                  )}
                  {account.accountBank === 'NuBank' && (
                    <BankIcon sx={{ borderRadius: '50%' }}>
                      <Image
                        src={NuBankLogo}
                        alt="itau"
                        width="29"
                        height="29"
                      />
                    </BankIcon>
                  )}
                  {account.accountBank === 'Bradesco' && (
                    <BankIcon sx={{ borderRadius: '50%' }}>
                      <Image
                        src={BradescoLogo}
                        alt="itau"
                        width="29"
                        height="29"
                      />
                    </BankIcon>
                  )}
                  {account.accountBank === 'Banco do Brasil' && (
                    <BankIcon sx={{ borderRadius: '50%' }}>
                      <Image
                        src={BancoBrasilLogo}
                        alt="itau"
                        width="29"
                        height="29"
                      />
                    </BankIcon>
                  )}
                  {account.accountBank === 'Santander' && (
                    <BankIcon sx={{ borderRadius: '50%' }}>
                      <Image
                        src={SantanderLogo}
                        alt="itau"
                        width="29"
                        height="29"
                      />
                    </BankIcon>
                  )}
                  {!account.accountBank && (
                    <AccountIcon>
                      <AccountBalanceWalletIcon />
                    </AccountIcon>
                  )}
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
            Você ainda não tem nenhuma carteira cadastrada. 😊​😊​
          </PlaceholderPhrase>
        )}

        <Button href="/lista-contas">Gerenciar contas</Button>
      </Stack>
    </Card>
  );
};
