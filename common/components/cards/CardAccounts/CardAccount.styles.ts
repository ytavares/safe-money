import { styled } from '@mui/material/styles';
import { Card as MuiCard, Button as MuiButton, Typography, Stack, Box } from '@mui/material';

export const Card = styled(MuiCard)(() => ({
  background: '#FFFFFF',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '6px',
  padding: '14px 14px 32px 14px',
  marginTop: '-80px'
}))

export const Button = styled(MuiButton)(() => ({
  background: 'rgba(18, 201, 112, 0.27)',
  borderRadius: '6px',
  padding: '12px 0',
  fontWeight: 700,
  fontSize: '12px',
  lineHeight: '15px',
  color: '#038A49',
}))

export const BalanceBox = styled(Stack)(() => ({
  borderLeft: '5px solid #12C970',
  padding: '5px 5px 0px 10px',
  marginBottom: '10px'
}))

export const BalanceTitle = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '22px',
  color: '#B9B7B7',
  marginBottom: '5px'
}))

export const PlaceholderPhrase = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '22px',
  color: '#B9B7B7',
  marginBottom: '16px'
}))

export const BalanceValue = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: '18px',
  color: '#575656',
}))

export const AccountsTitle = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: '18px',
  lineHeight: '22px',
  color: '#575656',
  marginTop: '10px',
  marginBottom: '10px'
}))

export const AccountsItem = styled(Stack)(() => ({
  marginBottom: '10px'
}))

export const AccountIcon = styled(Box) (() => ({
  borderRadius: '50%',
  background: '#575656',
  opacity: 0.5,
  padding: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& svg': {
    color: '#FFFFFF',
  }
}))

export const BankIcon = styled(Box) (() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& img': {
    borderRadius: '50%',
    overflow: 'hidden',
    width: '100%',
    height: '100%'
  }
}))

export const AccountName = styled(Typography)(() => ({
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '18px',
  color: '#575656',
  marginLeft: '5px'
}))

export const AccountBalance = styled(Typography)(() => ({
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '18px',
  '&.positive': {
    color: '#12C970',
  },
  '&.negative': {
    color: 'red'
  }
}))