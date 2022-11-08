import type { Story } from '@storybook/react';
import type { HomeOverviewProps } from './HomeOverview.interface';

import { HomeOverview } from './HomeOverview.component';
import { homeOverviewMock } from './HomeOverview.mock';
import { Box } from '@mui/material';

export default {
  title: 'Common/HomeOverview',
  component: HomeOverview,
};

const Template: Story<HomeOverviewProps> = (props) => {
  return (
    <Box>
      <HomeOverview {...props} />
    </Box>
  );
};

export const Controls = Template.bind({});

Controls.args = homeOverviewMock;
