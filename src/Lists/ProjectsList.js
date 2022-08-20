import ImagesList from "./ImagesList";
import { getSkills } from "./SkillsList";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import LogosList from "./LogosList";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

const ProjectsList = [
  {
    id: 1,
    logo: LogosList["miraeLogo"],
    duration: "2021/07/22 - 2021/08/25",
    content: {
      KR: {
        title: "치과 홍보 사이트",
        team: {
          logo: null,
          name: "개인",
          link: "https://github.com/jungminyoo",
        },
        role: ["프론트엔드 개발", "백엔드 개발", "UI/UX 디자인"],
        description:
          "첫 개인 프로젝트로, 지인을 통해 외주를 받아 진행했습니다. Pug를 이용하여 SSR을 기반으로 렌더링 했으며, Express.js를 이용하여 백엔드를 구현했습니다.",
        learned: [
          "WYSIWYG 에디터 도입 (Quill)",
          "SSR(Server-Side Rendering)에 대한 이해",
          "Express.js 관련 각종 라이브러리 활용",
        ],
        achievements: [],
      },
      EN: {
        title: "Dental Clinic Promotion Website",
        team: {
          logo: null,
          name: "Personal",
          link: "https://github.com/jungminyoo",
        },
        role: ["Front-end Develop", "Back-end Develop", "UI/UX Design"],
        description:
          "My first personal project\nFront-end render using SSR, Back-end development using Express.js",
        learned: [
          "Adoption of WYSIWYG Editor (Quill)",
          "Comprehension of SSR(Server-Side Rendering)",
          "Used various libraries related to Express.js",
        ],
        achievements: [],
      },
    },
    images: [
      {
        id: 1,
        src: ImagesList["miraeHome"],
        alt: "miraeHome",
        portrait: true,
      },
      {
        id: 2,
        src: ImagesList["miraeNotice"],
        alt: "miraeNotice",
        portrait: false,
      },
      {
        id: 3,
        src: ImagesList["miraeMap"],
        alt: "miraeMap",
        portrait: false,
      },
      {
        id: 4,
        src: ImagesList["miraeImg"],
        alt: "miraeImg",
        portrait: false,
      },
    ],
    skillsList: [
      {
        id: 1,
        type: "Front-end",
        skills: getSkills("Front-end", ["Pug", "SCSS", "JavaScript"]),
      },
      {
        id: 2,
        type: "Back-end",
        skills: getSkills("Back-end", ["Node.js", "Express.js", "MongoDB"]),
      },
      {
        id: 3,
        type: "Infra",
        skills: getSkills("Infra", ["Heroku", "AWS S3"]),
      },
    ],
    links: [
      {
        id: 1,
        type: "Website",
        link: "https://mirae-dental.herokuapp.com/",
        icon: faLink,
      },
      {
        id: 2,
        type: "Repository",
        link: "https://github.com/jungminyoo/mirae-dental",
        icon: faGithub,
      },
    ],
  },
  {
    id: 2,
    logo: LogosList["fanCakeLogo"],
    duration: "2021/08/01 - 2021/11/29",
    content: {
      KR: {
        title: "fanCake - 유튜브 영상 NFT 거래 플랫폼 (MVP)",
        team: {
          logo: LogosList["geneverLogo"],
          name: "genever",
          link: "https://github.com/team-genever",
        },
        role: ["프론트엔드 개발", "서비스 기획", "UI/UX 디자인"],
        description:
          "유튜브 영상 NFT 거래 플랫폼 fanCake의 초기 MVP 프론트엔드 개발을 담당했습니다. 개발 도중 아이템이 피보팅 되는 과정에서 디자인 및 데이터 구조가 변경 됨에 따라 개발 기간이 다소 길어졌습니다. 개발하면서 동시에 사업 기획에 참여하였고, UI/UX 디자인에도 일부 참여했습니다.",
        learned: [
          "백엔드 개발자와의 소통",
          "창업 관련 초기 지식 및 경험",
          "협업 구조 및 코드 아키텍쳐 구성",
        ],
        achievements: [],
      },
      EN: {
        title: "fanCake - NFT Marketplace Platform for YouTube Videos (MVP)",
        team: {
          logo: LogosList["geneverLogo"],
          name: "genever",
          link: "https://github.com/team-genever",
        },
        role: ["Front-end Develop", "Service Plan", "UI/UX Design"],
        description:
          "I was in charge of the initial MVP front-end development of fanCake, a YouTube video NFT trading platform. The development period has been slightly longer as the design and data structure have changed in the process of pivoting business items during development. I participated in business planning at the same time as I developed it, and I also participated in some UI/UX design.",
        learned: [
          "Communication with back-end developers",
          "Initial knowledge and experience related to start-ups.",
          "Collaborative structure and code architecture construction",
        ],
        achievements: [],
      },
    },
    images: [
      {
        id: 1,
        src: ImagesList["fanCakeHome"],
        alt: "fanCakeHome",
        portrait: true,
      },
      {
        id: 2,
        src: ImagesList["fanCakePurchase"],
        alt: "fanCakePurchase",
        portrait: false,
      },
      {
        id: 3,
        src: ImagesList["fanCakeWallet"],
        alt: "fanCakeWallet",
        portrait: true,
      },
    ],
    skillsList: [
      {
        id: 1,
        type: "Front-end",
        skills: getSkills("Front-end", [
          "React.js",
          "JavaScript",
          "HTML5",
          "SCSS",
        ]),
      },
    ],
    links: [
      {
        id: 1,
        type: "Website",
        link: "https://web.fancake.xyz/",
        icon: faLink,
      },
      {
        id: 2,
        type: "Repository",
        link: "https://github.com/team-genever/fancake_frontend",
        icon: faGithub,
      },
    ],
  },
  {
    id: 3,
    logo: LogosList["portfolioLogo"],
    duration: "2021/12/29 - 2022/01/02",
    content: {
      KR: {
        title: "포트폴리오 사이트",
        team: {
          logo: null,
          name: "개인",
          link: "https://github.com/jungminyoo",
        },
        role: ["프론트엔드 개발", "UI/UX 디자인"],
        description:
          "개인 포트폴리오 사이트를 제작했습니다. 2021 트렌드인 Glassmorphism 디자인을 일부 적용했습니다. Container-Presenter 패턴을 적용하고, 자주 쓰이는 코드는 최대한 모듈화 시키고자 노력했습니다.",
        learned: ["CSS 활용 능력 향상", "코드 모듈화"],
        achievements: [],
      },
      EN: {
        title: "Portfolio Website",
        team: {
          logo: null,
          name: "Personal",
          link: "https://github.com/jungminyoo",
        },
        role: ["Front-end Develop", "UI/UX Design"],
        description:
          "I created a personal portfolio site. I applied some of the 2021 trend Glassmorphism design. We tried to apply the Container-Presenter pattern and modularize frequently used codes as much as possible.",
        learned: ["Improvement of CSS skills", "Modulization of Codes"],
        achievements: [],
      },
    },
    images: [
      {
        id: 1,
        src: ImagesList["portfolioLanding"],
        alt: "portfolioLanding",
        portrait: false,
      },
      {
        id: 2,
        src: ImagesList["portfolioIntro"],
        alt: "portfolioIntro",
        portrait: false,
      },
      {
        id: 3,
        src: ImagesList["portfolioSkills"],
        alt: "portfolioSkills",
        portrait: false,
      },
      {
        id: 4,
        src: ImagesList["portfolioProjects"],
        alt: "portfolioProjects",
        portrait: false,
      },
    ],
    skillsList: [
      {
        id: 1,
        type: "Front-end",
        skills: getSkills("Front-end", [
          "React.js",
          "JavaScript",
          "HTML5",
          "SCSS",
        ]),
      },
    ],
    links: [
      {
        id: 1,
        type: "Website",
        link: "https://jungminyoo.github.io/",
        icon: faLink,
      },
      {
        id: 2,
        type: "Repository",
        link: "https://github.com/jungminyoo/jungminyoo.github.io",
        icon: faGithub,
      },
    ],
  },
  {
    id: 4,
    logo: LogosList["cassopiLogo"],
    duration: "2021/12/30 - 2022/03/11",
    content: {
      KR: {
        title: "CassoPi - 미래 아티스트들을 위한 NFT 마켓플레이스",
        team: {
          logo: null,
          name: "새폴더",
          link: "https://github.com/sefolder",
        },
        role: ["프론트엔드 개발"],
        description:
          "Klaytn을 기반으로 미래 아티스트들을 위한 NFT 마켓플레이스, CassoPi를 개발하였습니다.",
        learned: [
          "NextJS 적용을 통한 SSR에 대한 이해",
          "Kakao Klip API와의 연동 (Auth, Minting 등)",
          "Redux를 이용한 상태관리",
        ],
        achievements: [
          "성균관대학교 SPARK",
          "성균관대학교 S-TOP 웹/어플리케이션 부문 출품",
        ],
      },
      EN: {
        title: "CassoPi - NFT Marketplace for Future Artists",
        team: {
          logo: null,
          name: "New Folder",
          link: "https://github.com/sefolder",
        },
        role: ["Front-end Develop"],
        description:
          "I developed an NFT marketplace for future artists, CassoPi based on Klaytn.",
        learned: [
          "Understanding SSR through NextJS",
          "Interworking with Kakao Clip API (Auth, Minting, etc.)",
          "State Management using Redux",
        ],
        achievements: ["SKKU SPARK", "SKKU S-TOP Web/Application Exhibition"],
      },
    },
    images: [
      {
        id: 1,
        src: ImagesList["cassopiTitle"],
        alt: "cassopiTitle",
        portrait: false,
      },
      {
        id: 2,
        src: ImagesList["cassopiLogin"],
        alt: "cassopiLogin",
        portrait: false,
      },
      {
        id: 3,
        src: ImagesList["cassopiMarket"],
        alt: "cassopiMarket",
        portrait: false,
      },
      {
        id: 4,
        src: ImagesList["cassopiBuy"],
        alt: "cassopiBuy",
        portrait: false,
      },
      {
        id: 5,
        src: ImagesList["cassopiMinting"],
        alt: "cassopiMinting",
        portrait: false,
      },
    ],
    skillsList: [
      {
        id: 1,
        type: "Front-end",
        skills: getSkills("Front-end", [
          "React.js",
          "Next.js",
          "JavaScript",
          "HTML5",
          "SCSS",
          "Redux",
        ]),
      },
    ],
    links: [
      {
        id: 1,
        type: "Website",
        link: "https://www.cassopi.io/",
        icon: faLink,
      },
      {
        id: 2,
        type: "Website",
        link: "https://s-top.cs.skku.edu/s-top/5/exhibition/112",
        icon: faLink,
      },
      {
        id: 3,
        type: "Repository",
        link: "https://github.com/jungminyoo/jungminyoo.github.io",
        icon: faGithub,
      },
      {
        id: 4,
        type: "YouTube",
        link: "https://www.youtube.com/watch?v=QQBFlpk2yZY",
        icon: faYoutube,
      },
    ],
  },
];

export default ProjectsList;
