import { Route, Routes, useLocation } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import styled from "styled-components";

import Landing from "Routes/Landing";
import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import routesList from "routesList";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  padding-top: 15vh;
  padding-left: 320px;
  overflow-y: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 1080px) {
    padding-top: 12vh;
    padding-left: 220px;
    grid-template-columns: 1fr 6fr;
  }

  @media only screen and (max-width: 640px) {
    padding-top: 10vh;
    padding-left: 25vw;
    grid-template-columns: 1fr 4fr;
  }
`;

const RoutesContainer = styled.div`
  width: 100%;
  height: 100%;

  transition: all 0.2s ease-in-out;

  @media only screen and (max-width: 640px) {
    padding: 3vw;
  }
`;

const RouteContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  @media only screen and (max-width: 640px) {
    padding: 3vw;
  }
`;

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="page" timeout={2000}>
        <Routes>
          {routesList.map(({ path, Component }, index) => (
            <Route
              key={index}
              exact
              path={path}
              element={
                <RouteContainer>
                  <Component />
                </RouteContainer>
              }
            ></Route>
          ))}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

const Routers = () => {
  const [animationDone, setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => setDone(true), 1500);
  }, []);

  return (
    <Router>
      <Container>
        <Landing animationDone={animationDone} />
        <Navigation />
        <RoutesContainer>
          <AnimatedRoutes />
        </RoutesContainer>
      </Container>
    </Router>
  );
};

export default Routers;
