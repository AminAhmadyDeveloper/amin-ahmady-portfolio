import Header from "../components/Header";
import Info from "./../components/Info";

import skills from "../db/Skills.js";

export default function App() {
  return (
    <div>
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
      <div className="w-full bg-gray-900 px-12 py-8 bg-fixed">
        <div className="flex flex-col">
          <h1 className="text-center font-bold ">Skills</h1>
        </div>
        <div className="flex flex-wrap content-evenly justify-evenly mt-4">
          {skills.map((skill) => (
            <div className="hover:scale-105 mx-4 my-2 shadow-xl w-full md:w-5/12 lg:w-2/12 h-min border-2 rounded-lg flex flex-col items-center py-2 bg-gray-100">
              <skill.skillImage
                size="8rem"
                className="icon-dev"
                color={skill.skillColor}
              />
              <a href={skill.skillLink} className="mt-4">
                {skill.skillName}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
