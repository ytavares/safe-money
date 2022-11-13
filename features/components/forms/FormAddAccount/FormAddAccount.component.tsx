import type { FormAddAccountProps } from './FormAddAccount.interface';
import { FunctionComponent } from 'react';

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

export const FormAddAccount: FunctionComponent<FormAddAccountProps> = ({
  onSubmit,
}) => {
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
            renderInput={(params) => (
              <TextField {...params} label="Tipo de conta" />
            )}
          />
          <TextField
            id="account-name"
            label="Nome da conta"
            variant="outlined"
            size="small"
            fullWidth
          />
          <Autocomplete
            disablePortal
            id="category"
            size="small"
            options={selectCategory}
            renderInput={(params) => (
              <TextField {...params} label="Categoria" />
            )}
          />
          <FormControl fullWidth sx={{ my: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Valor</InputLabel>
            <OutlinedInput
              id="amount"
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
        >
          Cadastrar
        </Button>
      </Stack>
    </>
  );
};
