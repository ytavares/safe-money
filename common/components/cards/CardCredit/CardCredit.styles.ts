import { styled } from '@mui/material/styles';
import { Button, Card as MuiCard, Typography} from '@mui/material';

export const Card = styled(MuiCard)(() => ({
  background: '#FFFFFF',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '6px',
  padding: '24px 20px 24px 20px',
  marginTop: '40px'
}))

export const CardTitle = styled(Typography)(() => ({
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '18px',
  lineHeight: '22px',
  color: '#575656',
  marginBottom: '20px',
}))

export const CardMessage = styled(Typography)(() => ({
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '18px',
  lineHeight: '22px',
  color: '#575656',
  marginTop: '20px',
  marginBottom: '20px',
}))

export const CardDescription = styled(Typography)(() => ({
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '18px',
  color: '#575656',
  maxWidth: '260px',
  textAlign: 'center',
  marginTop: '0',
  marginBottom: '20px',
}))


export const CardButton = styled(Button)(() => ({
  background: '#575656',
  borderRadius: '5px',
  color: '#FFFFFF!important',
  padding: '4px 20px',
  textAlign: 'center'
}))