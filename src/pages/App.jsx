import Header from "../components/Header";
import Info from "./../components/Info";
import Slider from "./../components/Slider";
import Projects from "../components/Projects";
import { useRef, useState } from "react";
import BackGroundOfSections from "../components/BackGroundOfSections";
import CopyRight from "../components/CopyRight";
import ProjectModal from "./ProjectModal";
import { selector, useRecoilValue } from "recoil";
import projectState from "./../utils/projectState";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import EducationDB from "./../db/Education.db";
import EducationItem from "../components/EducationItem";

export default function App() {
  const projectsRef = useRef(null);
  const executeScroll = () => projectsRef.current.scrollIntoView();
  const [scroll, setSroll] = useState("hidden");
  const [showModal, setshowModal] = useState(false);
  const toggleScroll = () => {
    scroll === "hidden" ? setSroll("auto") : setSroll("hidden");
    document.body.style.overflow = scroll;
  };
  const toggleModal = () => setshowModal(!showModal);
  const thisProjectState = selector({
    key: "thisProjectState",
    get: ({ get }) => get(projectState),
  });

  return (
    <div>
      <ProjectModal
        showModal={showModal}
        toggleModal={toggleModal}
        toggleScroll={toggleScroll}
        project={useRecoilValue(thisProjectState)}
      />
      <div className="select-none relative">
        <Header />
        <div className="h-5/6">
          <Info
            name="Amin Ahmady"
            describe="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual
        form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before
        final copy is available."
            cvAdress="https://bing.com"
          />
        </div>

        <BackGroundOfSections title="SKIILS" dark={true} child={<Slider />} />
        <BackGroundOfSections
          title="PROJECTS"
          padded={true}
          child={
            <Projects
              scroll={executeScroll}
              onClick={() => {
                toggleScroll();
                toggleModal();
              }}
            />
          }
        />
        <BackGroundOfSections
          title="EDUCATION"
          padded={false}
          dark={true}
          child={
            <VerticalTimeline>
              {EducationDB?.map((edu) => {
                return <EducationItem edu={edu}/>;
              })}
            </VerticalTimeline>
          }
        />
        <div ref={projectsRef} className="w-full bg-header px-4">
          <CopyRight developer="Amin Ahmady" designer="Mina Ahmady" />
        </div>
      </div>
    </div>
  );
}
