import React from 'react';
import { StatusBar } from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './utils/theme';
import SPA from './screens/SPA';
import  RequestsProvider   from './hooks';

RequestsProvider
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
        <RequestsProvider >
          <StatusBar
            barStyle="light-content"
            translucent 
            backgroundColor="transparent"
          />
          <SPA/>
        </RequestsProvider>
    </ThemeProvider>
  );
}

export default App;