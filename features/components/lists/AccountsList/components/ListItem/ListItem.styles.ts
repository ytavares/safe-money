import { styled } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';

export const AccountNameBox = styled(Typography)(() => ({
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: '22px',
  color: '#575656'
}))

export const ListItemStack = styled(Stack)(() => ({
  borderBottom: '1px solid rgba(87, 86, 86, 0.4)',
  paddingBottom: '8px',
  paddingTop: '8px'
}))

export const AccountCategoryBox = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '18px',
  color: '#575656'
}))


export const AccountValueBox = styled(Typography)(() => ({
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