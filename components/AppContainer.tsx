import { IconCode } from "./Icons";

export default function AppContainer({
  onOpenArtifact,
}: {
  onOpenArtifact?: () => void;
}) {
  return (
    <div className="w-full border-[0.5px] border-[#1F1E1D]/30 rounded-[10px] bg-white overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.03)] my-2">
      <div className="flex items-center justify-between px-3 py-2.5 border-b-[0.5px] border-[#1F1E1D]/10">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 border-[0.5px] border-[#1F1E1D]/40 rounded flex items-center justify-center text-[12px] font-bold text-[#141413] bg-white">
            A
          </div>
          <span className="font-medium text-[#141413]">Card component</span>
        </div>
        <button
          onClick={onOpenArtifact}
          className="hover:bg-[#F0EEE6] p-1.5 rounded transition-colors cursor-pointer"
        >
          <IconCode />
        </button>
      </div>

      <div className="p-6 space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center space-x-5">
            <div className="w-8 h-8 rounded-full bg-[#f1f1f0] shrink-0" />
            <div className="h-7 flex-1 rounded-lg bg-[#f1f1f0]" />
            <div className="h-7 flex-1 rounded-lg bg-[#f1f1f0]" />
            <div className="h-7 flex-1 rounded-lg bg-[#f1f1f0]" />
          </div>
        ))}
      </div>
    </div>
  );
}
