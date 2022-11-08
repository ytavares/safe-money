import type { FunctionComponent } from 'react';
import type { DialogAddAccountProps } from './DialogAddAccount.interface';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import CloseIcon from '@mui/icons-material/Close';
import { FormAddAccount } from '../../forms';

export const DialogAddAccount: FunctionComponent<DialogAddAccountProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth={'lg'}>
      <DialogTitle>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography variant="h6" fontWeight={400} color="neutral.700">
            Adicionar conta
          </Typography>

          <IconButton
            aria-label="Fechar formulário"
            size="small"
            data-testid="close-button"
            onClick={onClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>
      </DialogTitle>

      <Divider />

      <DialogContent sx={{ paddingBottom: '24px' }}>
        <FormAddAccount onSubmit={onClose} />
      </DialogContent>
    </Dialog>
  );
};
