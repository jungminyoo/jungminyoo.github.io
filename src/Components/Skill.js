import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Wave = keyframes`
  0% { 
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg); 
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

export const SkillCircle = styled.div`
  position: relative;
  width: ${(props) => props.size[0]};
  height: ${(props) => props.size[0]};
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
    width: ${(props) => props.size[1]};
    height: ${(props) => props.size[1]};
    box-shadow: 0 2vw 4vw 0 ${(props) => props.color + "2a"};
  }
`;

export const SkillLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 55%;
  height: 55%;
`;

export const SkillName = styled.span`
  text-align: center;
  font-size: ${(props) => props.fontSize[0]} !important;
  font-weight: 300;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2));
  transition: all 0.1s ease-in-out;
  max-width: ${(props) => props.size[0]};
  word-break: break-all;
  @media only screen and (max-width: 640px) {
    max-width: ${(props) => props.size[1]};
    font-size: ${(props) => props.fontSize[1]} !important;
  }
`;

export const WaveContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  opacity: 70%;
  overflow: hidden;
`;

export const SkillWave = styled.div`
  position: absolute;
  width: 200%;
  height: 200%;
  top: -${(props) => props.proficiency + 100}%;
  left: -50%;
  border-radius: 40%;
  background: rgba(255, 255, 255, 0.75);
  animation: ${Wave} 15s infinite linear;
`;

export const GenerateSkill = (skill, { size, fontSize }, index) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <SkillContainer key={index}>
      <SkillCircle
        color={skill.color}
        size={size}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <WaveContainer color={skill.color}>
          <SkillWave proficiency={skill.proficiency} />
        </WaveContainer>
        <SkillLogo src={skill.logo} alt={skill.name} />
      </SkillCircle>
      <SkillName className="skill_name" fontSize={fontSize} size={size}>
        {isHover
          ? skill.proficiency === 0
            ? skill.name
            : `${skill.proficiency}%`
          : skill.name}
      </SkillName>
    </SkillContainer>
  );
};
