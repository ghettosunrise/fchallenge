import React, { useState } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Flex, Text } from "~/styled";
import { ScrollView, Dimensions, Image, StyleSheet } from "react-native";
import Onboarding from "../containers/Onboarding";
//import { Slider } from "../components/Slider";

// const screenWidth = Dimensions.get("window").width;
// const screenHeight = Dimensions.get("window").height;

const Router = createStackNavigator(
  {
    Home: Onboarding
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default Router;
