import type { FunctionComponent } from 'react';
import type { ListItemProps } from './ListItem.interface';

import clsx from 'clsx';

import { IconButton, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  AccountCategoryBox,
  AccountNameBox,
  AccountValueBox,
  ListItemStack,
} from './ListItem.styles';
import { deleteDoc, doc } from '@firebase/firestore';
import { db } from '../../../../../../services/firebaseConfig2';

export const ListItem: FunctionComponent<ListItemProps> = ({
  accountName,
  amount,
  accountType,
  id,
}) => {
  const handleDelete = (id: string) => async () => {
    await deleteDoc(doc(db, 'wallets', id));
  };

  return (
    <ListItemStack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack justifyContent="flex-start" alignItems="flex-start">
        <AccountNameBox>{accountName}</AccountNameBox>
        <AccountValueBox
          className={clsx(accountType === 'Receita' ? 'positive' : 'negative')}
        >
          R$ {amount}
        </AccountValueBox>
      </Stack>
      <IconButton aria-label="delete" onClick={handleDelete(id)}>
        <DeleteIcon />
      </IconButton>
    </ListItemStack>
  );
};
