import React, { FC } from 'react';
import Stacks from './navigation';
import { Provider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components/native';

const App: FC = () => {
  const theme = {
    colors: {
      primary: '#770FDF',
      secondary: '#0FDF8F',
      tertiary: '#fff',
      background: '#fff',
    },
    spacing: {
      default: 20,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <Stacks />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
