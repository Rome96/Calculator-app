import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import Calculator from './src/screens/Calculator';
import {AppStyle} from './src/Theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <AppStyle isDarkMode={isDarkMode}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Calculator />
    </AppStyle>
  );
};

export default App;
