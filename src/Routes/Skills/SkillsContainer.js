import React from "react";
import SkillsList from "../../Lists/SkillsList";
import SkillsPresenter from "./SkillsPresenter";

const SkillsContainer = class extends React.Component {
  state = {
    skills: SkillsList,
  };
  render() {
    return <SkillsPresenter skills={this.state.skills} />;
  }
};

export default SkillsContainer;
