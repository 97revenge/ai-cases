"use client";
import { CalendarIcon } from "@radix-ui/react-icons";

export const DateComponent = ({ ...props }) => {
  return (
    <>
      <div className="  flex items-center gap-4 my-2 ">
        <div className="transition-all shadow-sm hover:shadow-lg bg-gray-300/30 flex flex-row p-2 space-x-2 rounded-xl">
          <CalendarIcon className="h-5 w-5 text-muted-foreground" />
          <p className="text-sm text-muted-foreground" {...props}></p>
        </div>
      </div>
    </>
  );
};
