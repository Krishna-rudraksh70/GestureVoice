import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import WebView from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Setting from './Setting';

const Tab = createBottomTabNavigator();

const Home = () => {
  const [error, setError] = useState(false);

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://sign.mt/' }}
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

const HomeScreen = () => {
  return <Home />;
};

const Navbar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: styles.tabBarStyle, // Apply custom styles
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    marginTop: 25,
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
  flexContainer: {
    flex: 1,
  },
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 57, 
    backgroundColor: 'white',
    elevation: 10, // Adds shadow on Android
    zIndex: 1,
  },
});

export default Navbar;
