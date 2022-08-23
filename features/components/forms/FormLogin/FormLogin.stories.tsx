import type { Story } from '@storybook/react';
import type { FormLoginProps } from './FormLogin.interface';

import { FormLogin } from './FormLogin.component';

export default {
  title: 'Feature/Forms/FormLogin',
  component: FormLogin,
};

const Template: Story<FormLoginProps> = (props) => {
  return <FormLogin {...props} />;
};

export const Controls = Template.bind({});
