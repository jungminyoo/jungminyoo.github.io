import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import routesList from "routesList";
import styled from "styled-components";

const Container = styled.div`
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  height: 100%;
  padding: 20px;
  @media only screen and (max-width: 1080px) {
    padding: 17px;
  }

  @media only screen and (max-width: 640px) {
    padding: 3vw;
  }
`;

const SUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media only screen and (max-width: 1080px) {
    gap: 8px;
  }

  @media only screen and (max-width: 640px) {
    gap: 1.5vw;
  }
`;

const SLi = styled.li``;

const SLink = styled(Link)`
  color: ${(props) => (props.isCurrent ? "black" : "rgba(0,0,0,0.5)")};
  font-size: 50px;
  font-weight: 300;
  transition: all 0.1s ease-in-out;
  &:hover {
    color: black;
    cursor: pointer;
  }

  @media only screen and (max-width: 1080px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 640px) {
    font-size: 3.5vw;
  }
`;

const Navigation = () => {
  const getMainName = () =>
    routesList.filter((route) => route.path === "/")[0].name;

  const [current, setCurrent] = useState("");
  const location = useLocation();

  useEffect(() => {
    setCurrent(
      location.pathname === "/"
        ? getMainName()
        : location.pathname
            .split("")
            .filter((item) => item !== "/")
            .map((item, i) => (i === 0 ? item.toUpperCase() : item))
            .join("")
    );
  }, [location]);

  return (
    <Container>
      <SUl>
        {routesList.map(
          ({ path, name, isNav }, index) =>
            isNav && (
              <SLi key={index}>
                <SLink to={path} isCurrent={current === name}>
                  {name}
                </SLink>
              </SLi>
            )
        )}
      </SUl>
    </Container>
  );
};

export default Navigation;
