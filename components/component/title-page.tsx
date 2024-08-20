"use client";

import Markdown from "react-markdown";

export const TitlePage = ({ ...props }) => {
  return (
    <>
      <h1 className="transition-all drop-shadow-sm hover:drop-shadow-md my-4  light:bg-primary light:text-unset-line dark:text-white text-4xl font-bold tracking-tight">
        <Markdown {...props}></Markdown>
      </h1>
    </>
  );
};
