import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import scrolldown from "Assets/scrolldown.svg";
import instagram from "Assets/instagram.svg";
import velog from "Assets/velog.svg";
import github from "Assets/SkillLogos/github.svg";

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
  z-index: 10;
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

  &:hover {
    ${(props) =>
      props.scrolled
        ? css`
            cursor: pointer;
          `
        : ""};
  }

  @media only screen and (max-width: 1080px) {
    height: ${(props) => (props.scrolled ? "12vh" : "100vh")};
  }

  @media only screen and (max-width: 640px) {
    height: ${(props) => (props.scrolled ? "10vh" : "100vh")};
  }
`;

const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
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
    font-size: ${(props) => (props.scrolled ? "50px" : "100px")};
  }
  @media only screen and (max-width: 640px) {
    font-size: ${(props) => (props.scrolled ? "8vw" : "15vw")};
    ${(props) =>
      props.scrolled
        ? css`
            left: 5vw;
            transform: translateX(0) translateY(-50%);
          `
        : ""}
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
  visibility: ${(props) =>
    props.animationDone && !props.scrolled ? "visible" : "hidden"};
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
  visibility: ${(props) =>
    props.animationDone && !props.scrolled ? "visible" : "hidden"};
  opacity: ${(props) => (props.animationDone && !props.scrolled ? "1" : "0")};

  &:hover {
    cursor: pointer;
  }
`;

const SNSGridUnscroll = styled.div`
  position: absolute;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 40px;
  grid-auto-rows: 40px;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  gap: 10px;
  align-items: center;
  justify-items: center;

  transition: all 0.5s ease-in-out;
  visibility: ${(props) =>
    props.animationDone && !props.scrolled ? "visible" : "hidden"};
  opacity: ${(props) => (props.animationDone && !props.scrolled ? "1" : "0")};

  @media only screen and (max-width: 640px) {
    grid-auto-flow: column;
    grid-template-rows: 40px;
    grid-auto-columns: 40px;
    right: 50%;
    top: 62%;
    transform: translateX(50%);
  }
`;

const SNSGridScroll = styled.div`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 40px;
  grid-template-rows: 40px;

  gap: 10px;
  align-items: center;
  justify-items: center;

  transition: all 0.5s ease-in-out;
  visibility: ${(props) => (props.scrolled ? "visible" : "hidden")};
  opacity: ${(props) => (props.scrolled ? "1" : "0")};

  @media only screen and (max-width: 640px) {
    right: 4vw;
    grid-auto-columns: 35px;
    grid-template-rows: 35px;
  }
`;

const SNSContainer = styled.a`
  width: 100%;
  height: 100%;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  position: relative;
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(105%, 105%);
  }
  &:hover img {
    opacity: 1;
  }
`;

const SNSImg = styled.img`
  width: 70%;
  height: 70%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  opacity: 70%;
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
  }
`;

const SNSList = [
  {
    src: instagram,
    href: "https://www.instagram.com/devyoo02/",
  },
  {
    src: github,
    href: "https://github.com/jungminyoo",
  },
  {
    src: velog,
    href: "https://velog.io/@jungminyoo",
  },
];

const LandingPresenter = ({ scroll, animationDone }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (scroll > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [scroll]);

  return (
    <Container
      scrolled={scrolled}
      onClick={() => (scrolled ? window.scrollTo(0, 0) : null)}
    >
      <SubContainer>
        <Title scrolled={scrolled} animationDone={animationDone}>
          {"<dev Yoo />"}
        </Title>
        <Slogan animationDone={animationDone} scrolled={scrolled}>
          기획하는 개발자.
          <br />
          디자인하는 엔지니어.
        </Slogan>
        <DownSvg
          src={scrolldown}
          animationDone={animationDone}
          scrolled={scrolled}
          onClick={() => window.scrollTo(0, 101)}
        />
        <SNSGridScroll scrolled={scrolled}>
          {SNSList.map((SNS, index) => (
            <SNSContainer key={index} href={SNS.href} target="_blank">
              <SNSImg src={SNS.src} alt="instagram" />
            </SNSContainer>
          ))}
        </SNSGridScroll>
        <SNSGridUnscroll scrolled={scrolled} animationDone={animationDone}>
          {SNSList.map((SNS, index) => (
            <SNSContainer key={index} href={SNS.href} target="_blank">
              <SNSImg src={SNS.src} alt="instagram" />
            </SNSContainer>
          ))}
        </SNSGridUnscroll>
      </SubContainer>
    </Container>
  );
};

export default LandingPresenter;
