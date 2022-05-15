import menuItems from "../db/MenuItems.json";
import { Menu } from "iconsax-react";
import { SocialIcon } from "react-social-icons";
import { VscodeOriginalIcon } from "react-devicons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="mx-8 relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
      <div className="flex content-center justify-center items-center">
        <VscodeOriginalIcon className="h-auto mr-4 text-4xl" />
        <div className="flex flex-col">
          <a className="font-bold text-gray-900 noselect">Amin Ahmady</a>
          <a className="noselect text-gray-900">full stack developer</a>
        </div>
      </div>
      <div className="flex items-center">
        <div className="-my-1 ml-2 -mr-1 md:hidden">
          <button
            type="button"
            className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
        <div className="hidden md:flex items-center">
          <nav>
            <ul className="flex items-center space-x-8">
              {menuItems.map((menuItem) => (
                <li key={menuItem.key}>
                  <a className="text-gray-900" href={menuItem.menuDestiny}>
                    {menuItem.menuName}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center border-l border-gray-900 ml-6 pl-6">
            <SocialIcon
              bgColor="transparent"
              fgColor="#6e5494"
              url="https://github.com/AminAhmadyDeveloper/amin-ahmady-portfolio"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
