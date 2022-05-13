export default function CallToAction(props) {
  return (
    <a
      href={props.url}
      download={props.download}
      className={`w-12/12 mt-0 m-6 flex-1 inline ${
        props.bordered
          ? "bg-transparent border-current border-2 text-current"
          : "bg-current border-none text-white"
      } p-4 rounded-lg`}
    >
      {props.icon ? <props.icon className="inline"/> : <p/>}
      {` ${props.title}`}
    </a>
  );
}
