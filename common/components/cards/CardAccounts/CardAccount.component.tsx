import { FunctionComponent, useEffect, useState } from 'react';
import type { CardAccountProps } from './CardAccount.interface';

import { Box, Divider, Stack } from '@mui/material';
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
} from './CardAccount.styles';

export const CardAccount: FunctionComponent<CardAccountProps> = ({
  generalBalance,
  visible,
  accounts,
}) => {
  return (
    <Card>
      <Stack direction="column">
        <BalanceBox
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <BalanceTitle>Saldo geral</BalanceTitle>
          <BalanceValue>R$: {generalBalance}</BalanceValue>
        </BalanceBox>

        <Divider />

        <AccountsTitle>Minhas contas</AccountsTitle>

        <Stack>
          {accounts?.map((account) => (
            <AccountsItem
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" alignItems="center">
                {account.src ? (
                  <Box
                    sx={{
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      '& img': { margin: 0 },
                    }}
                  >
                    <img src={account.src} alt="iconAccount" />
                  </Box>
                ) : (
                  <AccountIcon>
                    <AccountBalanceWalletIcon />
                  </AccountIcon>
                )}
                <AccountName>{account.name}</AccountName>
              </Stack>
              <AccountBalance
                className={clsx(
                  account.generalBalance >= 0 ? 'positive' : 'negative'
                )}
              >
                R$: {account.generalBalance}
              </AccountBalance>
            </AccountsItem>
          ))}
        </Stack>

        <Button>Gerenciar contas</Button>
      </Stack>
    </Card>
  );
};
