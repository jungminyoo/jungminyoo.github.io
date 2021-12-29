import React from "react";
import styled, { css, keyframes } from "styled-components";
import scrolldown from "Assets/scrolldown.svg";

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

const SlightUp = keyframes`
    0% {
        top: 50%;
    } 100% {
        top: 42%;
    }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.scrolled ? "15vh" : "100vh")};
  transition: height 0.5s ease-in-out;

  background: linear-gradient(120deg, #ac0fb3, #4d63a7, #1b999f);
  background-size: 600% 600%;
  -webkit-animation: ${Gradient} 5s ease infinite;
  -moz-animation: ${Gradient} 5s ease infinite;
  animation: ${Gradient} 5s ease infinite;

  @media only screen and (max-width: 640px) {
    height: ${(props) => (props.scrolled ? "12vh" : "100vh")};
  }
`;

const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  position: absolute;
  display: block;
  width: max-content;
  text-align: center;
  letter-spacing: -2px;
  font-size: ${(props) => (props.scrolled ? "70px" : "130px")};
  color: white;
  font-weight: 700;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: all 0.5s ease-in-out;

  ${(props) =>
    props.animationDone
      ? css`
          top: ${() => (props.scrolled ? "50%" : "42%")};
        `
      : css`
          top: 50%;
          animation: ${SlightUp} 0.5s ease-in-out forwards;
          animation-delay: 1s;
        `}
  @media only screen and (max-width: 1080px) {
    font-size: ${(props) => (props.scrolled ? "70px" : "100px")};
  }
  @media only screen and (max-width: 640px) {
    font-size: ${(props) => (props.scrolled ? "12vw" : "15vw")};
  }
`;

const Slogan = styled.h3`
  position: absolute;
  display: block;
  width: max-content;
  text-align: center;
  letter-spacing: -1px;
  line-height: 55px;
  font-size: 45px;
  color: white;
  font-weight: 700;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
  left: 50%;
  top: 53%;
  transform: translateX(-50%);
  transition: all 0.5s ease-in-out;
  opacity: ${(props) => (props.animationDone && !props.scrolled ? "1" : "0")};

  @media only screen and (max-width: 1080px) {
    font-size: 35px;
    top: 50%;
    line-height: 45px;
  }
  @media only screen and (max-width: 640px) {
    font-size: 6vw;
    top: 50%;
    line-height: 7.5vw;
  }
`;

const DownSvg = styled.img`
  position: absolute;
  width: 50px;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
  opacity: ${(props) => (props.animationDone && !props.scrolled ? "1" : "0")};

  &:hover {
    cursor: pointer;
  }
`;

const LandingPresenter = ({ scroll, animationDone }) => (
  <Container scrolled={scroll > 100}>
    <SubContainer>
      <Title scrolled={scroll > 100} animationDone={animationDone}>
        {"<dev Yoo />"}
      </Title>
      <Slogan animationDone={animationDone} scrolled={scroll > 100}>
        기획하는 개발자.
        <br />
        디자인하는 엔지니어.
      </Slogan>
      <DownSvg
        src={scrolldown}
        animationDone={animationDone}
        scrolled={scroll > 100}
        onClick={() => window.scrollTo(0, 101)}
      />
    </SubContainer>
  </Container>
);

export default LandingPresenter;
