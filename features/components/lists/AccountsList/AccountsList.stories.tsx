import type { Story } from '@storybook/react';
import type { AccountsListProps } from './AccountsList.interface';

import { AccountsList } from './AccountsList.component';
import { AccountListMock } from './AccounstList.mock';

export default {
  title: 'Feature/Lists/AccountsList',
  component: AccountsList,
};

const Template: Story<AccountsListProps> = (props) => {
  return <AccountsList {...props} />;
};

export const Controls = Template.bind({});

Controls.args = AccountListMock;
