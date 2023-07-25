import { ChevronRight, ChevronDown } from 'react-feather';
import { useState } from 'react';
import paths from "../../../utils/paths";

function WorkspaceItem({ workspace, isActive, isDev, setSelectedWs, showModal }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      key={workspace.id}
      className="flex flex-col items-start justify-between w-full"
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
          className={`flex items-center text-sm font-semibold w-full truncate ${
            isActive
              ? "text-secondary dark:bg-stone-600"
              : "hover:bg-slate-100  dark:hover:bg-stone-900 "
          }`}
        >
          {workspace.name}
        </a>

        {isDev && (
          <button
            onClick={() => {
              setSelectedWs(workspace);
              showModal();
            }}
            className="rounded-md bg-stone-200 p-2 h-[36px] w-[15%] flex items-center justify-center text-slate-800 hover:bg-stone-300 group dark:bg-stone-800 dark:text-slate-200 dark:hover:bg-stone-900 dark:border dark:border-stone-800 ml-auto"
          >
            <Settings className="h-3.5 w-3.5 transition-all duration-300 group-hover:rotate-90" />
          </button>
        )}
      </div>

      {isExpanded && (
        <ul className="list-disc ml-5">
          {[{ id: 'doc1', name: 'Document 1' }, { id: 'doc2', name: 'Document 2' }].map((doc) => (
            <li key={doc.id}>{doc.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WorkspaceItem;

