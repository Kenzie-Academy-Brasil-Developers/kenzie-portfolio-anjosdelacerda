import { AiFillGithub } from "react-icons/ai";
import { FaPython } from "react-icons/fa";
import { SiDjango, SiReactrouter, SiRedux, SiTypescript } from "react-icons/si";
import imgCSS from "../public/static/img/stack/css.svg";
import imgHTML from "../public/static/img/stack/html.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgReact from "../public/static/img/stack/react.svg";
import imgStyled from "../public/static/img/stack/styled.svg";

export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JS",
    img: imgJS,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  {
    title: "React",
    img: imgReact,
  },
  { title: "Redux", img: SiRedux },
  { title: "React Router", img: SiReactrouter },
  { title: "TypeScript", img: SiTypescript },
  { title: "GIT", img: AiFillGithub },
  { title: "Python", img: FaPython },
  { title: "Django", img: SiDjango },
];
