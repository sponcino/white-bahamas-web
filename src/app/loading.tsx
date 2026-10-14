import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center pt-20">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-slate-200 border-t-[#0099ff] animate-spin" />
        <div className="w-8 h-8 rounded-full bg-[#0099ff]/10 animate-pulse" />
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
        White Bahamas Argentina
      </p>
    </div>
  );
}
