import { useRef } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Header from "../components/Header";
import Info from "./../components/Info";
import Slider from "./../components/Slider";
import Projects from "../components/Projects";
import EducationItem from "../components/EducationItem";
import CopyRight from "../components/CopyRight";
import BackGroundOfSections from "../components/BackGroundOfSections";
import ProjectModal from "./ProjectModal";
import EducationDB from "./../db/Education.db";

export default function App() {
  const projectsRef = useRef(null);
  const executeScroll = () => projectsRef.current.scrollIntoView();

  return (
    <div>
      <ProjectModal />
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
          child={<Projects scroll={executeScroll} />}
        />
        <BackGroundOfSections
          title="EDUCATION"
          padded={false}
          dark={true}
          child={
            <VerticalTimeline>
              {EducationDB?.map((edu, index) => {
                return <EducationItem key={index} edu={edu} />;
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
