import React from "react";
import styled, { keyframes } from "styled-components";

const Wave = keyframes`
  0% { 
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg); 
  }
`;

const SkillsGrid = styled.div`
  z-index: 5;
  width: 100%;
  margin-bottom: 20px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row;
  grid-auto-rows: max-content;
  gap: 20px;

  justify-items: center;
  align-items: center;

  transition: all 0.2s ease-in-out;

  @media only screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

const SkillsBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  @media only screen and (max-width: 640px) {
    padding: 0;
  }
`;

const SkillsTitle = styled.h2`
  font-size: 40px;
  font-weight: 100;
  @media only screen and (max-width: 640px) {
    font-size: 8vw;
  }
`;

const SkillsHr = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 15px 0;
  @media only screen and (max-width: 640px) {
    margin: 3vw 0;
  }
`;

const SkillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  @media only screen and (max-width: 640px) {
    gap: 2vw;
  }
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  @media only screen and (max-width: 640px) {
    gap: 1vw;
  }
`;

const SkillCircle = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  overflow: hidden;

  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 20px 0 ${(props) => props.color + "2a"};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  border: 1px solid ${(props) => props.color + "6a"};
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(105%, 105%);
  }

  @media only screen and (max-width: 640px) {
    width: 18vw;
    height: 18vw;
    box-shadow: 0 2vw 4vw 0 ${(props) => props.color + "2a"};
  }
`;

const WaveContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  opacity: 70%;
  overflow: hidden;
`;

const SkillWave = styled.div`
  position: absolute;
  width: 200%;
  height: 200%;
  top: -${(props) => props.proficiency + 100}%;
  left: -50%;
  border-radius: 40%;
  background: rgba(255, 255, 255, 0.75);
  animation: ${Wave} 15s infinite linear;
`;

const SkillLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 55%;
`;

const SkillName = styled.span`
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2));
  transition: all 0.1s ease-in-out;
  @media only screen and (max-width: 640px) {
    font-size: 3.2vw;
  }
`;

const PSSpan = styled.span`
  font-size: 12px;
  font-weight: 300;
  width: max-content;
  display: block;
  margin-bottom: 50px;
  @media only screen and (max-width: 640px) {
    margin-bottom: 10vw;
    font-size: 2.5vw;
  }
`;

const SkillsPresenter = ({ skills }) => (
  <>
    <SkillsGrid>
      {skills.map((item, index) => (
        <SkillsBox key={index}>
          <SkillsTitle>{item.type}</SkillsTitle>
          <SkillsHr />
          <SkillGrid>
            {item.skills.map((skill, index) => (
              <SkillContainer key={index}>
                <SkillCircle color={skill.color}>
                  <WaveContainer color={skill.color}>
                    <SkillWave proficiency={skill.proficiency} />
                  </WaveContainer>
                  <SkillLogo src={skill.logo} alt={skill.name} />
                </SkillCircle>
                <SkillName className="skill_name">{skill.name}</SkillName>
              </SkillContainer>
            ))}
          </SkillGrid>
        </SkillsBox>
      ))}
    </SkillsGrid>
    <PSSpan>* 채워진 정도는 숙련도를 의미합니다</PSSpan>
  </>
);

export default SkillsPresenter;
