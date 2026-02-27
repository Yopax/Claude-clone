import React from 'react';

export default function UserMessage({ text }: { text: React.ReactNode }) {
  return (
    <div className="flex justify-end w-full">
      <div className="bg-[#F0EEE6] text-[#141413] p-3 rounded-xl max-w-[80%] text-[15px] leading-relaxed ">
        {text}
      </div>
    </div>
  );
}