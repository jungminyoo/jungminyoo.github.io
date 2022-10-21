import { lastUpdatedAtom } from "atoms";
import axios from "axios";
import GlobalStyles from "Components/GlobalStyles";
import Routers from "Components/Router";
import { useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

const Container = styled.div`
  height: 200vh;
`;

const App = () => {
  const setLastUpdated = useSetRecoilState(lastUpdatedAtom);

  const getLastUpdated = async () => {
    let result;

    try {
      const response = await axios.get(
        "https://api.github.com/repos/jungminyoo/jungminyoo.github.io/commits"
      );
      result = response.data[0].commit.committer.date;
    } catch {
      result = null;
    }

    setLastUpdated(result);
  };

  useEffect(() => getLastUpdated(), []);

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
