import Button from "@/components/Button";
import MainNavigation from "@/components/MainNavigation";


export default function Home() {
  return (
    <div className="flex min-h-screen bg-white font-sans dark:bg-zinc-900">
      <MainNavigation />
      {/* Content Area */}
      <div className="flex-1 p-10 bg-[#FAF9F5]">
        {/* Other components will go here */}
      </div>
    </div>
  );
}