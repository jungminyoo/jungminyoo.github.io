import { useLocation, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Landing from "Routes/Landing";
import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import RoutesList from "Lists/RoutesList";
import AnimatedRoutes from "./AnimatedRoutes";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  padding-top: 15vh;
  padding-left: ${(props) => (props.seeNav ? "320px" : "0px")};
  overflow-y: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 1080px) {
    padding-top: 12vh;
    padding-left: ${(props) => (props.seeNav ? "220px" : "0px")};
    grid-template-columns: 1fr 6fr;
  }

  @media only screen and (max-width: 640px) {
    padding-top: 10vh;
    padding-left: ${(props) => (props.seeNav ? "25vw" : "0px")};
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

const Routers = () => {
  const [animationDone, setDone] = useState(false);
  const location = useLocation();
  const [seeNav, setSeeNav] = useState(true);

  useEffect(
    () =>
      location.pathname !== "/resume" ? setSeeNav(true) : setSeeNav(false),
    [location]
  );

  useEffect(() => {
    setTimeout(() => setDone(true), 1500);
  }, []);

  return (
    <Container seeNav={seeNav}>
      <Landing animationDone={animationDone} />
      {seeNav && <Navigation />}
      <RoutesContainer>
        <AnimatedRoutes routesList={RoutesList} classNames="page" />
      </RoutesContainer>
    </Container>
  );
};

export default Routers;
