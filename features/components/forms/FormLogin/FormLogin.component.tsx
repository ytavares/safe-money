import type { FunctionComponent } from 'react';
import type { FormLoginProps } from './FormLogin.interface';

import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Link,
  Stack,
  TextField,
} from '@mui/material';

export const FormLogin: FunctionComponent<FormLoginProps> = () => {
  return (
    <Stack direction="column" maxWidth={300}>
      <TextField
        id="outlined-basic"
        label="Login"
        variant="outlined"
        sx={{ marginBottom: '12px' }}
      />
      <TextField id="outlined-basic" label="Senha" variant="outlined" />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Lembrar-me"
          />
        </FormGroup>
        <Link href="#">Esqueci minha senha </Link>
      </Stack>
      <Button
        variant="contained"
        sx={{ color: '#FFFFFF', padding: '5px 30px', borderRadius: '37px' }}
      >
        Acessar
      </Button>
    </Stack>
  );
};
