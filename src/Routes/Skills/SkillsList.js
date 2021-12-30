import reactJS from "Assets/react.svg";
import html5 from "Assets/html5.svg";
import css3 from "Assets/css3.svg";
import sass from "Assets/sass.svg";
import javascript from "Assets/javascript.svg";
import pug from "Assets/pug.svg";
import nodedotjs from "Assets/nodedotjs.svg";
import express from "Assets/express.svg";
import mongodb from "Assets/mongodb.svg";
import socketdotio from "Assets/socketdotio.svg";
import webrtc from "Assets/webrtc.svg";
import heroku from "Assets/heroku.svg";
import amazons3 from "Assets/amazons3.svg";
import netlify from "Assets/netlify.svg";
import c from "Assets/c.svg";
import cplusplus from "Assets/cplusplus.svg";
import python from "Assets/python.svg";
import java from "Assets/java.svg";
import typescript from "Assets/typescript.svg";
import git from "Assets/git.svg";
import github from "Assets/github.svg";
import nextdotjs from "Assets/nextdotjs.svg";
import graphql from "Assets/graphql.svg";

const SkillsList = [
  {
    type: "Front-end",
    skills: [
      {
        name: "React.js",
        proficiency: 80,
        color: "#61DAFB",
        logo: reactJS,
      },
      {
        name: "HTML5",
        proficiency: 90,
        color: "#E34F26",
        logo: html5,
      },
      {
        name: "CSS3",
        proficiency: 70,
        color: "#1572B6",
        logo: css3,
      },
      {
        name: "SCSS",
        proficiency: 70,
        color: "#CC6699",
        logo: sass,
      },
      {
        name: "JavaScript",
        proficiency: 80,
        color: "#F7DF1E",
        logo: javascript,
      },
      {
        name: "Pug",
        proficiency: 80,
        color: "#A86454",
        logo: pug,
      },
    ],
  },
  {
    type: "Back-end",
    skills: [
      {
        name: "Node.js",
        proficiency: 80,
        color: "#339933",
        logo: nodedotjs,
      },
      {
        name: "Express",
        proficiency: 70,
        color: "#000000",
        logo: express,
      },
      {
        name: "MongoDB",
        proficiency: 70,
        color: "#47A248",
        logo: mongodb,
      },
      {
        name: "Socket.io",
        proficiency: 50,
        color: "#010101",
        logo: socketdotio,
      },
      {
        name: "WebRTC",
        proficiency: 30,
        color: "#333333",
        logo: webrtc,
      },
    ],
  },
  {
    type: "Infra",
    skills: [
      {
        name: "Heroku",
        proficiency: 0,
        color: "#430098",
        logo: heroku,
      },
      {
        name: "AWS S3",
        proficiency: 0,
        color: "#569A31",
        logo: amazons3,
      },
      {
        name: "Netlify",
        proficiency: 0,
        color: "#00C7B7",
        logo: netlify,
      },
    ],
  },
  {
    type: "Languages",
    skills: [
      {
        name: "C",
        proficiency: 90,
        color: "#A8B9CC",
        logo: c,
      },
      {
        name: "C++",
        proficiency: 60,
        color: "#00599C",
        logo: cplusplus,
      },
      {
        name: "Python",
        proficiency: 70,
        color: "#3776AB",
        logo: python,
      },
      {
        name: "Java",
        proficiency: 20,
        color: "#007396",
        logo: java,
      },
      {
        name: "TypeScript",
        proficiency: 40,
        color: "#3178C6",
        logo: typescript,
      },
    ],
  },
  {
    type: "Others",
    skills: [
      {
        name: "Git",
        proficiency: 80,
        color: "#F05032",
        logo: git,
      },
      {
        name: "GitHub",
        proficiency: 80,
        color: "#181717",
        logo: github,
      },
    ],
  },
  {
    type: "Studying",
    skills: [
      {
        name: "Next.js",
        proficiency: 0,
        color: "#000000",
        logo: nextdotjs,
      },
      {
        name: "GraphQL",
        proficiency: 0,
        color: "#E10098",
        logo: graphql,
      },
      {
        name: "React Native",
        proficiency: 0,
        color: "#61DAFB",
        logo: reactJS,
      },
    ],
  },
];

export default SkillsList;
