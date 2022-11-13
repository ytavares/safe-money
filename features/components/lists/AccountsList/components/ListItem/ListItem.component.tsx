import type { FunctionComponent } from 'react';
import type { ListItemProps } from './ListItem.interface';

import clsx from 'clsx';

import { Stack } from '@mui/material';
import {
  AccountCategoryBox,
  AccountNameBox,
  AccountValueBox,
  ListItemStack,
} from './ListItem.styles';

export const ListItem: FunctionComponent<ListItemProps> = ({
  accountName,
  category,
  amount,
  accountType,
}) => {
  return (
    <ListItemStack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack justifyContent="flex-start" alignItems="flex-start">
        <AccountNameBox>{accountName}</AccountNameBox>
        <AccountCategoryBox>{category}</AccountCategoryBox>
      </Stack>
      <AccountValueBox
        className={clsx(accountType === 'Receita' ? 'positive' : 'negative')}
      >
        R$ {amount}
      </AccountValueBox>
    </ListItemStack>
  );
};
