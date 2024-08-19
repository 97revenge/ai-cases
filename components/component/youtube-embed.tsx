"use client";

import { useIntersectionObserver } from "usehooks-ts";

import { FadeDown } from "./animation-fadeup";
import { YouTubeEmbed } from "react-social-media-embed";
import Marquee from "../magicui/marquee";
import { getUrls } from "@/app/[locale]/rights/actions";
import { useEffect, useState, useTransition } from "react";

export const YoutubeEmbed = () => {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  const [isPending, startTransition] = useTransition();

  const [urls, setUrls] = useState<Array<string>>([]);

  useEffect(() => {
    function getData() {
      startTransition(async () => {
        const { response } = await getUrls();
        setUrls(response);
      });
    }

    getData();
  }, []);

  if (isPending) {
    return (
      <>
        <div>loading...</div>
      </>
    );
  }

  return (
    <>
      <FadeDown>
        <Marquee
          pauseOnHover
          className="[--duration:20s] w-auto max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl shadow-xl drop-shadow-xl"
        >
          {urls.map((item) => {
            return (
              <>
                <YouTubeEmbed
                  className="w-ful h-auto max-h-xl"
                  url={item}
                  width={350}
                  height={315}
                />
              </>
            );
          })}
        </Marquee>
      </FadeDown>
    </>
  );
};
