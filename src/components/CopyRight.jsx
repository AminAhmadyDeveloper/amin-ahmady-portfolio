import { Copyright } from "iconsax-react";

export default function CopyRight({ designer, developer }) {
  return (
    <p className="text-gray-900 text-xs p-3 ">
      <Copyright className="w-5 h-5 inline mb-1" /> Designed WITH ❤️ By{" "}
      {designer} & Coded WITH ☕ BY <a>{developer}</a>
      <img
        src="https://images.emojiterra.com/twitter/v14.0/512px/1f1ee-1f1f7.png"
        className="w-5 h-5 inline right-0 absolute mx-4 mt-1"
      />
    </p>
  );
}
