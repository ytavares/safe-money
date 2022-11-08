import type { Story } from '@storybook/react';
import type { DialogAddAccountProps } from './DialogAddAccount.interface';

import { DialogAddAccount } from './DialogAddAccount.component';

export default {
  title: 'Feature/Dialogs/DialogAddAccount',
  component: DialogAddAccount,
};

const Template: Story<DialogAddAccountProps> = (props) => {
  return <DialogAddAccount {...props} />;
};

export const Controls = Template.bind({});
