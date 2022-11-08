import { styled } from '@mui/material/styles';
import { Stack as MuiStack, Avatar as MuiAvatar, Typography } from '@mui/material';

export const BackgroundStack = styled(MuiStack)(({ theme }) => ({
  background: '#12C970',
  width: '100%',
  padding: '80px 0 120px 0',
}));

export const Avatar = styled(MuiAvatar)(({ theme }) => ({
  height: '67px',
  width: '67px',
  marginRight: '10px',
  border: '1px solid #FFFFFF'
}));

export const WellcomeText = styled(Typography)(({ theme }) => ({
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '16px',
  color: theme.palette.common.white,
}));

export const UserText = styled(Typography)(({ theme }) => ({
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: '22px',
  color: theme.palette.common.white,
}));