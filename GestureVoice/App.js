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
    setShowOnboarding(false); // Hide onboarding screen after completion
    setShowHome(true); // Show home page after onboarding
  };

  return (
    <View style={{ flex: 1 }}>
      {showSplash && <Splash setShowSplash={setShowSplash} />}
      {!showHome && !showSplash && showOnboarding && (
        <Onboarding onOnboardingComplete={handleOnboardingComplete} />
      )}
      {!showSplash && !showOnboarding && <Home />}
    </View>
  );
};

export default App;
