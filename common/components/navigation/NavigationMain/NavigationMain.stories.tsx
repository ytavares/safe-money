import type { Story } from '@storybook/react';
import type { NavigationMainProps } from './NavigationMain.interface';

import { NavigationMain } from './NavigationMain.component';
import { Box } from '@mui/material';
import {
  ContainerBox,
  MainBox,
  MainButton,
  SimpleButton,
} from './NavigationMain.styles';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

export default {
  title: 'Common/Navigation/NavigationMain',
  component: NavigationMain,
};

const Template: Story<NavigationMainProps> = (props) => {
  return (
    <Box>
      <MainBox
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <SimpleButton aria-label="home" color="primary" href="/home">
          <HomeIcon />
        </SimpleButton>
        <MainButton aria-label="add-count" color="primary">
          <AddIcon />
        </MainButton>
        <SimpleButton color="primary" href="/graficos">
          <SignalCellularAltIcon />
        </SimpleButton>
      </MainBox>
    </Box>
  );
};

export const Controls = Template.bind({});
