import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KorEng, { changeLang } from "Components/KorEng";
import { GenerateSkill } from "Components/Skill";
import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  display: grid;
  grid-template: "images infos" / 3fr 2fr;
  gap: 20px;

  @media only screen and (max-width: 1080px) {
    grid-template:
      "images"
      "infos";

    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media only screen and (max-width: 640px) {
    padding: 3vw;
    padding-bottom: 7vw;
    gap: 4vw;
    grid-template:
      "infos"
      "images";
  }
`;

const ImagesContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-area: images;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media only screen and (max-width: 1080px) {
    height: max-content;
  }
  @media only screen and (max-width: 640px) {
    gap: 2vw;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;

  position: relative;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media only screen and (max-width: 1080px) {
    aspect-ratio: 16 / 9;
  }
  @media only screen and (max-width: 640px) {
    aspect-ratio: 3 / 4;
    box-shadow: 0 0px 10px 0 rgba(31, 38, 135, 0.2);
  }
`;

const Image = styled.img`
  object-fit: contain;
  ${(props) =>
    props.portrait
      ? css`
          height: 100%;
        `
      : css`
          width: 100%;
        `}

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  opacity: ${(props) => (props.selected ? "1" : "0")};
  visibility: ${(props) => (props.selected ? "visible" : "hidden")};

  transition: all 0.2s ease-in-out;

  @media only screen and (max-width: 640px) {
    aspect-ratio: 3 / 4;
    ${(props) =>
      props.portrait
        ? css`
            width: 100%;
          `
        : css`
            width: 100%;
          `}
  }
`;

const ImageSelector = styled.div`
  padding: 0 15px;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 30px;
  grid-auto-columns: 30px;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media only screen and (max-width: 640px) {
    box-shadow: 0 0px 10px 0 rgba(31, 38, 135, 0.2);
  }
  @media only screen and (max-width: 640px) {
    padding: 0 3vw;
  }
`;

const SelectorBtn = styled.span`
  background-color: transparent;

  font-size: 15px;
  text-align: center;
  color: ${(props) => (props.selected ? "black" : "rgba(0, 0, 0, 0.5)")};

  transition: all 0.1s ease-in-out;

  &:hover {
    color: black;
    cursor: pointer;
  }

  @media only screen and (max-width: 640px) {
    line-height: 100%;
  }
`;

const InfosContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px 20px;
  grid-area: infos;

  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media only screen and (max-width: 1080px) {
    height: max-content;
    overflow-y: none;
  }
  @media only screen and (max-width: 640px) {
    padding: 4.5vw 3.5vw;
    box-shadow: 0 0px 10px 0 rgba(31, 38, 135, 0.2);
  }
`;

const Logo = styled.img`
  height: 100px;
  object-fit: contain;

  margin-bottom: 10px;

  @media only screen and (max-width: 640px) {
    height: 20vw;
    margin-bottom: 1.5vw;
  }
`;

const Title = styled.h2`
  font-size: 45px;
  font-weight: 300;

  margin-bottom: 10px;

  @media only screen and (max-width: 640px) {
    font-size: 6vw;
    margin-bottom: 1vw;
  }
`;

const Duration = styled.span`
  font-size: 15px;
  font-weight: 100;
  color: rgba(0, 0, 0, 0.5);

  margin-bottom: 15px;

  @media only screen and (max-width: 640px) {
    font-size: 2.5vw;
    margin-bottom: 2.5vw;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  margin-bottom: 15px;

  @media only screen and (max-width: 640px) {
    gap: 0.5vw;
    margin-bottom: 2vw;
  }
`;

const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;

  & span {
    font-size: 12px;
    font-weight: 300;
    &:hover {
      text-decoration: underline;
    }
  }

  & svg {
    font-size: 15px;
  }

  @media only screen and (max-width: 640px) {
    gap: 1vw;

    & span {
      font-size: 2.3vw;
    }
    & svg {
      font-size: 3vw;
    }
  }
`;

const Team = styled.a`
  font-size: 15px;
  font-weight: 300;
  line-height: 18px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  & img {
    height: 20px;
    object-fit: contain;
  }

  @media only screen and (max-width: 640px) {
    font-size: ${(props) => (props.lang === "KR" ? "3.2vw" : "2.7vw")};
    line-height: 3.5vw;
    & img {
      height: 3.5vw;
    }
  }
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.lang === "KR" ? "50px" : "110px")} 1fr;
  gap: 3px;

  margin-bottom: 8px;

  & span {
    font-size: 15px;
    font-weight: 400;
    display: block;
    min-width: max-content;
  }
  & small {
    font-size: 15px;
    font-weight: 300;
    line-height: 18px;
  }

  @media only screen and (max-width: 640px) {
    margin-bottom: 1.5vw;
    gap: 0.5vw;
    grid-template-columns: ${(props) => (props.lang === "KR" ? "10vw" : "20vw")} 1fr;

    & span {
      font-size: ${(props) => (props.lang === "KR" ? "3.2vw" : "2.7vw")};
    }
    & small {
      font-size: ${(props) => (props.lang === "KR" ? "3.2vw" : "2.7vw")};
      line-height: ${(props) => (props.lang === "KR" ? "3.5vw" : "3vw")};
    }
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 10px;

  & h5 {
    font-size: 17px;
    font-weight: 500;
    display: block;
    min-width: max-content;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 640px) {
    margin-top: 2vw;
    & h5 {
      font-size: 4vw;
      margin-bottom: 3vw;
    }
  }
`;

const SkillContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;

  & span {
    font-size: 15px;
    font-weight: 400;
    display: block;
    min-width: max-content;
  }
  @media only screen and (max-width: 640px) {
    margin-bottom: 4vw;
    gap: 2vw;
    & span {
      font-size: 4vw;
    }
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

const ProjectPresenter = ({
  project,
  lang,
  setLang,
  currImg,
  setCurrImg,
  innerWidth,
}) => (
  <Container>
    <KorEng lang={lang} setLang={setLang} position={["0px", "0px"]} />
    <ImagesContainer>
      <ImageContainer>
        {project.images.length > 0 &&
          project.images.map(({ id, src, alt, portrait }) => (
            <Image
              src={src}
              alt={alt}
              key={id}
              selected={currImg === id}
              portrait={portrait}
            />
          ))}
      </ImageContainer>
      {project.images.length > 0 && (
        <ImageSelector>
          {project.images.map(({ id }) => (
            <SelectorBtn
              key={id}
              onClick={() => setCurrImg(id)}
              selected={currImg === id}
            >
              {id}
            </SelectorBtn>
          ))}
        </ImageSelector>
      )}
    </ImagesContainer>
    <InfosContainer>
      {project.logo && (
        <Logo src={project.logo} alt={project.content.EN.title} />
      )}
      <Title>
        {changeLang(lang, {
          KR: project.content.KR.title,
          EN: project.content.EN.title,
        })}
      </Title>
      <Duration>{project.duration}</Duration>
      {project.links.length > 0 && (
        <Links>
          {project.links.map((link) => (
            <LinkContainer key={link.id} href={link.link} target="_blank">
              <FontAwesomeIcon icon={link.icon} />
              <span>{link.link}</span>
            </LinkContainer>
          ))}
        </Links>
      )}
      <InfoContainer lang={lang}>
        <span>
          {changeLang(lang, {
            KR: "팀",
            EN: "Team",
          })}
        </span>
        <Team href={project.content.KR.team.link} target="_blank" lang={lang}>
          {project.content.KR.team.logo === null ? (
            changeLang(lang, {
              KR: project.content.KR.team.name,
              EN: project.content.EN.team.name,
            })
          ) : (
            <img
              src={project.content.KR.team.logo}
              alt={project.content.KR.team.name}
            />
          )}
        </Team>
      </InfoContainer>
      <InfoContainer lang={lang}>
        <span>
          {changeLang(lang, {
            KR: "역할",
            EN: "Role",
          })}
        </span>
        <small>
          {changeLang(lang, {
            KR: project.content.KR.role.join(", "),
            EN: project.content.EN.role.join(", "),
          })}
        </small>
      </InfoContainer>
      <InfoContainer lang={lang}>
        <span>
          {changeLang(lang, {
            KR: "설명",
            EN: "Description",
          })}
        </span>
        <small>
          {changeLang(lang, {
            KR: project.content.KR.description,
            EN: project.content.EN.description,
          })}
        </small>
      </InfoContainer>
      {project.content.KR.learned.length > 0 && (
        <InfoContainer lang={lang}>
          <span>
            {changeLang(lang, {
              KR: "배운 점",
              EN: "What I Learned",
            })}
          </span>
          <small>
            {changeLang(lang, {
              KR: project.content.KR.learned.join(" / "),
              EN: project.content.EN.learned.join(" / "),
            })}
          </small>
        </InfoContainer>
      )}
      {project.content.KR.achievements.length > 0 && (
        <InfoContainer lang={lang}>
          <span>
            {changeLang(lang, {
              KR: "성과",
              EN: "Achievements",
            })}
          </span>
          <small>
            {changeLang(lang, {
              KR: project.content.KR.achievements.join(" / "),
              EN: project.content.EN.achievements.join(" / "),
            })}
          </small>
        </InfoContainer>
      )}
      <SkillsContainer>
        <h5>
          {changeLang(lang, {
            KR: "사용 기술",
            EN: "Skills",
          })}
        </h5>
        {project.skillsList.map((skills) => (
          <SkillContainer key={skills.id}>
            <span>{skills.type}</span>
            <SkillGrid>
              {skills.skills.map((skill, index) =>
                GenerateSkill(
                  skill,
                  { size: ["60px", "15vw"], fontSize: ["12px", "2.5vw"] },
                  index
                )
              )}
            </SkillGrid>
          </SkillContainer>
        ))}
      </SkillsContainer>
    </InfosContainer>
  </Container>
);

export default ProjectPresenter;
