import type { Story } from '@storybook/react';
import type { CardCreditProps } from './CardCredit.interface';

import { CardCredit } from './CardCredit.component';
import { Box } from '@mui/material';
import { cardCreditMock } from './CardCredit.mock';

export default {
  title: 'Common/Cards/CardCredit',
  component: CardCredit,
};

const Template: Story<CardCreditProps> = (props) => {
  return (
    <Box maxWidth={500} marginTop="0">
      <CardCredit {...props} />
    </Box>
  );
};

export const Controls = Template.bind({});

Controls.args = cardCreditMock;
