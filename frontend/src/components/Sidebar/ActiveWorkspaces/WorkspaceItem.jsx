import { ChevronRight, ChevronDown, MoreHorizontal } from 'react-feather';
import { useState } from 'react';
import paths from "../../../utils/paths";
import WorkspaceDocumentsList from "./WorkspaceDocumentsList";

function WorkspaceItem({ workspace, isActive, isDev, setSelectedWs, showModal }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      key={workspace.id}
      className="flex flex-col items-start justify-between w-full group" // Add "group" here
    >
      <div className="flex items-center w-full hover:bg-slate-100 p-1">
        <div
          className="cursor-pointer hover:bg-slate-200"
          onClick={(e) => {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ?
            <ChevronDown size={18} color={isActive ? "green" : "black"} /> :
            <ChevronRight size={18} color={isActive ? "green" : "black"} />
          }
        </div>

        <a
          href={isActive ? null : paths.workspace.chat(workspace.slug)}
          className={`flex ml-1 items-center text-sm font-semibold w-full truncate ${
            isActive
              ? "text-secondary dark:bg-stone-600"
              : "hover:bg-slate-100  dark:hover:bg-stone-900 "
          }`}
        >
          {workspace.name}
        </a>

        <button
          onClick={() => {
            setSelectedWs(workspace);
            showModal();
          }}
          className="p-1 flex items-center justify-center rounded text-slate-800 hover:bg-slate-200 group dark:bg-stone-800 dark:text-slate-200 dark:hover:bg-stone-900 dark:border dark:border-stone-800 ml-auto opacity-0 group-hover:opacity-100" // Control visibility here
        >
          <MoreHorizontal className="h-3.5 w-3.5 transition-all duration-300 group-hover:rotate-90" />
        </button>
      </div>

      {isExpanded && <WorkspaceDocumentsList documents={workspace.documents} />}
    </div>
  );
}

export default WorkspaceItem;

