import Button from "./Button";
import { IconCaretDown, IconChevronDown } from "./Icons";

export default function ChatTitlebar() {
  return (
    <div className="nav-button flex items-center justify-between px-4 py-3 shrink-0">
      <button className="flex items-center space-x-2 text-[#141413] font-medium text-[15px] hover:bg-[#F0EEE6] px-2 py-1.5 rounded-md transition-colors">
        <span>Product roadmap</span>
        <IconCaretDown  />
      </button>
      <Button variant="secondary" size="small">
        Share
      </Button>
    </div>
  );
}