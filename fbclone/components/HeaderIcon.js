function HeaderIcon({ Icon }) {
  return (
    <div
      className={`text-gray-700 cursor-pointer md:px-10 sm:h-14 rounded-xl flex items-center md:hover:bg-gray-100 active:border-b-2 active:border-blue-500 h-5 hover:text-blue-500 `}
    >
      <Icon className="h-5 text-center sm:h-7 mx-auto" />
    </div>
  );
}

export default HeaderIcon;
