import { Routes } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import styled from "styled-components";

import Landing from "Routes/Landing";

const Container = styled.div`
  height: 1000vh;
`;

const Routers = () => {
  return (
    <Router>
      <Container>
        <Landing />
        <Routes></Routes>
      </Container>
    </Router>
  );
};

export default Routers;
