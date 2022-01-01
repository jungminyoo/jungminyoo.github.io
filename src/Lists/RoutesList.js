import Skills from "Routes/Skills";
import Projects from "Routes/Projects";
import Career from "Routes/Career";
import Education from "Routes/Education";
import Intro from "Routes/Intro";

const RoutesList = [
  {
    path: "/",
    name: "Intro",
    Component: <Intro />,
    isNav: false,
  },
  {
    path: "/intro",
    name: "Intro",
    Component: <Intro />,
    isNav: true,
  },
  {
    path: "/skills",
    name: "Skills",
    Component: <Skills />,
    isNav: true,
  },
  {
    path: "/projects/*",
    name: "Projects",
    Component: <Projects />,
    isNav: true,
  },
  {
    path: "/career",
    name: "Career",
    Component: <Career />,
    isNav: true,
  },
  {
    path: "/education",
    name: "Education",
    Component: <Education />,
    isNav: true,
  },
];

export default RoutesList;
