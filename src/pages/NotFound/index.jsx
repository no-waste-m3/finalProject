import React from "react";
import Lottie from "react-lottie";
import { useState } from "react";
import animationNotFound from "../../animations/not-found.json";
import { Link } from "react-router-dom";
import { PageStyled } from "./styled";


const NotFound = () => {

    const [animationState] = useState({
        isStopped: false,
        isPaused: false,
      });
    
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationNotFound,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

    return (
        <PageStyled>

        <div>
        <Lottie
        options={defaultOptions}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}
      />
        </div>
      <div>
          <p>Desculpa, página não encontrada. Deseja voltar ao início?</p>
          <Link to='/'>Início</Link>
      </div>
        </PageStyled>
    )

}

export default NotFound