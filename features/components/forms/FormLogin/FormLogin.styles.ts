import { styled } from '@mui/material/styles';
import { TextField, Button as MuiButton} from '@mui/material';

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

export const Button = styled(MuiButton)(({ theme }) => ({
  color: '#FFFFFF',
  padding: '5px 30px',
  borderRadius: '37px',
  marginTop: '26px',
  background: theme.palette.primary.main,
}));

export const ButtonCount = styled(MuiButton)(({ theme }) => ({
  color: '#FFFFFF',
  padding: '5px 30px',
  borderRadius: '37px',
  background: theme.palette.primary.main,
  minWidth: '100%',
  boxShadow: 'none',
  fontWeight: 700,
}));

export const ButtonIcon = styled(MuiButton)(({ theme }) => ({
  color: '#A0A0A0',
  padding: '11px 16px',
  borderRadius: '37px',
  marginBottom: '11px',
  background: '#F1F5F4',
  boxShadow: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  fontWeight: 700,
  textTransform: 'none',
  '& svg': {
    color: theme.palette.primary.main,
    
  },
  '&:hover': {
    color: '#FFFFFF'
  }
}));