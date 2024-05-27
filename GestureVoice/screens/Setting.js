import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import WebView from 'react-native-webview';

const Setting = () => {
  const [error, setError] = useState(false);

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://sign.mt/settings' }}
        style={styles.webview}
        onError={() => setError(true)}
      />
      {error && (
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructions}>Oops! Something went wrong.</Text>
          <Text style={styles.instructions}>- Check your internet connection.</Text>
          <Text style={styles.instructions}>- Restart your internet connection or router.</Text>
          <Text style={styles.instructions}>- If the issue persists, please contact us at{' '}
            <Text style={styles.emailLink}>gesturevoice.proj23@ipec.org.in</Text>
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  instructionsContainer: {
    position: 'absolute',
    bottom: 50,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    paddingVertical: 10,
  },
  instructions: {
    color: 'white',
    marginBottom: 5,
  },
  emailLink: {
    color: 'white',
    textDecorationLine: 'underline',
  },
});

export default Setting;