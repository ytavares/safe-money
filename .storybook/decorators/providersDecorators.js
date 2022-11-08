import { CssBaseline } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from 'emotion-theming';
import { ptBR } from 'date-fns/locale';
import { theme } from '../../src/theme/Theme';
import { DndContext } from '@dnd-kit/core';

export const providersDecorator = (Story) => (
  <LocalizationProvider locale={ptBR} dateAdapter={AdapterDateFns}>
    <ThemeProvider theme={theme}>
      <MUIThemeProvider theme={theme}>
          <DndContext>
            <CssBaseline />
            <Story />
          </DndContext>
      </MUIThemeProvider>
    </ThemeProvider>
  </LocalizationProvider>
);
