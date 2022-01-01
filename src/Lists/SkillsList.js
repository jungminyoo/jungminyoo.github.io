import LogosList from "./LogosList";

const SkillsList = [
  {
    type: "Front-end",
    skills: [
      {
        name: "React.js",
        proficiency: 80,
        color: "#61DAFB",
        logo: LogosList["reactJS"],
      },
      {
        name: "HTML5",
        proficiency: 90,
        color: "#E34F26",
        logo: LogosList["html5"],
      },
      {
        name: "CSS3",
        proficiency: 70,
        color: "#1572B6",
        logo: LogosList["css3"],
      },
      {
        name: "SCSS",
        proficiency: 70,
        color: "#CC6699",
        logo: LogosList["sass"],
      },
      {
        name: "JavaScript",
        proficiency: 80,
        color: "#F7DF1E",
        logo: LogosList["javascript"],
      },
      {
        name: "Pug",
        proficiency: 80,
        color: "#A86454",
        logo: LogosList["pug"],
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
        logo: LogosList["nodedotjs"],
      },
      {
        name: "Express",
        proficiency: 70,
        color: "#000000",
        logo: LogosList["express"],
      },
      {
        name: "MongoDB",
        proficiency: 70,
        color: "#47A248",
        logo: LogosList["mongodb"],
      },
      {
        name: "Socket.io",
        proficiency: 50,
        color: "#010101",
        logo: LogosList["socketdotio"],
      },
      {
        name: "WebRTC",
        proficiency: 30,
        color: "#333333",
        logo: LogosList["webrtc"],
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
        logo: LogosList["heroku"],
      },
      {
        name: "AWS S3",
        proficiency: 0,
        color: "#569A31",
        logo: LogosList["amazons3"],
      },
      {
        name: "Netlify",
        proficiency: 0,
        color: "#00C7B7",
        logo: LogosList["netlify"],
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
        logo: LogosList["c"],
      },
      {
        name: "C++",
        proficiency: 60,
        color: "#00599C",
        logo: LogosList["cplusplus"],
      },
      {
        name: "Python",
        proficiency: 70,
        color: "#3776AB",
        logo: LogosList["python"],
      },
      {
        name: "Java",
        proficiency: 20,
        color: "#007396",
        logo: LogosList["java"],
      },
      {
        name: "TypeScript",
        proficiency: 40,
        color: "#3178C6",
        logo: LogosList["typescript"],
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
        logo: LogosList["git"],
      },
      {
        name: "GitHub",
        proficiency: 80,
        color: "#181717",
        logo: LogosList["github"],
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
        logo: LogosList["nextdotjs"],
      },
      {
        name: "GraphQL",
        proficiency: 0,
        color: "#E10098",
        logo: LogosList["graphql"],
      },
      {
        name: "React Native",
        proficiency: 0,
        color: "#61DAFB",
        logo: LogosList["reactJS"],
      },
    ],
  },
];

export const getSkills = (typeName, skillNames) => {
  const result = [];

  SkillsList.forEach(
    (item) =>
      item.type === typeName &&
      item.skills.forEach((skill) => {
        if (skillNames.includes(skill.name)) {
          result.push(skill);
        }
      })
  );

  return result;
};

export default SkillsList;
