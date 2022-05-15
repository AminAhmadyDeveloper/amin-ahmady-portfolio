import Header from "../components/Header";
import Info from "./../components/Info";
import Slider from "./../components/Slider";
import Projects from "../components/Projects";
import { useRef } from "react";
import BackGroundOfSections from "../components/BackGroundOfSections";
import CopyRight from "../components/CopyRight";

export default function Home() {
  const projectsRef = useRef(null);
  const executeScroll = () => projectsRef.current.scrollIntoView();

  return (
    <div className="select-none">
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
        title="Projects"
        padded={true}
        child={<Projects scroll={executeScroll} />}
      />
      <div
        ref={projectsRef}
        className="w-full bg-gray-900 px-4"
      >
        <CopyRight developer="Amin Ahmady" designer="Mina Ahmady" />
      </div>
    </div>
  );
}
