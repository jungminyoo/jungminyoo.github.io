import React from "react";
import ProjectPresenter from "./ProjectPresenter";

const ProjectContainer = class extends React.Component {
  state = {
    lang: "KR",
    project: this.props.project,
    currImg: 1,
  };

  setLang = (clickedLang) => this.setState({ lang: clickedLang });
  setCurrImg = (num) => this.setState({ currImg: num });

  render() {
    const { project, lang, currImg } = this.state;
    return (
      <ProjectPresenter
        project={project}
        lang={lang}
        setLang={this.setLang}
        currImg={currImg}
        setCurrImg={this.setCurrImg}
      />
    );
  }
};

export default ProjectContainer;
