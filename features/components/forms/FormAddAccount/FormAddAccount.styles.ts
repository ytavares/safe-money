import { styled } from '@mui/material/styles';
import { TextField} from '@mui/material';

export const MuiTextField = styled(TextField)(() => ({
  color: 'black',
  background: '#F1F5F4',
  textAlign: 'center',
  '& fieldset': {
    borderRadius: '37px',
    color: 'black',
    border: 'none',
  }
}));