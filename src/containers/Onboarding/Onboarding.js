import React, { useState, useEffect } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Flex, Text } from "~/styled";
import { ScrollView, Dimensions, Image, StyleSheet } from "react-native";
import { Slider } from "../../components/Slider";
import * as Font from "expo-font";

const Onboarding = fontLoaded => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const [activeSlide, setActiveSlide] = useState(0);

  const styles = StyleSheet.create({
    title: {
      fontFamily: "open-sans-bold",
      fontSize: 18,
      color: "#000000",
      textAlign: "center",
      marginBottom: 65,
      textTransform: "uppercase",
      alignSelf: "stretch"

      //width:
    },
    textContainer: {
      padding: 40
    },
    centerText: {
      fontSize: 17,
      letterSpacing: 0,
      alignSelf: "center",
      lineHeight: 23
    },

    nextButton: {
      fontSize: 17,
      letterSpacing: 0
    }
  });

  return (
    <Flex grow={1} height="100%" width={screenWidth}>
      <Slider activeSlide={activeSlide} setActiveSlide={setActiveSlide}>
        <Flex width="100%" height="100%" alignItems="center">
          <Image
            style={{ width: "100%", height: "50%" }}
            source={{
              uri:
                "https://24smi.org/public/media/celebrity/2016/12/29/jB6QtLbJYQzJ_diego-maradona.jpg"
            }}
          />
          <Flex width="100%" style={styles.textContainer}>
            <Text style={styles.title}>A whole new {"\n"} experience</Text>
            <Text style={styles.centerText}>
              Welcome to the new <Text.Bold>Forza Challenge.</Text.Bold>
              {"\n"}
              Here you can challenge friends and{"\n"} fans around the world for
              awesome {"\n"}prizes or just for fun!
            </Text>
          </Flex>
        </Flex>
        <Flex width="100%" height="100%">
          <Image
            style={{ width: "100%", height: "50%" }}
            source={{
              uri:
                "https://24smi.org/public/media/celebrity/2016/12/29/jB6QtLbJYQzJ_diego-maradona.jpg"
            }}
          />
          <Flex width="100%" style={styles.textContainer}>
            <Text style={styles.title}>Predict is{"\n"} super easy</Text>
            <Text style={styles.centerText}>
              Swipe the cards left or right in the{" "}
              <Text.Bold>13 matches</Text.Bold> we will pick every week. You
              will earn 1 point for each result you hit.
            </Text>
          </Flex>
        </Flex>
      </Slider>
      <Flex.Absolute right="40px" bottom="15px">
        <Flex.Touchable
          style={styles.nextButton}
          onPress={() => {
            activeSlide === 0
              ? setActiveSlide(activeSlide + 1)
              : alert("ebalo zavali");
          }}
        >
          <Text>Next ></Text>
        </Flex.Touchable>
      </Flex.Absolute>
    </Flex>
  );
};

export default Onboarding;
