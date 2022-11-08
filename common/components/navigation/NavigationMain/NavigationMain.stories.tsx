import type { Story } from '@storybook/react';
import type { NavigationMainProps } from './NavigationMain.interface';

import { NavigationMain } from './NavigationMain.component';
import { Box } from '@mui/material';

export default {
  title: 'Common/Navigation/NavigationMain',
  component: NavigationMain,
};

const Template: Story<NavigationMainProps> = (props) => {
  return (
    <Box>
      <NavigationMain {...props} />
    </Box>
  );
};

export const Controls = Template.bind({});
