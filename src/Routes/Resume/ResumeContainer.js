import {
  careerList,
  educationAndLicensesList,
  miniProjectsList,
} from "Lists/CareerList";
import React from "react";
import ResumePresenter from "./ResumePresenter";
import skillsList, { skillTypes } from "Lists/SkillsList";

const EducationContainer = class extends React.Component {
  state = {
    lang: "KR",
    innerWidth: window.innerWidth,
    skillsIsMain: true,
    skills: skillsList,
    skillTypes,
    workExperiences: careerList.toReversed(),
    miniProjects: miniProjectsList.toReversed(),
    educationAndLicenses: educationAndLicensesList,
  };

  componentDidMount = () => {
    window.addEventListener("resize", () =>
      this.setState({ innerWidth: window.innerWidth })
    );
  };

  setLang = (clickedLang) => this.setState({ lang: clickedLang });

  setSkillsIsMain = () => {
    this.setState({
      skillsIsMain: !this.state.skillsIsMain,
    });
  };

  render() {
    return (
      <ResumePresenter
        setSkillsIsMain={this.setSkillsIsMain}
        setLang={this.setLang}
        {...this.state}
      />
    );
  }
};

export default EducationContainer;
