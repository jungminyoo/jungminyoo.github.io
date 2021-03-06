import React from "react";
import styled from "styled-components";
import mimoji from "Assets/mimoji.png";
import KorEng, { changeLang } from "Components/KorEng";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const IntroTitle = styled.h1`
  font-size: 30px;
  line-height: 30px;
  font-weight: 300;
  text-align: center;
  transition: all 0.2s ease-in-out;

  @media only screen and (max-width: 1080px) {
    font-size: 25px;
    line-height: 25px;
  }

  @media only screen and (max-width: 640px) {
    font-size: 5.5vw;
    line-height: 6vw;
  }
`;

const IntroProfile = styled.img`
  width: 200px;
  height: 200px;

  border-radius: 50%;
  border: 3px solid #ac0fb3;
  object-fit: cover;
  transition: all 0.1s ease-in-out;

  box-shadow: 0 8px 40px 0 #ac0fb32a;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(105%, 105%);
    cursor: pointer;
  }

  @media only screen and (max-width: 1080px) {
    width: 150px;
    height: 150px;
  }

  @media only screen and (max-width: 640px) {
    width: 30vw;
    height: 30vw;
  }
`;

const IntroQuote = styled.h5`
  font-size: 25px;
  line-height: 25px;
  font-weight: 500;
  text-align: center;
  //text-decoration: underline;
  font-style: italic;
  transition: all 0.2s ease-in-out;

  @media only screen and (max-width: 1080px) {
    font-size: 20px;
    line-height: 20px;
  }

  @media only screen and (max-width: 640px) {
    font-size: 4vw;
    line-height: 4.7vw;
  }
`;

const IntroDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 20px;
  transition: all 0.2s ease-in-out;
  & .purple {
    color: #ac0fb3;
    font-weight: 500;
  }
  & .blue {
    color: #4d63a7;
    font-weight: 500;
  }
  & .red {
    color: #f77584;
    font-weight: 500;
  }

  @media only screen and (max-width: 1080px) {
    font-size: 13px;
    line-height: 17px;
  }

  @media only screen and (max-width: 640px) {
    font-size: 2.8vw;
    line-height: 3.3vw;
  }
`;

const IntroPresenter = ({ lang, setLang, innerWidth }) => (
  <Container>
    <KorEng lang={lang} setLang={setLang} position={["20px", "20px"]} />

    {changeLang(lang, {
      KR: (
        <IntroTitle>
          ???????????????????{innerWidth <= 640 ? <br /> : " "}??? ????????? ??????????????????.
        </IntroTitle>
      ),
      EN: (
        <IntroTitle>
          Hello????{innerWidth <= 640 ? <br /> : " "}I'm a Web Developer, Jungmin
          Yoo.
        </IntroTitle>
      ),
    })}

    <IntroProfile src={mimoji} alt="profile" />

    {changeLang(lang, {
      KR: (
        <IntroQuote>
          "???????????? ?????????,{innerWidth <= 640 ? <br /> : " "}???????????????
          ????????????"
        </IntroQuote>
      ),
      EN: (
        <IntroQuote>
          "Developer who plans,{innerWidth <= 640 ? <br /> : " "}Engineer who
          designs."
        </IntroQuote>
      ),
    })}

    {changeLang(lang, {
      KR: (
        <IntroDescription>
          ?????? ????????? ????????? ????????? ????????????{" "}
          <strong className="purple">????????? ??? ?????????</strong>?????????.
          <br />
          ????????? ????????? ?????? ?????? ??????{" "}
          <strong className="blue">????????? ??????</strong>,{" "}
          <strong className="blue">UI/UX ?????????</strong>?????? ????????? ?????????
          <br />
          ???????????? ?????? ????????? ???????????? ???????????? ??????
          <br />
          <strong className="red">??????????????? ?????????, ????????? ????????????</strong>
          ?????????.
        </IntroDescription>
      ),
      EN: (
        <IntroDescription>
          I am a <strong className="purple">full stack web developer</strong>{" "}
          who develops hard with the motto above.
          <br />I am a{" "}
          <strong className="red">developer / planner / designer</strong> who is
          interested in <strong className="blue">service planning</strong>,{" "}
          <strong className="blue">UI/UX design</strong>,
          <br /> and wants to create the best service for users, not just
          development.
        </IntroDescription>
      ),
    })}
  </Container>
);

export default IntroPresenter;
