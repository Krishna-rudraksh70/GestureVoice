import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import WebView from 'react-native-webview';
import Splash from './Splash';
import ErrorPage from './Error';

const { width, height } = Dimensions.get('window');

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const handleWebViewError = () => {
    setError(true);
  };

  const handleRetry = () => {
    setError(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {showSplash ? (
        <Splash />
      ) : error ? (
        <ErrorPage onRetry={handleRetry} />
      ) : (
        <WebView
          source={{ uri: 'https://sign.mt/' }}
          renderLoading={() => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}
          startInLoadingState
          onError={handleWebViewError}
          style={{ marginTop: 25 }}
        />
      )}
    </View>
  );
};

export default Home;
