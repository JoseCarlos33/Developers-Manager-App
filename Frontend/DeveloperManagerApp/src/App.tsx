import React from 'react';
import { StatusBar } from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './utils/theme';
import SPA from './screens/SPA';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          translucent 
          backgroundColor="transparent"
        />
        <SPA/>
    </ThemeProvider>
  );
}

export default App;