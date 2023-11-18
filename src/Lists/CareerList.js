import { getSkills } from "./SkillsList";

// template
// {
//   id: 1,
//   KR: {
//     careerName: "",
//     careerDescription: "",
//     careerSpecific: [
//       {
//         id: 1,
//         position: "",
//         span: "",
//         descriptionList: [
//           "",
//           ],
//         skills: [
//           ...getSkills([""]),
//         ],
//       },
//     ],
//   },
//   EN: {
//     careerName:
//       "",
//     careerDescription: "",
//     careerSpecific: [
//       {
//         id: 1,
//         position: "",
//         span: "",
//         descriptionList: [
//           "",
//           ],
//         skills: [
//           ...getSkills([""]),
//         ],
//       },
//     ],
//   },
//   careerUrl: {
//     url: "",
//     isClosed: false,
//   },
// },

export const careerList = [
  {
    id: 1,
    KR: {
      careerName: "교내 메이킹 대회 (대회명: 무한상상 메이커즈 Revo)",
      careerDescription: "고등학교 교내 메이킹 대회",
      careerSpecific: [
        {
          id: 1,
          positionIcon: "⚙️",
          position: "대회 사무국장",
          span: "2019.03 - 2019.08",
          descriptionList: [
            "교내 메이킹 대회의 전체 사무국장으로서 대회를 주관하고 운영하였습니다.",
            "교내 대회 뿐만이 아닌 경북지역 메이킹 대회의 운영진으로 대회를 주관했으며, 해당 대회가 지역 방송 뉴스에 보도되었습니다.",
            "각 참여 팀의 HW 메이킹과 SW 코딩 등 어려운 부분들을 돕고 컨설팅하며 대회가 잘 마무리 될 수 있도록 체계적으로 운영했습니다.",
          ],
          skills: [...getSkills(["C", "Arduino", "Microbit"])],
        },
      ],
    },
    EN: {
      careerName:
        "School Making Competition (Contest Name: 무한상상 메이커즈 Revo)",
      careerDescription: "high school making contest",
      careerSpecific: [
        {
          id: 1,
          positionIcon: "⚙️",
          position: "General Manager",
          span: "2019.03 - 2019.08",
          descriptionList: [
            "As the general manager of the school making competition, I organized and operated the competition.",
            "The competition was organized not only by the school competition but also by the management of the making competition in Gyeongbuk, and the competition was reported on the local broadcast news.",
            "We systematically operated each participating team to help and consult on difficult parts such as HW making and SW coding, and to complete the competition well.",
          ],
          skills: [...getSkills(["C", "Arduino", "Microbit"])],
        },
      ],
    },
    careerUrl: {
      url: "https://www.facebook.com/pmakers.revo",
      isClosed: false,
    },
  },
  {
    id: 2,
    KR: {
      careerName: "Team genéver",
      careerDescription:
        "초기 스타트업으로, 크리에이터 영상 NFT 거래 플랫폼 서비스 fanCake 개발",
      careerSpecific: [
        {
          id: 1,
          positionIcon: "🧑🏻‍💻",
          position: "Front-end Developer",
          span: "2021.09 - 2021.11",
          descriptionList: [
            "크리에이터 영상 (유튜브, 틱톡 등)을 NFT화하여 지분을 거래하는 fanCake 서비스의 MVP 프론트엔드 개발을 담당했습니다.",
            "JWT를 이용한 Authentication 기능, WS, Socket.io를 이용한 실시간 댓글 기능, 온라인 캐쉬(현금화 X) 기능 등을 구현하면서 웹에서 사용되는 다양한 주요 기능을 완성시켰습니다.",
            "장거리에 계신 백엔드 개발자님과 문서 및 온라인 상의 소통을 통해 개발을 진행했습니다.",
            "개발만이 아닌 초기 스타트업의 기획 단계에도 많이 참여하였으며, 서비스 개발과 피보팅을 위한 다양한 과정을 경험해보았습니다.",
            "UI/UX 디자인에 일부 참여하였습니다. (서비스 이용을 단계별로 나누어 UI 구성)",
          ],
          skills: [
            ...getSkills([
              "React.js",
              "Axios",
              "styled-components",
              "Socket.io",
            ]),
          ],
        },
      ],
    },
    EN: {
      careerName: "Team genéver",
      careerDescription:
        "early startup, developed creator video NFT trading platform service 'fanCake'",
      careerSpecific: [
        {
          id: 1,
          positionIcon: "🧑🏻‍💻",
          position: "Front-end Developer",
          span: "2021.09 - 2021.11",
          descriptionList: [
            "I was in charge of developing the MVP front-end of the fanCake service, which trades stakes by NFTizing creator videos (YouTube, TikTok, etc.).",
            "By implementing the authentication feature using JWT, real-time comment feature using WS & Socket.io, and online cache system, I have completed a variety of key features used on the website.",
            "We developed it through documentation and online communication with back-end developer in long distances.",
            "I participated not only in development but also in the planning stage of early start-up, and I experienced various processes for service development and pivot.",
            "I participated in some UI/UX designs. (Configure UI by dividing service usage step by step)",
          ],
          skills: [
            ...getSkills([
              "React.js",
              "Axios",
              "styled-components",
              "Socket.io",
            ]),
          ],
        },
      ],
    },
    careerUrl: { url: "https://web.fancake.xyz", isClosed: true },
  },
  {
    id: 3,
    KR: {
      careerName: "Team Sefolder",
      careerDescription:
        "미래 아티스트들을 위한 NFT 마켓플레이스, cassoPi 서비스 제작을 위한 프로젝트 팀",
      careerSpecific: [
        {
          id: 1,
          positionIcon: "🧑🏻‍💻",
          position: "Front-end Developer",
          span: "2021.12 - 2022.03",
          descriptionList: [
            "성균관대 SPARK 프로그램에 참여하여 교수님과 지속적인 피드백을 통한 서비스 개발을 진행했습니다.",
            "2022 성균관대학교 S-TOP 웹/어플리케이션 부문에 출품하여 해당 부문 좋아요 수 2위를 기록했습니다.",
            "Redux를 이용하여 상태 관리를 진행했으며, Next.js를 이용해 Prerender와 SSR을 도입하여 UX와 SEO를 발전시켰습니다.",
            "AWS Amplify를 이용하여 배포를 진행했습니다.",
          ],
          skills: [
            ...getSkills([
              "Next.js",
              "React.js",
              "Redux",
              "Axios",
              "styled-components",
            ]),
          ],
        },
      ],
    },
    EN: {
      careerName: "Team Sefolder",
      careerDescription:
        "project team to create cassoPi service - NFT marketplace for future artists",
      careerSpecific: [
        {
          id: 1,
          positionIcon: "🧑🏻‍💻",
          position: "Front-end Developer",
          span: "2021.12 - 2022.03",
          descriptionList: [
            "We participated in the SPARK program at Sungkyunkwan University and developed the service through continuous feedback with the professor.",
            "We participated in a 2022 Sungkyunkwan University S-TOP Web/Application Dep., and we got second place in the number of likes.",
            "State management was conducted using Redux, and UX and SEO were developed by introducing Prerender and SSR using Next.js.",
            "We deployed using AWS Amplify.",
          ],
          skills: [
            ...getSkills([
              "Next.js",
              "React.js",
              "Redux",
              "Axios",
              "styled-components",
            ]),
          ],
        },
      ],
    },
    careerUrl: { url: "https://www.cassopi.io", isClosed: true },
  },
  {
    id: 4,
    KR: {
      careerName: "메이킷코드랩학원",
      careerDescription: "대치동 초/중/고/대학생 대상 코딩학원",
      careerSpecific: [
        {
          id: 1,
          positionIcon: "🧑🏻‍🏫",
          position: "코딩강사 / 연구원",
          span: "2022.01 - 2022.09",
          descriptionList: [
            "초/중/고/대학생 대상으로 다양한 형태의 코딩/메이킹을 가르쳤습니다.",
            "다른 강사분들이 가르치기 쉽도록 교육 자료를 개발하고 제작했습니다. (C언어, 파이썬, EV3 자료 제작)",
            "학생들의 SW 영재원 과제, 특성화고 내신 대비 (자료구조, 알고리즘 과목) 등을 도와주었습니다.",
            "가르친 과목 : SW 기초(초등학생 대상), C언어, 파이썬, 자료구조, 알고리즘, 메이킹(아두이노, EV3, 마이크로비트), 스크래치, 앱인벤터",
          ],
          skills: [
            ...getSkills([
              "C",
              "C++",
              "Python",
              "Arduino",
              "Microbit",
              "EV3",
              "Roblox",
            ]),
          ],
        },
      ],
    },
    EN: {
      careerName: "Makit Code Lab (Coding Academy)",
      careerDescription:
        "a coding academy for elementary/middle/high school/university students in Daechi",
      careerSpecific: [
        {
          id: 1,
          positionIcon: "🧑🏻‍🏫",
          position: "Coding Teacher / Researcher",
          span: "2022.01 - 2022.09",
          descriptionList: [
            "I taught various forms of coding/making to elementary/middle/high/university students.",
            "I developed and produced educational materials to make it easier for other instructors to teach. (C language, Python, EV3 material production)",
            "I helped students prepare for SW gifted students' assignments and specialized high school grades (data structure, algorithmic subjects).",
            "Subjects taught: SW basic (for elementary school students), C, Python, data structure, algorithm, making (Arduino, EV3, microbit), scratch, app inventor",
          ],
          skills: [
            ...getSkills([
              "C",
              "C++",
              "Python",
              "Arduino",
              "Microbit",
              "EV3",
              "Roblox",
            ]),
          ],
        },
      ],
    },
    careerUrl: { url: "http://makitcodelab.com", isClosed: false },
  },
  {
    id: 5,
    KR: {
      careerName: "엘리스 elice",
      careerDescription: "우리 모두를 위한 교실, 코딩 교육 플랫폼",
      careerSpecific: [
        {
          id: 1,
          positionIcon: "🧑🏻‍💻",
          position: "Technical Contents Developer (KDT)",
          span: "2022.12 - 2023.04",
          descriptionList: [
            "웹 개발 / 프로그래밍 언어 관련 성인 대상 부트캠프 교육을 목적으로 한 컨텐츠를 제작했습니다.",
            "필요한 경우 부트캠프 수강생을 대상으로 직접 강의를 진행했습니다.",
            "부트캠프 수강생들의 질문에 답하며 다양한 개발 관련 이슈를 처리했습니다.",
          ],
          skills: [
            ...getSkills([
              "React.js",
              "Node.js",
              "Express",
              "MongoDB",
              "Python",
              "Java",
              "JavaScript",
              "TypeScript",
              "HTML5",
              "CSS3",
              "Git",
            ]),
          ],
        },
        {
          id: 2,
          positionIcon: "🧑🏻‍💻",
          position: "Technical Contents Developer",
          span: "2023.04 - 현재",
          descriptionList: [
            "웹 개발 / 프로그래밍 언어 관련 기업 교육 및 디지털 트랜스포메이션을 목적으로 한 컨텐츠를 제작합니다.",
            "웹 개발 관련 기업 교육 요청에 대한 커리큘럼을 구성합니다.",
            "자체 제작 컨텐츠를 제작하며 과목 기획, 강의 자료 제작, 퀴즈 및 실습 제작, 강의 촬영 전 과정을 담당합니다.",
            "외주자와의 협업을 통해 보다 더 전문적인 컨텐츠 개발을 진행합니다.",
            "Unit / E2E 테스팅을 활용한 웹 채점 코드를 개발합니다.",
          ],
          skills: [
            ...getSkills([
              "Spring Boot",
              "React.js",
              "Node.js",
              "Express",
              "MongoDB",
              "Python",
              "Java",
              "JavaScript",
              "TypeScript",
              "HTML5",
              "CSS3",
              "Git",
            ]),
          ],
        },
      ],
    },
    EN: {
      careerName: "elice",
      careerDescription: "classroom for everyone, coding education platform",
      careerSpecific: [
        {
          id: 1,
          positionIcon: "🧑🏻‍🏫",
          position: "Technical Content Developer",
          span: "2022.12 - Current",
          descriptionList: [
            "Produces content for adult education (boot camp, etc.) and corporate education under the theme of web development/programming language.",
            "If necessary, I gives a lecture. (about Web Development)",
            "Answer the questions of the boot camp students and deal with various development-related issues.",
          ],
          skills: [
            ...getSkills([
              "React.js",
              "Node.js",
              "Express",
              "MongoDB",
              "Python",
              "Java",
              "JavaScript",
              "TypeScript",
              "HTML5",
              "CSS3",
            ]),
            ...getSkills(["Git"]),
          ],
        },
        {
          id: 2,
          positionIcon: "🧑🏻‍💻",
          position: "Technical Contents Developer",
          span: "2023.04 - Current",
          descriptionList: [
            "Create contents for corporate education and digital transformation related to web development/programming languages.",
            "Construct a curriculum for corporate training requests related to web development.",
            "Produces own content: includes planning, producing quiz and exercise, and shooting the entire lecture.",
            "Produces more professional content through collaboration with experts.",
            "Develops scoring code using Unit / E2E testing.",
          ],
          skills: [
            ...getSkills([
              "Spring Boot",
              "React.js",
              "Node.js",
              "Express",
              "MongoDB",
              "Python",
              "Java",
              "JavaScript",
              "TypeScript",
              "HTML5",
              "CSS3",
              "Git",
            ]),
          ],
        },
      ],
    },
    careerUrl: { url: "https://elice.io/", isClosed: false },
  },
];

export const miniProjectsList = [
  {
    id: 1,
    KR: {
      careerName: "치과 홍보 사이트",
      careerDescription: "첫 개인 프로젝트",
      careerSpecific: [
        {
          id: 1,
          positionIcon: "🧑🏻‍💻",
          position: "Full-stack Developer",
          span: "2021.07 - 2021.08",
          descriptionList: [
            "첫 개인 프로젝트로, 지인을 통해 외주를 받아 진행했습니다.",
            "Pug를 이용하여 SSR 기반으로 렌더링을 진행했으며, SCSS를 이용하여 스타일링하였습니다.",
            "WYSIWIG 에디터 중 Quill을 사용하여 게시물 포스팅을 구현했습니다.",
            "UI 디자인을 직접 모두 진행했습니다.",
          ],
          skills: [
            ...getSkills([
              "Pug",
              "SCSS",
              "Node.js",
              "Express",
              "MongoDB",
              "Heroku",
              "AWS S3",
            ]),
          ],
        },
      ],
    },
    EN: {
      careerName: "Dental Clinic Promotion Website",
      careerDescription: "first personal project",
      careerSpecific: [
        {
          id: 1,
          positionIcon: "🧑🏻‍💻",
          position: "Full-stack Developer",
          span: "2021.07 - 2021.08",
          descriptionList: [
            "It was my first personal project, and I outsourced it through an acquaintance.",
            "I performed rendering based on SSR using Pug and styled using SCSS.",
            "Posting was implemented using Quill among WYSIWIG editors.",
            "I did all the UI designs myself.",
          ],
          skills: [
            ...getSkills([
              "Pug",
              "SCSS",
              "Node.js",
              "Express",
              "MongoDB",
              "Heroku",
              "AWS S3",
            ]),
          ],
        },
      ],
    },
    careerUrl: {
      url: "https://mirae-dental.herokuapp.com",
      isClosed: false,
    },
  },
  {
    id: 2,
    KR: {
      careerName: "Gram-Schmidt Orthogonalization Tester",
      careerDescription: "대학교 선형대수 과목 과제",
      careerSpecific: [
        {
          id: 1,
          positionIcon: "✏️",
          position: "Student",
          span: "2021.11",
          descriptionList: ["대학교 선형대수 과목 과제로 제작했습니다."],
          skills: [...getSkills(["HTML5", "CSS3", "JavaScript"])],
        },
      ],
    },
    EN: {
      careerName: "Gram-Schmidt Orthogonalization Tester",
      careerDescription: "University Linear Algebra Assignment",
      careerSpecific: [
        {
          id: 1,
          positionIcon: "✏️",
          position: "Student",
          span: "2021.11",
          descriptionList: [
            "I made it as a university linear algebra subject assignment.",
          ],
          skills: [...getSkills(["HTML5", "CSS3", "JavaScript"])],
        },
      ],
    },
    careerUrl: {
      url: "https://jungminyoo.github.io/gram_schmidt_method",
      isClosed: false,
    },
  },
  {
    id: 3,
    KR: {
      careerName: "Singular Value Decomposition / PCA Tester",
      careerDescription: "대학교 선형대수 과목 과제",
      careerSpecific: [
        {
          id: 1,
          positionIcon: "✏️",
          position: "Student",
          span: "2021.12",
          descriptionList: [
            "대학교 선형대수 과목 과제로 제작했습니다.",
            "SVD.js, mathjs 등의 수학 관련 JS 라이브러리를 활용하였으며, chart.js를 이용하여 데이터 시각화를 진행했습니다.",
          ],
          skills: [...getSkills(["React.js"])],
        },
      ],
    },
    EN: {
      careerName: "Singular Value Decomposition / PCA Tester",
      careerDescription: "University Linear Algebra Assignment",
      careerSpecific: [
        {
          id: 1,
          positionIcon: "✏️",
          position: "Student",
          span: "2021.12",
          descriptionList: [
            "I made it as a university linear algebra subject assignment.",
            "Mathematics-related JS libraries such as SVD.js and mathjs were used, and data visualization was made using chart.js.",
          ],
          skills: [...getSkills(["React.js"])],
        },
      ],
    },
    careerUrl: {
      url: "https://jungminyoo.github.io/singular-value-decomposition",
      isClosed: false,
    },
  },
  {
    id: 4,
    KR: {
      careerName: "포트폴리오 사이트",
      careerDescription: "개인 포트폴리오 사이트 제작",
      careerSpecific: [
        {
          id: 1,
          positionIcon: "🧑🏻‍💻",
          position: "Front-end Developer",
          span: "2022.01 | 2022.10",
          descriptionList: [
            "개인 포트폴리오 사이트를 제작했습니다.",
            "2021 디자인 트렌드인 Glassmorphism 디자인을 일부 적용했습니다.",
            "Container-Presenter 패턴을 적용하고, 자주 쓰이는 코드는 최대한 모듈화 시키고자 노력했습니다.",
            "이후에 포트폴리오 내용을 업데이트 할 때 '최소한의 코드 변경으로 완전한 업데이트가 되어야 한다'라는 원칙으로 코드를 작성했으며, 실제로 한 파일의 JavaScript 객체 코드만 수정하여 새로운 내용이 추가/삭제/변경 될 수 있도록 아키텍쳐를 설계하였습니다.",
          ],
          skills: [
            ...getSkills(["React.js", "Recoil", "Axios", "styled-components"]),
          ],
        },
      ],
    },
    EN: {
      careerName: "Portfolio Website",
      careerDescription: "Created a Personal Portfolio Site",
      careerSpecific: [
        {
          id: 1,
          positionIcon: "🧑🏻‍💻",
          position: "Front-end Developer",
          span: "2022.01 | 2022.10",
          descriptionList: [
            "I created a personal portfolio site.",
            "I applied some of the 2021 trend Glassmorphism design.",
            "I tried to apply the Container-Presenter pattern and modularize frequently used codes as much as possible.",
            "When updating portfolio content, code was written with the principle that 'it should be a complete update with minimal code changes' and the architecture was designed to allow new content to be added/deleted/changed by modifying only the JavaScript object code in one file.",
          ],
          skills: [
            ...getSkills(["React.js", "Recoil", "Axios", "styled-components"]),
          ],
        },
      ],
    },
    careerUrl: {
      url: "https://jungminyoo.github.io",
      isClosed: false,
    },
  },
];

export const educationAndLicensesList = [
  {
    id: 1,
    KR: {
      careerName: "한양대학교",
      careerDescription:
        "컴퓨터소프트웨어학부 | 2021.03 ~ 휴학중 | ~ 1학년 이수",
    },
    EN: {
      careerName: "Hanyang University",
      careerDescription:
        "Department of Computer Software | 2021.03 ~ Taking a leave of absence | ~ Completed 1st grade",
    },
  },
  {
    id: 2,
    KR: {
      careerName: "정보처리기능사",
      careerDescription: "한국산업인력공단 | 2022.09 취득",
    },
    EN: {
      careerName: "Craftsman Information Processing",
      careerDescription:
        "Human Resources Development Service of Korea | Gained 2022.09",
    },
  },
];
