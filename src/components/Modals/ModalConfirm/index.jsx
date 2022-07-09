import { useState } from "react";
import { Modal } from "..";
import { Title } from "../../../styles/title";
import { Button } from "../../Button";
import { StyledDiv } from "./style";

export const ModalConfirm = ({ text, setVisible, setConfirm }) => {
  const [windowWidth, setWindowWidth] = useState(window.screen.availWidth);
  window.addEventListener("resize", () =>
    setWindowWidth(window.screen.availWidth)
  );

  const handleConfirm = () => {
    setConfirm();
    setVisible(false);
  };

  return (
    <Modal typeModal="container">
      <Modal
        typeModal="primary"
        backgroundColor="var(--white-0)"
        top="40%"
        left="45%"
        padding="2.3rem"
        borderRadius="10px"
      >
        <StyledDiv>
          <div className="modal__title">
            <Title tag="h1" titleSize="title1">
              {text}
            </Title>
          </div>
          <div className="modal__buttons">
            <Button typebutton="secondary" onClick={() => handleConfirm()}>
              Sim
            </Button>

            <Button typebutton="primary" onClick={() => setVisible(false)}>
              Nao
            </Button>
          </div>
        </StyledDiv>
      </Modal>
    </Modal>
  );
};
