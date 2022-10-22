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

  margin-top: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 900;

  display: flex;
  align-items: flex-end;

  margin-bottom: 20px;
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

const ResumePresenter = ({ lang, setLang, innerWidth, skills }) => {
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
                  <strong className="purple">풀스택 웹 개발자</strong>입니다.
                  단순히 개발만 하는 것이 아닌{" "}
                  <strong className="blue">서비스 기획</strong>,{" "}
                  <strong className="blue">UI/UX 디자인</strong>에도 관심을
                  가지며 사용자를 위한 최고의 서비스를 만들고자 하는{" "}
                  <strong className="red">
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
                  <strong className="red">
                    developer / planner / designer
                  </strong>{" "}
                  who is interested in{" "}
                  <strong className="blue">service planning</strong>,{" "}
                  <strong className="blue">UI/UX design</strong>, and wants to
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
        </Section>

        <Section>
          <SectionTitle>
            Skills.
            {changeLang(lang, {
              KR: (
                <PSSpan>
                  * 채워진 정도는 숙련도를 의미합니다 / ~30% : 경험 | ~60% :
                  취미 or 공부중 | ~90% : 개발 가능
                </PSSpan>
              ),
              EN: (
                <PSSpan>
                  * Filled means proficiency / ~30%: Experience | ~60%: Hobby or
                  Studying | ~90% : Developable
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
        </Section>

        <Section>
          <SectionTitle>Mini Projects.</SectionTitle>
        </Section>

        <Section>
          <SectionTitle>Education & License.</SectionTitle>
        </Section>
      </Inner>
    </Container>
  );
};

export default ResumePresenter;
