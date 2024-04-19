import React from 'react';
import { View, Text, Button } from 'react-native';

const ErrorPage = ({ onRetry }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Error: No Internet Connection</Text>
      <Button title="Retry" onPress={onRetry} />
    </View>
  );
};

export default ErrorPage;