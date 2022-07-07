import styled from "styled-components";

export const ProdContainer = styled.li`
  height: 295px;
  width: 295px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  width: 128px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100px;
  height: 65px;
  border-radius: 10px;
`;

export const NameContainer = styled.div`
  width: 130px;
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RemoveBtnContainer = styled.div`
  width: 37px;
  height: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-family: "Montserrat";
  font-weight: 500;
`;
