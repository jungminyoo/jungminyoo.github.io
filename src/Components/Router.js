import { Routes } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import styled from "styled-components";

import Landing from "Routes/Landing";
import { useEffect, useState } from "react";

const Container = styled.div`
  height: 1000vh;
`;

const Routers = () => {
  const [animationDone, setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => setDone(true), 1500);
  }, []);
  return (
    <Router>
      <Container>
        <Landing animationDone={animationDone} />
        <Routes></Routes>
      </Container>
    </Router>
  );
};

export default Routers;
