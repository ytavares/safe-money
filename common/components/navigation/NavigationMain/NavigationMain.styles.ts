import { styled } from '@mui/material/styles';
import { Stack as MuiStack, IconButton, Container, Button } from '@mui/material';

export const MainBox = styled(MuiStack)(({ theme }) => ({
  background: '#E7E7E7',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  bottom: 0,
  left: 0,
  borderRadius: '8px 8px 0 0',
  width: '100%',
  padding: '5px 0',
  position: 'fixed',
}));

export const ContainerBox = styled(Container)(({ theme }) => ({
  position: 'relative',
  padding: '0!important',
  bottom: 0,
  [theme.breakpoints.down('sm')]: {
    left: 0
  }
}));

export const SimpleButton = styled(Button)(({ theme }) => ({
  color: '#575656',
}));

export const MainButton = styled(IconButton)(({ theme }) => ({
  background: '#12C970',
  color: '#FFFFFF',
  '&:hover': {
    background: '#12C970',
    opacity: 1.5
  }
}));