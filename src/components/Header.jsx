import menuItems from "./../db/MenuItems.json";
import { Sun, Menu, Polkadot } from "iconsax-react";
import { SocialIcon } from "react-social-icons";

export default function Header(props) {
  return (
    <div className="mx-8 relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
      <div className="flex content-center justify-center">
        <Polkadot className="h-auto mr-4" />
        <div className="flex flex-col">
          <a className="font-bold noselect">Amin Ahmady</a>
          <a className="noselect">full stack developer</a>
        </div>
      </div>
      <div className="flex items-center">
        <div className="-my-1 ml-2 -mr-1 md:hidden">
          <button
            type="button"
            className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          >
            <span className="sr-only">Navigation</span>
            <Menu className="w-5 h-5" />
          </button>
        </div>
        <div className="hidden md:flex items-center">
          <nav>
            <ul className="flex items-center space-x-8">
              {menuItems.map((menuItem) => (
                <li key={menuItem.key}>
                  <a href={menuItem.menuDestiny}>{menuItem.menuName}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
            <Sun onClick={() => {}} cursor="pointer" />

            <SocialIcon
              bgColor="transparent"
              fgColor="#6e5494"
              url="https://github.com/glenthemes/iconsax/tree/gh-pages/icons"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
