import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './utils/theme';
import SPA from './screens/SPA';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
        <SPA/>
    </ThemeProvider>
  );
}

export default App;