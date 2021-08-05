import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
    <div className="header sticky z-50 flex items-center p-2 lg:px-5 shadow-md">
      {/* Left */}
      <div className="header-left flex items-center ">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="md:inline-flex outline-none ml-2 items-center placeholder-gray-500 bg-transparent hidden"
          />
        </div>
      </div>

      {/* Center */}
      <div className="header-center flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2 ">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}
      <div className="header-right flex items-center sm:space-x-2 justify-end">
        {/* profile pic */}
        <p className="font-semibold pr-3 whitespace-nowrap"> Thaer Shiekh </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
