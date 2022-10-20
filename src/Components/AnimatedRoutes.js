import styled from "styled-components";
import { Route, Routes, useLocation } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const RouteContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${(props) => (props.classNames === "page" ? "20px" : "0")};

  @media only screen and (max-width: 640px) {
    padding: ${(props) => (props.classNames === "page" ? "3vw" : "0")};
  }
`;

const STransitionGroup = styled(TransitionGroup)`
  height: 100%;
`;

const AnimatedRoutes = ({ routesList, classNames }) => {
  const location = useLocation();
  return (
    <STransitionGroup>
      <CSSTransition key={location.key} classNames={classNames} timeout={2000}>
        <Routes>
          {routesList.map(({ path, Component, id }) => (
            <Route
              key={id}
              exact
              path={path}
              element={
                <RouteContainer classNames={classNames}>
                  {Component}
                </RouteContainer>
              }
            ></Route>
          ))}
        </Routes>
      </CSSTransition>
    </STransitionGroup>
  );
};

export default AnimatedRoutes;
