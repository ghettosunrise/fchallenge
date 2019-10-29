import React from "react";
import { ScrollView, Dimensions } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Router } from "~/router";

import { Flex, Text } from "~/styled";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppContainer = createAppContainer(Router);
