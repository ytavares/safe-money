import type { Story } from '@storybook/react';
import type { FormAddAccountProps } from './FormAddAccount.interface';

import { FormAddAccount } from './FormAddAccount.component';
import { Box } from '@mui/material';

export default {
  title: 'Feature/Forms/FormAddAccount',
  component: FormAddAccount,
};

const Template: Story<FormAddAccountProps> = (props) => {
  return (
    <Box width={300}>
      <FormAddAccount {...props} />
    </Box>
  );
};

export const Controls = Template.bind({});
