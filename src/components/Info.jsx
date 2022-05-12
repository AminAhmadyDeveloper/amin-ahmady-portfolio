import amin from "./../assets/images/amin.jpg";
import CallToAction from "./CallToAction";

export default function Info(props) {
  return (
    <div>
      <div className="m-8 flex flex-col md:flex-row-reverse">
        <img
          src={amin}
          className="rounded-full w-full h-auto lg:w-7/12 md:w-6/12 my-auto relative overflow-hidden  hover:scale-105"
          draggable="false"
        />

        <div className="flex flex-col">
          <p className="w-full  lg:w-auto mt-6 text-center md:text-left text-5xl lg:text-8xl lg:ml-8 lg:mt-0 inline">
            Hi There, I'm {props.name} <a className="hidden md:inline">👋</a>
          </p>
          <p className="w-full lg:w-auto mt-6 text-center lg:text-left text-5xl lg:text-8xl lg:ml-8 lg:mt-0 md:hidden">
            👋
          </p>
          <p className="w-full lg:w-8/12 text-left text-sm mt-10 md:text-left lg:ml-8">
            {props.describe}
          </p>
        </div>
      </div>
      <div className="w-full lg:w-6/12 flex flex-col md:flex-row mt-5 content-evenly justify-evenly lg:ml-10 text-center">
        <CallToAction
          title="Download CV"
          url={props.cvAdress}
          download="false"
        />
        <CallToAction
          title="Contact Me"
          url="#contact"
          download="false"
          bordered="true"
        />
      </div>
    </div>
  );
}
