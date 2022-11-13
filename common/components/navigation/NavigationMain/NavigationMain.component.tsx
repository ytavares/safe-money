import { FunctionComponent, useCallback, useState } from 'react';
import type { NavigationMainProps } from './NavigationMain.interface';
import {
  ContainerBox,
  MainBox,
  MainButton,
  SimpleButton,
} from './NavigationMain.styles';
import { useRouter } from 'next/router';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { DialogAddAccount } from '../../../../features/components/dialogs';

export const NavigationMain: FunctionComponent<NavigationMainProps> = ({
  userId,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleRedirectHome = useCallback(() => {
    router.push('/home');
  }, []);

  const handleOpenDialog = useCallback(() => {
    setOpen(true);
  }, [setOpen]);
  const handleCloseDialog = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleRedirectGraph = useCallback(() => {
    router.push('/Graph');
  }, []);

  return (
    <ContainerBox maxWidth="lg">
      <MainBox
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <SimpleButton
          aria-label="home"
          color="primary"
          onClick={handleRedirectHome}
        >
          <HomeIcon />
        </SimpleButton>
        <MainButton
          aria-label="add-count"
          color="primary"
          onClick={handleOpenDialog}
        >
          <AddIcon />
        </MainButton>
        <SimpleButton
          aria-label="graph"
          color="primary"
          onClick={handleRedirectGraph}
        >
          <SignalCellularAltIcon />
        </SimpleButton>
      </MainBox>
      <DialogAddAccount
        open={open}
        onClose={handleCloseDialog}
        userId={userId}
      />
    </ContainerBox>
  );
};
