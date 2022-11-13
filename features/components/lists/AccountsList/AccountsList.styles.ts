import { styled } from '@mui/material/styles';
import { Card as MuiCard, Typography, Stack } from '@mui/material';

export const Card = styled(MuiCard)(() => ({
  background: '#FFFFFF',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '6px',
  padding: '14px 14px 32px 14px',
  marginTop: '-80px'
}))

export const Total = styled(Typography)(() => ({
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: '22px',
  color: '#575656',
  marginTop: '16px'
}))

export const Value = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '18px',
  '&.positive': {
    color: '#12C970',
  },
  '&.negative': {
    color: 'red'
  }
}))

export const ListStack = styled(Stack)(() => ({
  paddingTop: '8px'
}))

export const PlaceholderPhrase = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '22px',
  color: '#B9B7B7',
  marginTop: '16px'
}))