function SidebarItem({ label, link, isActive, onClick, children }) {
  return (
    <div
      className="flex flex-col items-start justify-between w-full"
    >
      <div className="flex w-full items-center">
        {children}
        <a
          href={link}
          onClick={onClick}
          className={`flex-grow text-xs font-semibold truncate ${
            isActive
              ? "text-secondary dark:bg-stone-600"
              : "hover:bg-slate-100  dark:hover:bg-stone-900 "
          }`}
        >
          {label}
        </a>
      </div>
    </div>
  );
}

export default SidebarItem;

