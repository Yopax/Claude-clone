// page.tsx
import MainNavigation from "@/components/MainNavigation";
import ChatTitlebar from "@/components/ChatTitlebar";
import ChatInput from "@/components/ChatInput";
import UserMessage from "@/components/UserMessage";
import ClaudeResponse from "@/components/ClaudeResponse";

export default function Home() {
  return (
    <div className="flex h-screen bg-[#FAF9F5] font-sans text-[#141413] overflow-hidden">
      {/* Left Sidebar */}
      <MainNavigation />
      
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full relative">
        <ChatTitlebar />
        
        {/* Chat Scrollable Area */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-12 pb-32 pt-8">
          <div className="max-w-3xl mx-auto w-full space-y-8">
            
            <UserMessage 
              text={
                <>
                  Create a sprint planning page in <span className="font-semibold text-[#141413]">App</span> for todays engineering meeting
                </>
              } 
            />
            
            <ClaudeResponse />
            
          </div>
        </div>

        {/* Floating Input Area with Gradient */}
        <div className="absolute bottom-0 left-0 right-0 pt-10 pb-9.75 px-4 sm:px-6 md:px-12 pointer-events-none">
          <div className="max-w-3xl mx-auto w-full pointer-events-auto">
            <ChatInput />
          </div>
        </div>
      </main>
    </div>
  );
}