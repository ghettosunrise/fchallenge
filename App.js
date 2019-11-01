import React, { useEffect, useState } from "react";
import { ScrollView, Dimensions } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Router } from "~/router";
import * as Font from "expo-font";

import { Flex, Text } from "~/styled";

const AppContainer = createAppContainer(Router);

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  return fontLoaded ? <AppContainer /> : null;
};

export default App;
