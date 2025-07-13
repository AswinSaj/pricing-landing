import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = [
    "freelancers",
    "agencies",
    "creators",
    "consultants",
    "developers",
    "startups",
    "designers",
    "marketers",
    "writers",
    "small businesses",
  ];

  return (
    <div className="h-[20rem] flex justify-center items-center px-4">
      <div className="text-6xl/20 max-w-4xl font-semibold text-neutral-600 dark:text-neutral-400  ">
        <div>AI-powered price suggestions and ready-to-send quotes for</div>
        <FlipWords words={words} />
        worldwide.
      </div>
    </div>
  );
}
