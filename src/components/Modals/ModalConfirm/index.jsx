import { useState } from "react";
import { Modal } from "..";
import { Title } from "../../../styles/title";
import { Button } from "../../Button";
import { StyledDiv } from "./style";


export const ModalConfirm = ({ text, onConfirmFunction, setVisible, visible }) => {
  const [windowWidth, setWindowWidth] = useState(window.screen.availWidth);
  

  window.addEventListener("resize", () =>
    setWindowWidth(window.screen.availWidth)
  );

  const handleConfirm = () => {
    onConfirmFunction()
    setVisible(false);
  };

  return (
    <>
    {visible &&
    <Modal onClick={() => setVisible(false)}
      typeModal="allPage"
    >
      <StyledDiv onClick={(e) => e.stopPropagation()}>
        <div className="modal__title">
          <Title tag="h3" titleSize="title3">
            {text}
          </Title>
        </div>
        <div className="modal__buttons">
          <Button typebutton="secondary" onClick={handleConfirm}>
            Sim
          </Button>

          <Button typebutton="primary" onClick={() => setVisible(false)}>
            Nao
          </Button>
        </div>
      </StyledDiv>
  </Modal>}
  </>
  );
};


