import React from "react";
import styled, { css } from "styled-components";

const KorEngGrid = styled.div`
  position: absolute;
  ${(props) => css`
    top: ${props.position[0]};
    right: ${props.position[1]};
  `}

  width: 80px;
  height: 30px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;

  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease-in-out;

  @media only screen and (max-width: 1080px) {
    top: 10px;
    right: 10px;

    width: 70px;
    height: 25px;
  }

  @media only screen and (max-width: 640px) {
    top: 0;
    right: 0;

    width: 18vw;
    height: 5vw;
  }
`;

const LangBtn = styled.button`
  width: 100%;
  height: 100%;

  border: none;
  background-color: white;

  box-shadow: ${(props) =>
    props.selected ? "0px 0px 10px rgba(0, 0, 0, 0.2)" : "none"};
  z-index: ${(props) => (props.selected ? "7" : "6")};
  color: ${(props) => (props.selected ? "black" : "rgba(0, 0, 0, 0.5)")};
  font-size: 13px;
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 1080px) {
    font-size: 12px;
  }

  @media only screen and (max-width: 640px) {
    font-size: 2.5vw;
  }
`;

const KorEng = ({ lang, setLang, position }) => (
  <KorEngGrid position={position}>
    <LangBtn selected={lang === "KR"} onClick={() => setLang("KR")}>
      KR
    </LangBtn>
    <LangBtn selected={lang === "EN"} onClick={() => setLang("EN")}>
      EN
    </LangBtn>
  </KorEngGrid>
);

export const changeLang = (lang, content) => {
  switch (lang) {
    case "KR":
      return content.KR;
    case "EN":
      return content.EN;
    default:
      return null;
  }
};

export default KorEng;
