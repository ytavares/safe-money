import type { FormAddAccountProps } from './FormAddAccount.interface';
import { FunctionComponent, useCallback } from 'react';
import { useEffect } from 'react';

import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  doc,
  deleteDoc,
  setDoc,
} from '@firebase/firestore';

import { useState } from 'react';

import { initializeApp } from 'firebase/app';

import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from '@mui/material';
import { selectAccountType, selectCategory } from './FormAddAccount.mock';
import { useSession } from 'next-auth/react';

export const FormAddAccount: FunctionComponent<FormAddAccountProps> = ({
  onSubmit,
}) => {
  const { data: session } = useSession();
  const [accountType, setAccountType] = useState('');
  const [accountName, setAccountName] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const firebaseConfig = initializeApp({
    apiKey: 'AIzaSyA09Nrnn32C1UIYLD4GF7qp2adqfmbeJrk',
    authDomain: 'moneysafe-bfcf1.firebaseapp.com',
    projectId: 'moneysafe-bfcf1',
  });
  const db = getFirestore(firebaseConfig);

  const uuid = session?.user?.id;

  const walletCollectionRef = collection(db, 'wallets');

  async function handleCreateAccount() {
    const account = await addDoc(walletCollectionRef, {
      ui: uuid,
      accountType,
      accountName,
      category,
      amount,
    });
  }

  const handleCreate = useCallback(() => {
    handleCreateAccount();
  }, []);

  return (
    <>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Box
          component="form"
          sx={{
            '& > :not(style)': { my: 1, width: '100%' },
          }}
          noValidate
          autoComplete="off"
        >
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
    </>
  );
};
