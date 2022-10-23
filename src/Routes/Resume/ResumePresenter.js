import KorEng, { changeLang } from "Components/KorEng";
import React from "react";
import styled from "styled-components";
import mimoji from "Assets/mimoji.png";
import twisted_arrow from "Assets/twisted_arrow.png";
import { useRecoilState } from "recoil";
import { lastUpdatedAtom } from "atoms";
import { GenerateSkill } from "Components/Skill";

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
  font-size: 50px;
  line-height: 55px;
  font-weight: 700;
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
`;

const IntroDescription = styled.p`
  font-size: 25px;
  line-height: 32px;
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

  margin-bottom: 25px;
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
  innerWidth,
  skills,
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
                <br />웹 개발자 유정민입니다.
              </HeadTitle>
            ),
            EN: (
              <HeadTitle>
                Hello👋
                <br />
                I'm a Web Developer, Jungmin Yoo.
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
                  "기획하는 개발자,{innerWidth <= 640 ? <br /> : " "}디자인하는
                  엔지니어"
                </IntroQuote>
              ),
              EN: (
                <IntroQuote>
                  "Developer who plans,{innerWidth <= 640 ? <br /> : " "}
                  Engineer who designs."
                </IntroQuote>
              ),
            })}
            {changeLang(lang, {
              KR: (
                <IntroDescription>
                  위의 모토를 가지고 열심히 개발하는{" "}
                  <strong className="purple">풀스택 주니어 웹 개발자</strong>
                  입니다. 단순히 개발만 하는 것이 아닌{" "}
                  <strong className="purple">서비스 기획</strong>,{" "}
                  <strong className="purple">UI/UX 디자인</strong>에도 관심을
                  가지며 사용자를 위한 최고의 서비스를 만들고자 하는{" "}
                  <strong className="purple">
                    개발자이자 기획자, 그리고 디자이너
                  </strong>
                  입니다.
                </IntroDescription>
              ),
              EN: (
                <IntroDescription>
                  I am a{" "}
                  <strong className="purple">full stack web developer</strong>{" "}
                  who develops hard with the motto above. I am a{" "}
                  <strong className="purple">
                    developer / planner / designer
                  </strong>{" "}
                  who is interested in{" "}
                  <strong className="purple">service planning</strong>,{" "}
                  <strong className="purple">UI/UX design</strong>, and wants to
                  create the best service for users, not just development.
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
                    <strong>풀스택</strong>, 현재는 <strong>프론트엔드</strong>
                    에 조금 더 가까운 주니어 웹 개발자입니다.
                  </AboutLi>
                  <AboutLi>
                    저는 누구에게나 <strong>배우는 자세</strong>를 중요하게
                    생각합니다. 제가 모르는 부분에 대해 계속 질문하고, 새로 알게
                    된 내용을 다른 사람에게 공유하고 피드백 받는 과정이
                    중요하다고 생각합니다. 이를 위해 개발 인스타, 블로그 등을
                    개설하고 꾸준히 올리면서 실천하고자 노력하고 있습니다.
                  </AboutLi>
                  <AboutLi>
                    <strong>업무적인 소통 방식</strong>에 관심이 많습니다.
                    오프라인적인 소통 방식과 더불어, 문서나 온라인을 통한
                    소통에도 관심이 많습니다. 원활한 소통과 토론으로 보다 더
                    나은 서비스를 만드는 데 기여하고 싶은 것이 저의 목표입니다.
                  </AboutLi>
                  <AboutLi>
                    <strong>SW 전반에 대한 이해도와 습득력</strong>이 있습니다.
                    학생 때부터 웹 개발뿐만이 아닌 다양한 SW 적인 경험을 했으며,
                    이를 통해 새로운 기술을 빠르게 습득하고 적용시키는 것을
                    좋아하게 되었습니다.
                  </AboutLi>
                  <AboutLi>
                    아직 실제 프로덕트를 많이 개발한 경험은 없지만, 이때까지
                    저의 경험과 쌓은 역량을 관성 삼아 끊임없이 노력하는 개발자가
                    되고자 합니다.
                  </AboutLi>
                </>
              ),
              EN: (
                <>
                  <AboutLi>
                    I'm a junior web <strong>full-stack</strong> {"("}closer to{" "}
                    <strong>front-end</strong>
                    {")"} developer, based on React.js, Next.js, Node.js.
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
                      an understanding and learning ability of SW as a whole
                    </strong>
                    . Since I was a student, I have had various SW experiences
                    as well as web development, and through this, I have come to
                    like to quickly acquire and apply new technologies.
                  </AboutLi>
                  <AboutLi>
                    I haven't developed a lot of actual products yet, but I want
                    to be a developer who constantly works hard with my
                    experience and accumulated capabilities.
                  </AboutLi>
                </>
              ),
            })}
          </AboutUl>
        </Section>

        <Section>
          <SectionTitle>
            Skills.
            {changeLang(lang, {
              KR: (
                <PSSpan>
                  * 채워진 정도는 숙련도를 의미합니다. {"("}커서를 올리면 확인
                  가능{")"} / ~30% : 경험 | ~60% : 취미 or 공부중 | ~90% : 개발
                  가능
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
          </SectionTitle>

          <SkillsGrid>
            {skills.map((item, index) => (
              <SkillsBox key={index}>
                <SkillsTitle>{item.type}</SkillsTitle>
                <SkillsHr />
                <SkillGrid>
                  {item.skills.map((skill) =>
                    GenerateSkill(
                      skill,
                      { size: ["70px", "18vw"], fontSize: ["12px", "3.2vw"] },
                      index
                    )
                  )}
                </SkillGrid>
              </SkillsBox>
            ))}
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
                            {skills.map((skill, index) =>
                              GenerateSkill(
                                skill,
                                {
                                  size: ["57px", ""],
                                  fontSize: ["12px", ""],
                                },
                                index
                              )
                            )}
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
                            {skills.map((skill, index) =>
                              GenerateSkill(
                                skill,
                                {
                                  size: ["57px", ""],
                                  fontSize: ["12px", ""],
                                },
                                index
                              )
                            )}
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
