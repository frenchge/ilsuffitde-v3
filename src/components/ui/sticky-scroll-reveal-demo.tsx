"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Editing",
    description: "Work together in real time with your team, clients, and stakeholders.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#06b6d4,#10b981)] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description: "See changes as they happen and keep everyone aligned.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#ec4899,#6366f1)] text-white">
        Real time changes
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
