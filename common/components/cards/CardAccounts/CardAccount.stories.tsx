import type { Story } from '@storybook/react';
import type { CardAccountProps } from './CardAccount.interface';

import { CardAccount } from './CardAccount.component';
import { cardAccountMock } from './CardAccount.mock';
import { Box } from '@mui/material';

export default {
  title: 'Common/Cards/CardAccount',
  component: CardAccount,
};

const Template: Story<CardAccountProps> = (props) => {
  return (
    <Box maxWidth={500} marginTop="80px">
      <CardAccount {...props} />
    </Box>
  );
};

export const Controls = Template.bind({});

Controls.args = cardAccountMock;
