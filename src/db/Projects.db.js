import {
  Css3OriginalIcon,
  GithubOriginalIcon,
  Html5OriginalIcon,
  JavascriptOriginalIcon,
  NodejsOriginalIcon,
  ReactOriginalIcon,
  TailwindcssPlainIcon,
} from "react-devicons";
import portofilio from "./../assets/images/portofilio.jpeg";

export default [
  {
    projectName: "Personal Profilito Project",
    projectDesc:
      "Programming a Profilito project using react and recoil state manager Tailwind css framework, the web site you see right now",
    projectTumb: portofilio,
    projectImages: [
      {
        original: portofilio,
        thumbnail: portofilio,
      },
      {
        original: portofilio,
        thumbnail: portofilio,
      },
    ],
    projectLink: "http://aminahmadydeveloper.github.io/",
    projectSkills: ["React", "Recoil", "Tailwind", "CSS3", "HTML5"],
    projectIcons: [
      ReactOriginalIcon,
      TailwindcssPlainIcon,
      NodejsOriginalIcon,
      JavascriptOriginalIcon,
      Html5OriginalIcon,
      Css3OriginalIcon,
      GithubOriginalIcon,
    ],
  },
];
