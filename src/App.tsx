import React, { useEffect } from 'react';
import Router from './screens/router';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    SplashScreen.hide();
    return () => {
      SplashScreen.hide();
    };
  }, []);
  return <Router />;
}

export default App;


