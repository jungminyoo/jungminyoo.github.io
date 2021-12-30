import GlobalStyles from "Components/GlobalStyles";
import Routers from "Components/Router";
import styled from "styled-components";

const Container = styled.div`
  height: 200vh;
`;

const App = () => {
  return (
    <Container>
      <Routers />
      <GlobalStyles />
    </Container>
  );
};

export default App;
