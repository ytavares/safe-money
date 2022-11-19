import { styled } from '@mui/material/styles';
import { Button, Card as MuiCard, Typography} from '@mui/material';

export const Card = styled(MuiCard)(() => ({
  background: '#FFFFFF',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '6px',
  padding: '0',
  marginTop: '-80px'
}))

export const PlaceholderPhrase = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '22px',
  color: '#B9B7B7',
  marginBottom: '16px',
  fontStyle: 'italic'
}))
export const DespesaText = styled(Typography)(() => ({
  color: 'red',
}))
export const ReceitaText = styled(Typography)(() => ({
  color: 'blue',
}))
export const DisponivelText = styled(Typography)(() => ({
  color: '#12C970',
}))