import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { COLORS, SIZES } from "./components/theme";
import Home from "./screens/Home";

const slides = [
  {
    id: 1,
    title: "Title",
    description: "Description",
    image: require("./assets/onboarding1.jpg"),
  },
  {
    id: 2,
    title: "Title2",
    description: "Description",
    image: require("./assets/onboarding2.jpg"),
  },
  {
    id: 3,
    title: "Title3",
    description: "Description",
    image: require("./assets/onboarding3.jpg"),
  },
  {
    id: 4,
    title: "Title4",
    description: "Description",
    image: require("./assets/onboarding4.jpg"),
  },
];

export default function App() {
  const [showHomePage, setShowHomePage] = useState(false);
  const buttonLabel = (label) => {
    return (
      <View
        style={{
          padding: 12,
        }}
      >
        <Text
          style={{
            color: COLORS.title,
            fontSize: SIZES.h4,
            fontWeight: "600",
          }}
        >
          {label}
        </Text>
      </View>
    );
  };

  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                padding: 15,
                paddingTop: 280,
              }}
            >
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
                  fontWeight: "bold",
                  color: COLORS.title,
                  fontSize: SIZES.h1,
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  alignItems: "center",
                  color: COLORS.title,
                  fontSize: SIZES.h2,
                  paddingTop: 5,
                }}
              >
                {item.description}
              </Text>
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
          width: 30,
        }}
        renderNextButton={() => buttonLabel("Next")}
        // renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          setShowHomePage(true);
        }}
        // onSkip={() => {
        //   setShowHomePage(true);
        // }}
      />
    );
  }

  return <Home />;
}
