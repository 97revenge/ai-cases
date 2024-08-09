import { CalendarIcon, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";

export default async function AnimatedGradientTextDemo({ ...props }) {
  return (
    <>
      <AnimatedGradientText>
        <CalendarIcon className="h-5 w-5 text-muted-foreground" />{" "}
        <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
          )}
          {...props}
        ></span>
      </AnimatedGradientText>
    </>
  );
}
