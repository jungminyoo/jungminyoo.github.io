import Skills from "Routes/Skills";
import Projects from "Routes/Projects";
import Career from "Routes/Career";
import Education from "Routes/Education";
import Intro from "Routes/Intro";
import Resume from "Routes/Resume";

const RoutesList = [
  {
    id: 1,
    path: "/",
    name: "Intro",
    Component: <Intro />,
    isNav: false,
  },
  {
    id: 2,
    path: "/intro",
    name: "Intro",
    Component: <Intro />,
    isNav: true,
  },
  {
    id: 3,
    path: "/skills",
    name: "Skills",
    Component: <Skills />,
    isNav: true,
  },
  {
    id: 4,
    path: "/projects/*",
    name: "Projects",
    Component: <Projects />,
    isNav: true,
  },
  {
    id: 5,
    path: "/career",
    name: "Career",
    Component: <Career />,
    isNav: true,
  },
  {
    id: 6,
    path: "/education",
    name: "Education",
    Component: <Education />,
    isNav: true,
  },
  {
    id: 7,
    path: "/resume",
    name: "Resume",
    Component: <Resume />,
    isNav: false,
  },
];

export default RoutesList;
