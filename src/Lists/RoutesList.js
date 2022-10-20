import Skills from "Routes/Skills";
import Projects from "Routes/Projects";
import Career from "Routes/Career";
import Education from "Routes/Education";
import Intro from "Routes/Intro";
import Resume from "Routes/Resume";
import ProjectsList from "./ProjectsList";

const RoutesList = [
  {
    id: 1,
    path: "/",
    name: "Intro",
    Component: <Intro />,
    isNav: false,
    list: null,
  },
  {
    id: 2,
    path: "/intro",
    name: "Intro",
    Component: <Intro />,
    isNav: true,
    list: null,
  },
  {
    id: 3,
    path: "/skills",
    name: "Skills",
    Component: <Skills />,
    isNav: true,
    list: null,
  },
  {
    id: 4,
    path: "/projects/*",
    name: "Projects",
    Component: <Projects />,
    isNav: true,
    list: ProjectsList,
  },
  {
    id: 5,
    path: "/career",
    name: "Career",
    Component: <Career />,
    isNav: true,
    list: null,
  },
  {
    id: 6,
    path: "/education",
    name: "Education",
    Component: <Education />,
    isNav: true,
    list: null,
  },
  {
    id: 7,
    path: "/resume",
    name: "Resume",
    Component: <Resume />,
    isNav: false,
    list: null,
  },
];

export default RoutesList;
