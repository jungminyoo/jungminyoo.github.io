import React from "react";
import styled from "styled-components";
import mimoji from "Assets/mimoji.png";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const IntroTitle = styled.h1`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
`;

const IntroProfile = styled.img`
  width: 200px;
  height: 200px;

  border-radius: 50%;
  border: 3px solid #ac0fb3;
  object-fit: cover;
  transition: all 0.1s ease-in-out;

  box-shadow: 0 8px 40px 0 #ac0fb32a;

  &:hover {
    transform: scale(105%, 105%);
    cursor: pointer;
  }
`;

const IntroQuote = styled.h5`
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  //text-decoration: underline;
  font-style: italic;
`;

const IntroDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 20px;
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
`;

const IntroPresenter = () => (
  <Container>
    <IntroTitle>안녕하세요👋 웹 개발자 유정민입니다.</IntroTitle>
    <IntroProfile src={mimoji} alt="profile" />
    <IntroQuote>"기획하는 개발자, 디자인하는 엔지니어"</IntroQuote>
    <IntroDescription>
      위의 모토를 가지고 열심히 개발하는{" "}
      <strong className="purple">풀스택 웹개발자</strong>입니다.
      <br />
      단순히 개발만 하는 것이 아닌 <strong className="blue">서비스 기획</strong>
      , <strong className="blue">UI/UX 디자인</strong>에도 관심을 가지며
      <br />
      사용자를 위한 최고의 서비스를 만들고자 하는
      <br />
      <strong className="red">개발자이자 기획자, 그리고 디자이너</strong>입니다.
    </IntroDescription>
  </Container>
);

export default IntroPresenter;
