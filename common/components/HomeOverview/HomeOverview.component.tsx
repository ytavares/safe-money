import type { FunctionComponent } from 'react';
import type { HomeOverviewProps } from './HomeOverview.interface';

import { Container, IconButton, Stack } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {
  BackgroundStack,
  Avatar,
  WellcomeText,
  UserText,
} from './HomeOverview.styles';

export const HomeOverview: FunctionComponent<HomeOverviewProps> = ({
  userName,
  srcAvatar,
  onDisconnect,
}) => {
  return (
    <BackgroundStack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Avatar
              alt="Avatar Profile"
              src={srcAvatar}
              imgProps={{ referrerPolicy: 'no-referrer' }}
            />
            <Stack direction="column">
              <WellcomeText>Bem vindo,</WellcomeText>
              <UserText>{userName}</UserText>
            </Stack>
          </Stack>
          <IconButton
            aria-label="notifications"
            sx={{ color: '#FFFFFF', height: '14px', width: '14px' }}
            onClick={onDisconnect}
          >
            <ExitToAppIcon />
          </IconButton>
        </Stack>
      </Container>
    </BackgroundStack>
  );
};
