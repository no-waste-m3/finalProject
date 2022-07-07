import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 82px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-color);

  @media (min-width: 740px) {
    height: 90px;
  }
`;

export const HeaderCentralized = styled.div`
  height: 100%;
  width: 325px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (min-width: 740px) {
    width: 1200px;
  }
`;

export const Logo = styled.img`
  height: 26px;
  width: 147.55px;
  @media (min-width: 740px) {
    height: 47px;
    width: 266.72px;
  }
`;

export const HeaderLeftDiv = styled.div`
  height: 100%;
  width: 234px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 740px) {
    width: 733px;
  }
`;
