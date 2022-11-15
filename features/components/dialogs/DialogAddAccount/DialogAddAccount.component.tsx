import type { FunctionComponent } from 'react';
import type { DialogAddAccountProps } from './DialogAddAccount.interface';

import { addDoc, collection, getFirestore } from '@firebase/firestore';
import dayjs, { Dayjs } from 'dayjs';

import { useState, useEffect } from 'react';

import { initializeApp } from 'firebase/app';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import CloseIcon from '@mui/icons-material/Close';
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale';
import { useSession } from 'next-auth/react';
import {
  selectAccountType,
  selectCategory,
} from '../../forms/FormAddAccount/FormAddAccount.mock';

export const DialogAddAccount: FunctionComponent<DialogAddAccountProps> = ({
  open,
  userId,
  onClose,
  onSubmit,
}) => {
  const { data: session } = useSession();
  const [accountBank, setAccountBank] = useState('');
  const [accountType, setAccountType] = useState('');
  const [accountName, setAccountName] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [newDate, setNewDate] = useState(new Date());
  const [disabledCategory, setDisabledCategory] = useState<boolean>(false);

  const handleChangeDate = (newValue: any) => {
    setNewDate(newValue);
  };

  const amountNumber = Number(amount);

  const firebaseConfig = initializeApp({
    apiKey: 'AIzaSyA09Nrnn32C1UIYLD4GF7qp2adqfmbeJrk',
    authDomain: 'moneysafe-bfcf1.firebaseapp.com',
    projectId: 'moneysafe-bfcf1',
  });
  const db = getFirestore(firebaseConfig);

  const walletCollectionRef = collection(db, 'wallets');

  async function handleCreateAccount() {
    const account = await addDoc(walletCollectionRef, {
      ui: userId,
      accountBank,
      accountType,
      accountName,
      category,
      amount: amountNumber,
      newDate,
    });
    onClose?.();
  }

  useEffect(() => {
    accountType === 'Receita'
      ? setDisabledCategory(true)
      : setDisabledCategory(false);
  }, [accountType, setDisabledCategory]);

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
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Box
            component="form"
            sx={{
              '& > :not(style)': { my: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="account-bank"
              label="Banco"
              variant="outlined"
              size="small"
              onChange={(e) => setAccountBank(e.target.value)}
              fullWidth
            />
            <Autocomplete
              disablePortal
              id="account-type"
              options={selectAccountType}
              size="small"
              onInputChange={(event, newInputValue) => {
                setAccountType(newInputValue);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Tipo de conta" />
              )}
            />
            <TextField
              id="account-name"
              label="Nome da conta"
              variant="outlined"
              size="small"
              onChange={(e) => setAccountName(e.target.value)}
              fullWidth
            />
            <Autocomplete
              disablePortal
              id="category"
              size="small"
              options={selectCategory}
              disabled={disabledCategory}
              onInputChange={(event, newInputValue) => {
                setCategory(newInputValue);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Categoria" />
              )}
            />
            <FormControl fullWidth sx={{ my: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">Valor</InputLabel>
              <OutlinedInput
                id="amount"
                onChange={(e) => setAmount(e.target.value)}
                size="small"
                startAdornment={
                  <InputAdornment position="start">R$</InputAdornment>
                }
                label="Valor"
              />
            </FormControl>
            <LocalizationProvider
              adapterLocale={ptBR}
              dateAdapter={AdapterDateFns}
            >
              <DesktopDatePicker
                label="Data de vencimento"
                inputFormat="dd/MM/yyyy"
                value={newDate}
                onChange={handleChangeDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
          <Button
            variant="contained"
            size="small"
            fullWidth
            sx={{
              marginTop: '8px',
              background: '#12C970',
              color: '#FFFFFF',
              '&:hover': { background: '#12C970', opacity: 1.5 },
            }}
            onClick={handleCreateAccount}
          >
            Cadastrar
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
