"use client";

import { useIntersectionObserver } from "usehooks-ts";

import { FadeText } from "@/components/magicui/fade-text";
import Markdown from "react-markdown";
import { FadeDown } from "./animation-fadeup";

export const TextPage = ({ ...props }) => {
  const { isIntersecting, ref } = useIntersectionObserver();

  return (
    <>
      <div ref={ref}>
        {isIntersecting === true ? (
          <>
            <FadeDown>
              <p className="h-full min-h-[65px] ">
                <Markdown {...props}></Markdown>
              </p>
            </FadeDown>
          </>
        ) : (
          <>
            <div></div>
          </>
        )}
      </div>
    </>
  );
};
