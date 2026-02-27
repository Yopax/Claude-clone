"use client";

import { useState } from "react";

import {
  IconChatAdd,
  IconChats,
  IconProjects,
  IconWorkspace,
  IconCode,
  IconCaretDown,
  IconUser,
  IconSideBar,
} from "./Icons";
import { starredItems, recentItems } from "./data";

export default function MainNavigation() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside
      className={`h-screen bg-[#FAF9F5] border-r-[0.5px] border-[#e1e3e1] flex flex-col overflow-hidden transition-width duration-300 ease-in-out ${isExpanded ? "w-63.75" : "w-13"}`}
    >
      <div className="flex items-center px-2.5 py-4 h-17 w-full">
        <div
          className={`flex items-center overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "w-40 opacity-100 ml-1.5" : "w-0 opacity-0 ml-0"
          }`}
        >
          <img
            className="h-5 w-auto max-w-none shrink-0 text-[20px] font-serif font-medium text-[#111827]"
            src="/icons/claude-icons-desktop/logo.svg"
            alt="Logo"
          />
        </div>
        <button
          className="ml-auto shrink-0 w-8 h-8 flex items-center justify-center rounded border-none bg-transparent text-[#6b7280] cursor-pointer transition-colors duration-150 hover:bg-[rgba(107,114,128,0.12)]"
          onClick={() => setIsExpanded((v) => !v)}
          title={isExpanded ? "Cerrar" : "Abrir"}
        >
          {isExpanded ? <IconSideBar /> : <IconSideBar />}
        </button>
      </div>

      <nav className="flex flex-col px-2 mt-3">
        {[
          { icon: <IconChatAdd />, label: "New chat" },
          { icon: <IconChats />, label: "Chats" },
          { icon: <IconProjects />, label: "Projects" },
          { icon: <IconWorkspace />, label: "Artifacts" },
          { icon: <IconCode />, label: "Code" },
        ].map(({ icon, label }) => (
          <button
            key={label}
            className="nav-button space-x-3 flex items-center w-full border-none rounded-md cursor-pointer text-[#374151] p-2 transition-colors duration-150 hover:bg-[#F0EEE6]"
          >
            <span className="shrink-0 w-5 h-5 flex items-center justify-center">
              {icon}
            </span>
            <span
              className={`text-sm text-[#141413] whitespace-nowrap overflow-hidden transition-all duration-300 ${isExpanded ? "max-w-40 opacity-100" : "ml-0 max-w-0 opacity-0"}`}
            >
              {label}
            </span>
          </button>
        ))}
      </nav>

      <div
        className={`flex-1 overflow-y-auto overflow-x-hidden mt-5 transition-opacity duration-100 ${isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="mb-5">
          <p className="nav-button px-2 pt-1 pb-2 mx-2 text-xs text-[#4D4C48] tracking-wider mb-1">
            Starred
          </p>
          <ul className="nav-button list-none m-0 px-2 flex flex-col gap-0.5">
            {starredItems.map((item, i) => (
              <li key={i}>
                <button className="w-full text-left p-2 text-sm rounded-lg border-none bg-transparent cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-150 hover:bg-[#f0ede6]">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-5">
          <p className="nav-button px-2 pt-1 pb-2 mx-2 text-xs text-[#4D4C48] tracking-wider mb-1">
            Recents
          </p>
          <ul className="nav-button list-none m-0 px-2 flex flex-col gap-0.5">
            {recentItems.map((item, i) => (
              <li key={i}>
                <button className="w-full text-left p-2 text-sm rounded-lg border-none bg-transparent cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-150 hover:bg-[#f0ede6]">
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto mx-1 my-3">
        <button className="nav-button space-x-2 flex items-center w-full hover:rounded-md border-none cursor-pointer px-1.5 py-1.5 transition-colors duration-150 hover:bg-[#f0ede6]">
          <div className="w-7 h-7 rounded-full bg-[#d0759f] flex items-center justify-center shrink-0">
            <IconUser />
          </div>
          <div
            className={`flex-1 flex items-center justify-between whitespace-nowrap overflow-hidden transition-all duration-300 ${isExpanded ? "max-w-45 opacity-100" : "max-w-0 opacity-0"}`}
          >
            <div className="overflow-hidden text-start">
              <span className="block text-sm text-[#3D3D3A]">Sarah Chen</span>
              <span className="block text-xs text-[#73726C]">Pro plan</span>
            </div>
            <span className="text-[#9ca3af] shrink-0 ml-1">
              <IconCaretDown />
            </span>
          </div>
        </button>
      </div>
    </aside>
  );
}
