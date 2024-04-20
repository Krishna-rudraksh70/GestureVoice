// Onboarding.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, SIZES } from '../components/theme';

const slides = [
    {
      id: 1,
      title: "Welcome to GestureVoice!",
      description: "Get ready to embark on a journey of empowerment and inclusivity with GestureVoice, your gateway to effortless communication through sign language.",
      image: require("../assets/onboarding1.jpg"),
    },
    {
      id: 2,
      title: "Learn and Communicate",
      description: "Discover the beauty of sign language as you learn to communicate effectively with individuals who rely on nonverbal communication. GestureVoice offers intuitive tools to help you master this universal language.",
      image: require("../assets/onboarding2.jpg"),
    },
    {
      id: 3,
      title: "Personalized Experience",
      description: "Tailor GestureVoice to suit your unique needs and preferences. From choosing your preferred sign language dialect to customizing gesture recognition, our app puts you in control of your communication journey.",
      image: require("../assets/onboarding3.jpg"),
    },
    {
      id: 4,
      title: "Join the Community",
      description: "Connect with a vibrant community of learners, educators, and advocates passionate about promoting inclusivity and accessibility. Share your experiences, learn from others, and together, let's break down communication barriers with GestureVoice.",
      image: require("../assets/onboarding4.jpg"),
    },
  ];

const Onboarding = ({ onOnboardingComplete }) => {
  const buttonLabel = label => (
    <View
      style={{
        padding: 12,
      }}>
      <Text
        style={{
          color: COLORS.title,
          fontSize: SIZES.h4,
          fontWeight: '600',
        }}>
        {label}
      </Text>
    </View>
  );

  const handleDone = () => {
    onOnboardingComplete();
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={({ item }) => (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            padding: 15,
            paddingTop: 280,
          }}>
          <Image
            source={item.image}
            style={{
              width: SIZES.width - 80,
              height: 400,
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              fontWeight: 'bold',
              color: COLORS.title,
              fontSize: SIZES.h1,
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              alignItems: 'center',
              color: COLORS.title,
              fontSize: SIZES.h2,
              paddingTop: 5,
              marginHorizontal: 30,
            }}>
            {item.description}
          </Text>
        </View>
      )}
      activeDotStyle={{
        backgroundColor: COLORS.primary,
        width: 30,
      }}
      renderNextButton={() => buttonLabel('Next')}
      renderDoneButton={() => buttonLabel('Done')}
      onDone={handleDone}
    />
  );
};

export default Onboarding;
