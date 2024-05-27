import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Home from './screens/Home';
import Onboarding from './screens/Onboarding';
import Splash from './screens/Splash';

const App = () => {
  const [showHome, setShowHome] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 1700);

    return () => clearTimeout(splashTimer);
  }, []);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    setShowHome(true);
  };

  return (
    <View style={{ flex: 1 }}>
      {showSplash && <Splash setShowSplash={setShowSplash} />}
      {!showSplash && showOnboarding && (
        <Onboarding onOnboardingComplete={handleOnboardingComplete} />
      )}
      {!showSplash && !showOnboarding && showHome && <Home />}
      {showHome}
    </View>
  );
};

export default App;
