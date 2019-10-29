import React, { Children, useEffect, useRef } from "react";
import { Text, ScrollView, Image, Dimensions } from "react-native";
import { Flex } from "~/styled";

const appWidth = Dimensions.get("window").width;

const Slider = ({ children, activeSlide }) => {
  const scrollView = useRef();

  const numberOfSlides = Children.count(children);

  const slides = Children.map(children, child => (
    <Flex width={appWidth}>{child}</Flex>
  ));

  /*
  ref: {
    current: Component
  }
   */

  useEffect(() => {
    scrollView.current.scrollTo({ x: appWidth * activeSlide });
  }, [activeSlide]);

  return (
    <Flex width="100%" height="90%">
      <ScrollView
        ref={scrollView}
        horizontal
        pagingEnabled
        contentContainerStyle={{
          width: appWidth * numberOfSlides,
          height: "100%"
        }}
      >
        {slides}
      </ScrollView>
    </Flex>
  );
};

export default Slider;
