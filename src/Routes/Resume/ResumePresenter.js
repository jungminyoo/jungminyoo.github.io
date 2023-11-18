import KorEng, { changeLang } from "Components/KorEng";
import React from "react";
import styled from "styled-components";
import mimoji from "Assets/mimoji.png";
import twisted_arrow from "Assets/twisted_arrow.png";
import { useRecoilState } from "recoil";
import { lastUpdatedAtom } from "atoms";
import Skill from "Components/Skill";

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Inner = styled.main`
  width: 1080px;
  margin: 0 auto;
  padding-top: 20px;

  position: relative;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1080px) {
    padding-top: 5vh;
    width: 640px;
  }
`;

const SNSArrow = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 10px;

  font-weight: 700;
`;

const Simg = styled.img`
  width: 100px;
  transform: rotate(-30deg) rotateY(0.5turn);

  transition: all 0.2s ease-in-out;
`;

const HeadLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 50px;
`;

const HeadTitle = styled.h1`
  font-size: 45px;
  line-height: 55px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  & strong {
    font-weight: 700;
  }

  @media only screen and (max-width: 1080px) {
    font-size: 25px;
    line-height: 25px;
  }

  @media only screen and (max-width: 640px) {
    font-size: 5.5vw;
    line-height: 6vw;
  }
`;

const HeadLastUpdated = styled.div`
  font-size: 12px;
  color: white;
  background-color: gray;
  border-radius: 2px;
  padding: 3px;
`;

const IntroSection = styled.section`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const IntroProfile = styled.img`
  width: 300px;
  height: 300px;

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

const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const IntroQuote = styled.h2`
  font-style: italic;
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 20px;
  line-height: 1.2;

  & strong {
    font-weight: 700;
  }
`;

const IntroDescription = styled.p`
  font-size: 22px;
  line-height: 1.2;
  font-weight: 400;
  padding-left: 5px;
  margin-bottom: 25px;
  text-indent: 15px;

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

const IntroContact = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  padding-left: 5px;
  line-height: 0px;

  & h4 {
    font-size: 22px;
    font-weight: 700;
  }

  & a {
    font-size: 18px;
    color: #4d63a7;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 150px;
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 900;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  margin-bottom: 25px;
`;

const SectionTitleInnerContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const AboutUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

const AboutLi = styled.li`
  font-size: 18px;
  margin-bottom: 20px;
  line-height: 24px;
  font-weight: 400;
  list-style: disc;
  list-style-position: inside;

  & strong {
    font-weight: 500;
  }
`;

const SkillsGrid = styled.div`
  z-index: 5;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row;
  grid-auto-rows: max-content;
  gap: 10px;

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

  @media only screen and (max-width: 640px) {
    padding: 0;
  }
`;

const SkillsTitle = styled.h2`
  font-size: 30px;
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
  gap: 10px;
  @media only screen and (max-width: 640px) {
    gap: 2vw;
  }
`;

const PSSpan = styled.span`
  font-size: 12px;
  font-weight: 300;
  width: max-content;
  display: block;
  margin-left: 10px;

  @media only screen and (max-width: 640px) {
    margin-bottom: 10vw;
    font-size: 2.5vw;
  }
`;

const PSLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  width: max-content;
  display: block;
  margin-left: 10px;

  @media only screen and (max-width: 640px) {
    margin-bottom: 10vw;
    font-size: 2.5vw;
  }
`;

const IsMainCheckbox = styled.input`
  margin: 0;
  margin-left: 5px;
`;

const MiniSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  width: 100%;
`;

const MiniSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const MiniSectionTitle = styled.h3`
  display: flex;
  align-items: flex-end;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 5px;

  & small {
    font-size: 15px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
    font-style: italic;
    margin-left: 20px;
  }
`;

const MiniSectionLink = styled.a`
  font-size: 12px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  width: max-content;
  margin-bottom: 15px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const MiniSectionContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 135px 1fr;
  gap: 20px;
  margin-bottom: 30px;
`;

const MiniSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  padding: 10px;
  background-color: #56536e;
  border-radius: 5px;
  height: min-content;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(105%, 105%);
    cursor: pointer;
  }

  & span {
    color: white;
    font-size: 15px;
    font-weight: 300;
    text-align: right;
    word-break: keep-all;
  }

  & small {
    font-size: 10px;
    color: white;
  }

  & em {
    font-size: 15px;
  }

  & div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const MiniSectionRight = styled.div`
  width: 100%;

  & ul {
    display: flex;
    flex-direction: column;
    /* gap: 10px; */
    margin-bottom: 15px;
  }

  & li {
    list-style: inside;
    font-size: 15px;
    line-height: 22px;
  }

  & h4 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

const MiniSectionRightSkills = styled.div`
  display: flex;
  gap: 7px;
`;

const LastMention = styled.span`
  display: block;
  margin: 0 auto;
  margin-top: 150px;
  margin-bottom: 50px;
  font-size: 15px;
  font-weight: 300;
  font-style: italic;
`;

const ResumePresenter = ({
  lang,
  setLang,
  skills,
  skillTypes,
  skillsIsMain,
  setSkillsIsMain,
  workExperiences,
  miniProjects,
  educationAndLicenses,
}) => {
  const lastUpdated = useRecoilState(lastUpdatedAtom);

  return (
    <Container>
      <SNSArrow>
        <Simg src={twisted_arrow} alt="twisted_arrow" />
        {changeLang(lang, {
          KR: <span>SNS는 여기에</span>,
          EN: <span>SNS is here</span>,
        })}
      </SNSArrow>
      <Inner>
        <KorEng lang={lang} setLang={setLang} position={["0px", "20px"]} />
        <HeadLine>
          {changeLang(lang, {
            KR: (
              <HeadTitle>
                안녕하세요👋
                <br />
                <strong>웹 교육 콘텐츠 제작자</strong> /{" "}
                <strong>웹 개발자</strong> 유정민입니다.
              </HeadTitle>
            ),
            EN: (
              <HeadTitle>
                Hello👋
                <br />
                I'm a <strong>Web Education Contents Developer</strong> /{" "}
                <strong>Web Developer</strong>, Jungmin Yoo.
              </HeadTitle>
            ),
          })}
          <HeadLastUpdated>
            Last Updated. {lastUpdated.toString().substring(0, 10)}
          </HeadLastUpdated>
        </HeadLine>
        <IntroSection>
          <IntroProfile src={mimoji} alt="profile" />
          <IntroContent>
            {changeLang(lang, {
              KR: (
                <IntroQuote>
                  "타인의 시선을 이해하고, <strong>교육</strong>과{" "}
                  <strong>디자인</strong>으로 그 간격을 좁히고자 끊임없이
                  고민하는 교육자이자 개발자"
                </IntroQuote>
              ),
              EN: (
                <IntroQuote>
                  "Educator and developer who understands other's perspective,
                  and constantly thinks about closing the gap via education and
                  design."
                </IntroQuote>
              ),
            })}
            {changeLang(lang, {
              KR: (
                <IntroDescription>
                  나와 타인으로 이루어진 사회에서, 내가 전달하고자 하는 가치가
                  제대로 전달될 수 있도록{" "}
                  <strong className="purple">타인의 시선을 이해</strong>하고, 그
                  간극을 <strong className="purple">교육</strong>과{" "}
                  <strong className="purple">디자인</strong>이라는 수단으로
                  줄이고자 노력합니다. 이것의 저의 삶과 업무에 대한 철학입니다.
                  이 철학을 바탕으로 끊임없이 성장하는 교육자이자 개발자가
                  되고자 합니다.
                </IntroDescription>
              ),
              EN: (
                <IntroDescription>
                  In a society made up of me and others, I try to{" "}
                  <strong className="purple">
                    understand the gaze of others
                  </strong>{" "}
                  and reduce the gap to the means of{" "}
                  <strong className="purple">education</strong> and{" "}
                  <strong className="purple">design</strong> so that the values
                  I want to convey can be conveyed properly. This is my
                  philosophy of life and work. Based on this philosophy, I want
                  to become an educator and developer who is constantly growing.
                </IntroDescription>
              ),
            })}
            <IntroContact>
              <h4>Contact.</h4>
              <a href="mailto://yoojm4718@gmail.com">yoojm4718@gmail.com</a>
            </IntroContact>
          </IntroContent>
        </IntroSection>

        <Section>
          <SectionTitle>About.</SectionTitle>
          <AboutUl>
            {changeLang(lang, {
              KR: (
                <>
                  <AboutLi>
                    React.js, Next.js. Node.js를 기반으로 하는{" "}
                    <strong>풀스택</strong> 주니어 웹 개발자입니다.
                  </AboutLi>
                  <AboutLi>
                    또한 웹 개발 관련 교육 콘텐츠를 제작하고 강의하는{" "}
                    <strong>교육자</strong>입니다.
                  </AboutLi>
                  <AboutLi>
                    저는 누구에게나 <strong>배우는 자세</strong>를 중요하게
                    생각합니다. 제가 모르는 부분에 대해 계속 질문하고, 새로 알게
                    된 내용을 다른 사람에게 공유하고 결과물에 대해 피드백을 받는
                    과정이 중요하다고 생각합니다.
                  </AboutLi>
                  <AboutLi>
                    <strong>업무적인 소통 방식</strong>에 관심이 많습니다.
                    오프라인적인 소통 방식과 더불어, 문서나 온라인을 통한
                    소통에도 관심이 많습니다. 원활한 소통과 토론으로 보다 더
                    나은 서비스와 콘텐츠를 만드는 데 기여하고 싶은 것이 저의
                    목표입니다.
                  </AboutLi>
                  <AboutLi>
                    <strong>SW 전반에 대한 이해도와 습득력</strong>이 있습니다.
                    학생 때부터 웹 개발뿐만이 아닌 다양한 SW 적인 경험을 했으며,
                    프로그래밍이란 궁극적으로 효율적인 문제 해결을 위한 도구임을
                    이해합니다. 이를 바탕으로 개발에서의 다양한 개념, 철학,
                    그리고 새로운 기술 등을 빠르게 이해하고 습득합니다.
                  </AboutLi>
                  <AboutLi>
                    아직 많이 부족하지만, 이때까지 저의 경험과 쌓은 역량을 관성
                    삼아 끊임없이 노력하는 개발자이자 교육자가 되고자 합니다.
                  </AboutLi>
                </>
              ),
              EN: (
                <>
                  <AboutLi>
                    I'm a junior web <strong>full-stack</strong> developer,
                    based on React.js, Next.js, Node.js.
                  </AboutLi>
                  <AboutLi>
                    I am also an <strong>educator</strong> who produces
                    educational content related to web development.
                  </AboutLi>
                  <AboutLi>
                    I think <strong>learning attitude</strong> is important.
                    It's important to keep asking questions about things I don't
                    know, share new information with others, and get feedback.
                    To this end, I opened development Instagram, blogs, etc. and
                    upload posts steadily to practice them.
                  </AboutLi>
                  <AboutLi>
                    I'm very interested in{" "}
                    <strong>the way of business communication</strong>. In
                    addition to offline communication methods, I am also
                    interested in communication through documents and online. My
                    goal is to contribute to making better services through
                    smooth communication and discussion.
                  </AboutLi>
                  <AboutLi>
                    I have{" "}
                    <strong>
                      an understanding and acquisition of SW in general
                    </strong>
                    . Since I was a student, I have had various SW experiences
                    as well as web development, and I understand that
                    programming is ultimately a tool for efficient problem
                    solving. Based on this, I quickly understand and learn
                    various concepts, philosophies, and new skills in
                    development.
                  </AboutLi>
                  <AboutLi>
                    I still lack a lot, but until now, I want to become a
                    developer and educator who constantly strives with my
                    experience and accumulated capabilities.
                  </AboutLi>
                </>
              ),
            })}
          </AboutUl>
        </Section>

        <Section>
          <SectionTitle>
            <SectionTitleInnerContainer>
              Skills.
              {changeLang(lang, {
                KR: (
                  <PSSpan>
                    * 채워진 정도는 숙련도를 의미합니다. {"("}커서를 올리면 확인
                    가능{")"} / ~30% : 경험 | ~60% : 취미 or 공부중 | ~90% :
                    개발 가능
                  </PSSpan>
                ),
                EN: (
                  <PSSpan>
                    * Filled means proficiency {"("}Can see it when mouseover
                    {")"} / ~30%: Experience | ~60%: Hobby or Studying | ~90% :
                    Developable
                  </PSSpan>
                ),
              })}
            </SectionTitleInnerContainer>
            <SectionTitleInnerContainer>
              <PSLabel htmlFor="isMainCheckbox">메인 스킬</PSLabel>
              <IsMainCheckbox
                id="isMainCheckbox"
                type="checkbox"
                checked={skillsIsMain}
                onChange={setSkillsIsMain}
              />
            </SectionTitleInnerContainer>
          </SectionTitle>

          <SkillsGrid>
            {Object.keys(skillTypes).map((type, index) => {
              const currentTypeSkills = skillTypes[type].map(
                (skillId) => skills[skillId - 1]
              );
              const currentTypeMainSkills = currentTypeSkills.filter(
                ({ isMain }) => isMain
              );
              const visibleSkills = skillsIsMain
                ? currentTypeMainSkills
                : currentTypeSkills;

              return (
                visibleSkills.length !== 0 && (
                  <SkillsBox key={index}>
                    <SkillsTitle>{type}</SkillsTitle>
                    <SkillsHr />
                    <SkillGrid>
                      {visibleSkills.map((skill) => (
                        <Skill
                          skill={skill}
                          size={{
                            size: ["70px", "18vw"],
                            fontSize: ["12px", "3.2vw"],
                          }}
                        />
                      ))}
                    </SkillGrid>
                  </SkillsBox>
                )
              );
            })}
          </SkillsGrid>
        </Section>

        <Section>
          <SectionTitle>Work Experience.</SectionTitle>
          <MiniSectionContainer>
            {workExperiences.map(({ KR, EN, careerUrl }) => {
              const { careerName, careerDescription, careerSpecific } =
                changeLang(lang, { KR, EN });

              return (
                <MiniSection>
                  <MiniSectionTitle>
                    {careerName}
                    <small>{careerDescription}</small>
                  </MiniSectionTitle>
                  <MiniSectionLink href={careerUrl.url} target="_blank">
                    {careerUrl.url} {careerUrl.isClosed && "(Closed)"}
                  </MiniSectionLink>
                  {careerSpecific
                    .toReversed()
                    .map(
                      ({
                        position,
                        positionIcon,
                        span,
                        descriptionList,
                        skills,
                      }) => (
                        <MiniSectionContent>
                          <MiniSectionLeft>
                            <div>
                              <em>{positionIcon}</em>
                              <span>{position}</span>
                            </div>
                            <small>{span}</small>
                          </MiniSectionLeft>
                          <MiniSectionRight>
                            <ul>
                              {descriptionList.map((description) => (
                                <li>{description}</li>
                              ))}
                            </ul>
                            <h4>Used Skills</h4>
                            <MiniSectionRightSkills>
                              {skills.map((skill) => (
                                <Skill
                                  skill={skill}
                                  size={{
                                    size: ["58px", ""],
                                    fontSize: ["12px", ""],
                                  }}
                                />
                              ))}
                            </MiniSectionRightSkills>
                          </MiniSectionRight>
                        </MiniSectionContent>
                      )
                    )}
                </MiniSection>
              );
            })}
          </MiniSectionContainer>
        </Section>

        <Section>
          <SectionTitle>Mini Projects.</SectionTitle>
          <MiniSectionContainer>
            {miniProjects.map(({ KR, EN, careerUrl }) => {
              const { careerName, careerDescription, careerSpecific } =
                changeLang(lang, { KR, EN });

              return (
                <MiniSection>
                  <MiniSectionTitle>
                    {careerName}
                    <small>{careerDescription}</small>
                  </MiniSectionTitle>
                  <MiniSectionLink href={careerUrl.url} target="_blank">
                    {careerUrl.url} {careerUrl.isClosed && "(Closed)"}
                  </MiniSectionLink>
                  {careerSpecific.map(
                    ({
                      position,
                      positionIcon,
                      span,
                      descriptionList,
                      skills,
                    }) => (
                      <MiniSectionContent>
                        <MiniSectionLeft>
                          <div>
                            <em>{positionIcon}</em>
                            <span>{position}</span>
                          </div>
                          <small>{span}</small>
                        </MiniSectionLeft>
                        <MiniSectionRight>
                          <ul>
                            {descriptionList.map((description) => (
                              <li>{description}</li>
                            ))}
                          </ul>
                          <h4>Used Skills</h4>
                          <MiniSectionRightSkills>
                            {skills.map((skill, index) => (
                              <Skill
                                skill={skill}
                                size={{
                                  size: ["57px", ""],
                                  fontSize: ["12px", ""],
                                }}
                                index={index}
                              />
                            ))}
                          </MiniSectionRightSkills>
                        </MiniSectionRight>
                      </MiniSectionContent>
                    )
                  )}
                </MiniSection>
              );
            })}
          </MiniSectionContainer>
        </Section>

        <Section>
          <SectionTitle>Education & License.</SectionTitle>
        </Section>
        <MiniSectionContainer style={{ gap: "20px" }}>
          {educationAndLicenses.map(({ KR, EN }) => {
            const { careerName, careerDescription } = changeLang(lang, {
              KR,
              EN,
            });

            return (
              <MiniSection>
                <MiniSectionTitle>
                  {careerName}
                  <small>{careerDescription}</small>
                </MiniSectionTitle>
              </MiniSection>
            );
          })}
        </MiniSectionContainer>

        <LastMention>--- 읽어주셔서 감사합니다! ---</LastMention>
      </Inner>
    </Container>
  );
};

export default ResumePresenter;
