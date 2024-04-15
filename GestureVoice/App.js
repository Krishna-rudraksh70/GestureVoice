import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import WebView from 'react-native-webview';
import Splash from './screens/splash';

const { width, height } = Dimensions.get('window');

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {showSplash ? (
        <Splash />
      ) : (
        <WebView
          source={{ uri: 'https://sign.mt/' }}
          renderLoading={() => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}
          startInLoadingState
        />
      )}
    </View>
  );
};

export default App;
