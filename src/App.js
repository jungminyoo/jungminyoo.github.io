import GlobalStyles from "Components/GlobalStyles";
import Routers from "Components/Router";
import { HashRouter as Router } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 200vh;
`;

const App = () => {
  return (
    <Container>
      <Router>
        <Routers />
      </Router>
      <GlobalStyles />
    </Container>
  );
};

export default App;
