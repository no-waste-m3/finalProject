import React from "react";
import Lottie from "react-lottie";
import { useState } from "react";
import animationWade from "../../animations/wadeTheNoWaster.json";
import { WadeStyled } from "./styled";

const Wade = ({ width, height }) => {
  const [animationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationWade,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <WadeStyled width={width} height={height}>
      <Lottie
        options={defaultOptions}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}
      />
    </WadeStyled>
  );
}

export default Wade;
