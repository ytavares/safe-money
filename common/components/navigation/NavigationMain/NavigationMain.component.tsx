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

  const handleOpenDialog = useCallback(() => {
    setOpen(true);
  }, [setOpen]);
  const handleCloseDialog = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <ContainerBox maxWidth="lg">
      <MainBox
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <SimpleButton aria-label="home" color="primary" href="/home">
          <HomeIcon />
        </SimpleButton>
        <MainButton
          aria-label="add-count"
          color="primary"
          onClick={handleOpenDialog}
        >
          <AddIcon />
        </MainButton>
        <SimpleButton color="primary" href="/graficos">
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
