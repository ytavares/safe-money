import type { Story } from '@storybook/react';
import type { SplatScreenProps } from './SplatScreen.interface';

import { SplatScreen } from './SplatScreen.component';
import { splatScreenProps } from './SplatScreen.mock';

export default {
  title: 'Common/Screen/SplatScreen',
  component: SplatScreen,
};

const Template: Story<SplatScreenProps> = (props) => {
  return <SplatScreen {...props} />;
};

export const Controls = Template.bind({});

Controls.args = splatScreenProps;
