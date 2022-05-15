import { useState } from "react";
import ProjectsDB from "../db/Projects.db.js";
import PostsCard from "./ProjectsCard.jsx";

export default function Posts({ scroll }) {
  const [currentProjects, setCurrentProjects] = useState(
    ProjectsDB.reverse().slice(0, 4)
  );
  return (
    <>
      {currentProjects.map((project, index) => {
        console.log(project);
        return <PostsCard project={project} index={index} />;
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
            setTimeout(function () {
              scroll();
            }, 10);
          }}
        >
          Load More
        </button>
      </center>
    </>
  );
}
