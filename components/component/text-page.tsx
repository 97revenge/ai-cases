"use client";

import { useIntersectionObserver } from "usehooks-ts";

import { FadeText } from "@/components/magicui/fade-text";
import Markdown from "react-markdown";
import { FadeDown } from "./animation-fadeup";

export const TextPage = ({ ...props }) => {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  return (
    <>
      <div ref={ref}>
        {isIntersecting === true ? (
          <>
            <FadeDown>
              <p>
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
