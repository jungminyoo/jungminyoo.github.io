import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import Project from "Routes/Project";
import AnimatedRoutes from "Components/AnimatedRoutes";
import arrowLeft from "Assets/arrowLeft.svg";
import arrowRight from "Assets/arrowRight.svg";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Arrow = styled(Link)`
  position: absolute;
  z-index: 9;
  ${(props) =>
    props.isLeft
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}
  top: 50%;
  transform: translateY(-50%);
  & img {
    height: 70px;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));
    &:hover {
      filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
    }
  }
  @media only screen and (max-width: 640px) {
    & img {
      height: 10vw;
    }
  }
`;

const ProjectsPresenter = ({
  projects,
  currProject,
  firstProject,
  lastProject,
  setCurrProject,
}) => {
  const location = useLocation();

  useEffect(() => {
    setCurrProject(parseInt(location.pathname.split("/")[2]));
  }, [location]);

  const makeArrow = (isLeft) => {
    let arrow;

    if (isLeft) {
      arrow =
        currProject <= firstProject ? (
          ""
        ) : (
          <Arrow to={`/projects/${currProject - 1}`} isLeft={isLeft}>
            <img src={arrowLeft} alt="arrowLeft" />
          </Arrow>
        );
    } else {
      arrow =
        currProject >= lastProject ? (
          ""
        ) : (
          <Arrow to={`/projects/${currProject + 1}`} isLeft={isLeft}>
            <img src={arrowRight} alt="arrowRight" />
          </Arrow>
        );
    }

    return arrow;
  };

  const makeProjectRoutes = () => (
    <AnimatedRoutes
      classNames="project"
      routesList={projects.map((project) => {
        return {
          path: `/${project.id}`,
          Component: <Project project={project} />,
        };
      })}
    />
  );

  return (
    <Container>
      {makeArrow(true)}
      {makeArrow(false)}
      {makeProjectRoutes()}
    </Container>
  );
};

export default ProjectsPresenter;
