import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import routesList from "routesList";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 15vh;
  left: 0;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  width: 320px;
  height: 100%;
  padding: 20px;

  transition: all 0.2s ease-in-out;

  @media only screen and (max-width: 1080px) {
    top: 12vh;
    padding: 17px;
    width: 220px;
  }

  @media only screen and (max-width: 640px) {
    top: 10vh;
    padding: 3vw;
    width: 25vw;
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

const SLi = styled.li`
  position: relative;
  width: 100%;

  transition: all 0.2s ease-in-out;
  margin: ${(props) => props.isCurrent && "20px 0"};

  @media only screen and (max-width: 1080px) {
    margin: ${(props) => props.isCurrent && "15px 0"};
  }

  @media only screen and (max-width: 640px) {
    margin: ${(props) => props.isCurrent && "1.5vw 0"};
  }
`;

const SLink = styled(Link)`
  display: block;
  width: 100%;
  color: ${(props) => (props.isCurrent ? "black" : "rgba(0,0,0,0.5)")};
  font-size: ${(props) => (props.isCurrent ? "60px" : "50px")};
  font-weight: 300;
  transition: all 0.1s ease-in-out;
  &:hover {
    color: black;
    cursor: pointer;
  }

  @media only screen and (max-width: 1080px) {
    font-size: ${(props) => (props.isCurrent ? "40px" : "30px")};
  }

  @media only screen and (max-width: 640px) {
    font-size: ${(props) => (props.isCurrent ? "4vw" : "3.5vw")};
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
              <SLi key={index} isCurrent={current === name}>
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
