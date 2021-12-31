import {
  generateSkill,
  SkillCircle,
  SkillLogo,
  SkillName,
  SkillWave,
  WaveContainer,
} from "Components/Skill";
import React from "react";
import styled from "styled-components";

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
          <SkillGrid>{item.skills.map(generateSkill)}</SkillGrid>
        </SkillsBox>
      ))}
    </SkillsGrid>
    <PSSpan>* 채워진 정도는 숙련도를 의미합니다</PSSpan>
  </>
);

export default SkillsPresenter;
