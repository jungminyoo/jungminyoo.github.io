import React from "react";
import styled, { keyframes } from "styled-components";

const Gradient = keyframes`
    0%{
        background-position:0% 51%
    }
    50%{
        background-position:100% 50%
    }
    100%{
        background-position:0% 51%
    }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.scroll > 100 ? "15vh" : "100vh")};
  transition: height 0.5s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(120deg, #ac0fb3, #4d63a7, #1b999f);
  background-size: 600% 600%;
  -webkit-animation: ${Gradient} 5s ease infinite;
  -moz-animation: ${Gradient} 5s ease infinite;
  animation: ${Gradient} 5s ease infinite;
`;

const Title = styled.h1``;

const LandingPresenter = ({ scroll }) => (
  <Container scroll={scroll}></Container>
);

export default LandingPresenter;
