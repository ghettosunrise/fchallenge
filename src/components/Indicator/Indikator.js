import React, { useState } from "react";
import { Flex } from "~/styled";

const Indikator = props => {
  //console.log(props);
  return (
    <Flex.Absolute
      width="95px"
      justify="space-between"
      left="40px"
      bottom="20px"
      row
    >
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <Flex
            background={props.activeSlide == index ? "#000" : "#F2F2F2"}
            width="25px"
            height="3px"
            index={index}
            key={index}
          ></Flex>
        ))}
    </Flex.Absolute>
  );
};

export default Indikator;
