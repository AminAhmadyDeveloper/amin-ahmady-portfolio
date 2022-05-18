import { VerticalTimelineElement } from "react-vertical-timeline-component";
import openInNewTab from "../utils/openInNewTab";

export default function EducationItem({ edu }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentArrowStyle={{
        borderRight: "7px solid",
      }}
      date={edu.date}
      iconStyle={{ background: "rgb(17 24 39)", color: "#fff" }}
      icon={<edu.icon />}
    >
      <h3 className="vertical-timeline-element-title text-gray-900 text-2xl">
        {edu.title}
      </h3>
      <h4 className="vertical-timeline-element-subtitle text-gray-700 text-lg">
        {edu.subTitle}
      </h4>
      <p className="text-black text-md">{edu.desc}</p>
      {edu.link ? (
        <div className="flex justify-end">
          <button
            className="text-white  cursor-pointer mt-4 w-fit px-4 py-2 bg-current rounded-lg"
            onClick={() => openInNewTab(edu.link.url)}
          >
            {edu.link.text}
          </button>
        </div>
      ) : null}
    </VerticalTimelineElement>
  );
}
