export default function BackGroundOfSections({
  title,
  dark = false,
  child,
  padded = false,
}) {
  return (
    <div
      className={`w-full relative ${
        dark ? "bg-gray-900 text-header" : "bg-header text-gray-900"
      } px-0 pt-2 bg-fixed`}
    >
      <div className="flex flex-col">
        <div className={`${padded ? "md:px-5 lg:px-20" : null}`}>
          {title ? <h1 className="text-center font-bold">{title}</h1> : null}
          {child}
        </div>
      </div>
    </div>
  );
}
