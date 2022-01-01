import ProjectsList from "Lists/ProjectsList";
import React from "react";
import ProjectsPresenter from "./ProjectsPresenter";

const ProjectsContainer = class extends React.Component {
  state = {
    projects: ProjectsList,
    currProject: 1,
    firstProject: 1,
    lastProject: ProjectsList.length,
  };
  render() {
    const { projects, currProject, firstProject, lastProject } = this.state;
    return (
      <ProjectsPresenter
        projects={projects}
        currProject={currProject}
        firstProject={firstProject}
        lastProject={lastProject}
        setCurrProject={(curr) => this.setState({ currProject: curr })}
      />
    );
  }
};

export default ProjectsContainer;
