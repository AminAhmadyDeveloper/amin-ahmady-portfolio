import { useState } from "react";
import ProjectsDB from "../db/Projects.db.js";
import ProjectsCard from "./ProjectsCard.jsx";

export default function Posts({ scroll, onClick }) {
  const [currentProjects, setCurrentProjects] = useState(
    ProjectsDB.reverse().slice(0, 4)
  );

  return (
    <>
      {currentProjects?.map((project, index) => {
        return <ProjectsCard key={index} project={project} onClick={onClick} />;
      })}
      <center>
        <button
          className={`${
            currentProjects.length === ProjectsDB.length
              ? "hidden"
              : "inline-block"
          } w-full border-current border-2 my-3 p-4 text-current rounded-lg md:w-6/12 lg:w-2/12 font-bold`}
          onClick={() => {
            setCurrentProjects(ProjectsDB.slice(0, currentProjects.length + 4));
            setTimeout(() => scroll(), 100);
          }}
        >
          Load More
        </button>
      </center>
    </>
  );
}
