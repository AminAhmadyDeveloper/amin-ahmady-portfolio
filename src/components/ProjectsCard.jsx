import projectState from "./../utils/projectState";
import { useRecoilState } from "recoil";

export default function ProjectsCard({ project, onClick }) {
  const [thisProject, setThisProject] = useRecoilState(projectState);

  return (
    <div className="inline-block w-full md:w-6/12 lg:w-3/12 hover:scale-105 duration-500 p-2 align-top">
      <div
        className="cursor-pointer my-4 mx-0 bg-white shadow-black/10 shadow-md rounded-xl "
        onClick={() => {
          setThisProject(project);
          onClick();
        }}
      >
        <div className="relative">
          <img
            src={project.projectTumb}
            alt={project.projectName}
            className="h-[320px] md:h-[420px] lg:h-[530px] w-full rounded-xl relative left-0 top-0 object-center overflow-hidden object-cover"
          />
          <div className="flex bg-gray-900/50 rounded-full p-2 absolute left-3 top-5">
            {project.projectIcons.map((icon) => {
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
          <div className="h-52  bg-gradient-to-b from-transparent to-gray-900  p-2 absolute left-0 bottom-0 right-0 rounded-lg">
            <div className=" absolute bottom-0 pb-3 flex flex-col">
              <a className="text-xl text-white mb-3">{project.projectName}</a>
              <p className="text-xs text-justify pr-2 text-white/70">
                About 👉 {project.projectDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
