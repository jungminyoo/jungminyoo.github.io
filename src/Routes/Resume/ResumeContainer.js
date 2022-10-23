import {
  careerList,
  educationAndLicensesList,
  miniProjectsList,
} from "Lists/CareerList";
import SkillsList from "Lists/SkillsList";
import React from "react";
import ResumePresenter from "./ResumePresenter";

const EducationContainer = class extends React.Component {
  state = {
    lang: "KR",
    innerWidth: window.innerWidth,
    skills: SkillsList,
    workExperiences: careerList.reverse(),
    miniProjects: miniProjectsList.reverse(),
    educationAndLicenses: educationAndLicensesList,
  };

  componentDidMount = () => {
    window.addEventListener("resize", () =>
      this.setState({ innerWidth: window.innerWidth })
    );
  };

  setLang = (clickedLang) => this.setState({ lang: clickedLang });

  render() {
    return <ResumePresenter setLang={this.setLang} {...this.state} />;
  }
};

export default EducationContainer;
