import type { FunctionComponent } from 'react';
import type { FormLoginProps } from './FormLogin.interface';

import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Link,
  Stack,
} from '@mui/material';
import { MuiTextField, Button } from './FormLogin.styles';

export const FormLogin: FunctionComponent<FormLoginProps> = () => {
  return (
    <Stack
      direction="column"
      maxWidth={400}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        direction="column"
        minWidth={300}
        alignItems="center"
        justifyContent="center"
      >
        <MuiTextField
          id="outlined-basic"
          placeholder="Login"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: '12px', borderRadius: '37px' }}
          InputProps={{
            sx: {
              '& input': {
                textAlign: 'center',
              },
            },
          }}
        />
        <MuiTextField
          id="outlined-basic"
          placeholder="Senha"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginBottom: '28px', borderRadius: '37px' }}
          InputProps={{
            sx: {
              '& input': {
                textAlign: 'center',
              },
            },
          }}
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        minWidth={350}
      >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Lembrar-me"
          />
        </FormGroup>
        <Link href="#" underline="none">
          Esqueci minha senha{' '}
        </Link>
      </Stack>
      <Stack justifyContent="center" alignItems="center">
        <Button variant="contained">Acessar</Button>
      </Stack>
    </Stack>
  );
};
