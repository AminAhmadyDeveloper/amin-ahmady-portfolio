export default function CallToAction(props) {
  return (
    <a
      href={props.url}
      download={props.download}
      className={`w-12/12 mt-0 m-6 flex-1 ${
        props.bordered
          ? "bg-transparent border-current border-2 text-current"
          : "bg-current border-none "
      } p-4 rounded-lg`}
    >
      {props.title}
    </a>
  );
}
