import type { Story } from '@storybook/react';
import type { AccountsListProps } from './AccountsList.interface';

import { AccountsList } from './AccountsList.component';
import { AccountListMock } from './AccounstList.mock';
import { Box } from '@mui/material';

export default {
  title: 'Feature/Lists/AccountsList',
  component: AccountsList,
};

const Template: Story<AccountsListProps> = (props) => {
  return (
    <Box maxWidth={500} marginTop="80px">
      <AccountsList {...props} />
    </Box>
  );
};

export const Controls = Template.bind({});

Controls.args = AccountListMock;
