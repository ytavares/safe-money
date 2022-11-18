import type { Story } from '@storybook/react';
import type { CardGraphProps } from './CardGraph.interface';

import { CardGraph } from './CardGraph.component';
import { Box } from '@mui/material';
import { Chart } from 'react-google-charts';

export default {
  title: 'Common/Cards/CardGraph',
  component: CardGraph,
};

const data = [
  ['Task', 'Hours per Day'],
  ['Despesa', 30],
  ['Receita', 40],
];

const options = {
  title: 'Balanço geral',
};

const Template: Story<CardGraphProps> = (props) => {
  return (
    <Box maxWidth={500} marginTop="0">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={'100%'}
        height={'400px'}
      />
    </Box>
  );
};

export const Controls = Template.bind({});
