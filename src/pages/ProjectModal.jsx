import { Activity, CloseSquare } from "iconsax-react";
import openInNewTab from "../utils/openInNewTab";

export default function ProjectModal({
  project,
  showModal,
  toggleModal,
  toggleScroll,
}) {
  return (
    <div
      style={{ top: window.pageYOffset }}
      className={`w-full h-screen fixed left-0 bg-black/70 flex z-20   ${
        showModal == true ? "block" : "hidden"
      }`}
    >
      <div className="bg-white h-5/6s m-6 p-4 rounded-lg flex flex-col lg:w-4/12 show">
        <div className="w-full flex justify-between">
          <div className="flex">
            <h3>{project.projectName}</h3>
            <div className="flex rounded-full p-2 mx-2 w-fit">
              {project.projectIcons?.map((icon) => {
                const Icon = icon;
                return (
                  <>
                    <Icon
                      className="w-full h-full justify-center items-center content-center mx-1"
                      size="0.8em"
                    />
                  </>
                );
              })}
            </div>
          </div>
          <CloseSquare
            className="cursor-pointer"
            onClick={() => {
              toggleModal();
              toggleScroll();
            }}
          />
        </div>

        <div className="rounded-lg mt-4 overflow-y-auto flex flex-col w-full">
          <div className="rounded-lg w-full flex justify-center ">
            <img
              src={project.projectImage}
              className="rounded-lg w-9/12 object-cover"
            />
          </div>
          <p className="text-justify mt-4  mx-2">
            {"About Project 👉 " + project.projectDesc}
          </p>
          <div className="my-3">
            {project.projectSkills?.map((skill) => {
              return (
                <a className="bg-gray-900 text-white rounded-md px-3 w-fit mx-1 py-1 my-1 justify-center content-center items-center inline-flex">
                  <Activity size={16} className="mr-2" />
                  {skill}
                </a>
              );
            })}
          </div>
          <button className="bg-current my-4 p-2 rounded-lg text-white font-bold" onClick={()=>openInNewTab(project.projectLink)}>
            Open Project
          </button>
        </div>
      </div>
    </div>
  );
}
