import React, { useState } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Flex, Text } from "~/styled";
import { ScrollView, Dimensions, Image, StyleSheet } from "react-native";
import { Slider } from "../../components/Slider";

const Onboarding = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Flex grow={1} height="100%" width={screenWidth}>
      <Slider activeSlide={activeSlide}>
        <Flex width="100%" height="100%">
          <Image
            style={{ width: "100%", height: "50%" }}
            source={{
              uri:
                "https://24smi.org/public/media/celebrity/2016/12/29/jB6QtLbJYQzJ_diego-maradona.jpg"
            }}
          />
          <Flex width="100%" flex-direction="row">
            <Text>A whole new {"\n"} experience</Text>
            <Text>123</Text>
          </Flex>
        </Flex>
        <Flex width="100%" height="90%">
          <Image
            style={{ width: "100%", height: "50%" }}
            source={{
              uri:
                "https://24smi.org/public/media/celebrity/2016/12/29/jB6QtLbJYQzJ_diego-maradona.jpg"
            }}
          />
          <Flex width="100%" flex-direction="row">
            <Text>A whole new experience</Text>
            <Text>123</Text>
          </Flex>
        </Flex>
      </Slider>
      <Flex.Touchable onPress={() => setActiveSlide(activeSlide + 1)}>
        <Text>increment slide</Text>
      </Flex.Touchable>
    </Flex>
  );
};

export default Onboarding;
