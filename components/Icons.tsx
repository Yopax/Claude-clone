// Icons.tsx
import React from 'react';

// Iconos anteriores (mantienen sus rutas originales)
export const IconSidebarClose = () => <img src="/icons/claude-icons-desktop/sidebar-close.svg" alt="Sidebar Close" />;
export const IconSidebarOpen = () => <img src="/icons/claude-icons-desktop/sidebar-open.svg" alt="Sidebar Open" />;
export const IconChatAdd = () => <img src="/icons/claude-icons-desktop/chat-add.svg" alt="Chat Add" />;
export const IconChats = () => <img src="/icons/claude-icons-desktop/chats.svg" alt="Chats" />;
export const IconProjects = () => <img src="/icons/claude-icons-desktop/projects.svg" alt="Projects" />;
export const IconWorkspace = () => <img src="/icons/claude-icons-desktop/workspace.svg" alt="Workspace" />;
export const IconCode = () => <img src="/icons/claude-icons-desktop/code.svg" alt="Code" />;
export const IconCaretDown = () => <img src="/icons/claude-icons-desktop/caret-down.svg" alt="Caret Down" />;
export const IconUser = () => <img src="/icons/claude-icons-desktop/user.svg" alt="User" />;
export const IconSideBar = () => <img src="/icons/claude-icons-desktop/sidebar.svg" alt="Sidebar" />;
export const IconAdd = () => <img src="/icons/claude-icons-desktop/add.svg" alt="Add" />;
export const IconDownSmall = () => <img src="/icons/claude-icons-desktop/caret-down-small.svg" alt="down small" />;
export const IconArrowUp = () => <img src="/icons/claude-icons-desktop/arrow-up.svg" alt="arrow up" />;
export const IconThumbsUp = () => <img src="/icons/claude-icons-desktop/thumbs-up.svg" alt="thumbs up" />;
export const IconThumbsDown = () => <img src="/icons/claude-icons-desktop/thumbs-down.svg" alt="thumbs down" />;
export const IconCopy = () => <img src="/icons/claude-icons-desktop/copy.svg" alt="copy" />;
export const IconReload = () => <img src="/icons/claude-icons-desktop/reload.svg" alt="refresh" />;
export const IconThinking = () => <img className='w-7 h-7' src="/icons/claude-icons-desktop/thinking.svg" alt="thinking" />;

// --- NUEVOS ICONOS PARA EL CHAT (SVGs Integrados) ---

export const IconChevronDown = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export const IconPlus = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);



export const IconRefresh = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

export const IconCodeBracket = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

export const IconClaude = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="5.636" y1="5.636" x2="18.364" y2="18.364" />
    <line x1="18.364" y1="5.636" x2="5.636" y2="18.364" />
  </svg>
);


// (Añade esto al final de tu Icons.tsx)

export const IconGraduationCap = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
  </svg>
);

export const IconPencil = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
  </svg>
);

export const IconCoffee = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
    <line x1="6" y1="2" x2="6" y2="4"></line>
    <line x1="10" y1="2" x2="10" y2="4"></line>
    <line x1="14" y1="2" x2="14" y2="4"></line>
  </svg>
);

export const IconLightbulb = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5"></path>
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
  </svg>
);

// (Añade esto al final de tu Icons.tsx existente)

export const IconAudio = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M17 7v10M7 9v6M22 10v4M2 11v2" />
  </svg>
);

export const IconClose = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const IconCheck = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const IconChevronRight = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// (Añade esto al final de tu Icons.tsx)
export const IconEye = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);