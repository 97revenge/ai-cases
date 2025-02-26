import { getI18n } from "@/locales/server";
import { SwitchTheme } from "./swith-theme";
import { JSX, SVGProps } from "react";
import { TitlePage } from "./title-page";
import { DateComponent } from "./date-component";
import { translate } from "@/app/[locale]/rights/actions";
import { TextPage } from "./text-page";
import { YoutubeEmbed } from "./youtube-embed";
import { TextRevealDemo } from "./text-reveal";
import { EmailFooter } from "./email-footer";

export default async function ContainerPage() {
  const t = await getI18n();

  const { response: intro, date, title } = await translate();

  return (
    <>
      <data value=" ">
        <div className="transition-all flex min-h-screen flex-col light:bg-secondary dark:bg-red-200  ">
          <header className="sticky top-0 z-40 w-full border-b bg-secondary/30">
            <div className="container flex flex-row h-16 items-center justify-between px-4 md:px-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="w-10 h-10"
              >
                <style type="text/css" id="dark-mode-сustom-style" />
                <style type="text/css" id="dark-mode-theme-changer-style" />
                <defs fill="#2D9964" />
                <path
                  d="m35,12c0-3.09,1.91-5,5-5s5,1.91,5,5-1.91,5-5,5-5-1.91-5-5Zm6.51,16.74c1.97,2.34,4.43,5.26,10.49,5.26v-5c-3.74,0-4.9-1.38-6.67-3.48-2.07-2.46-4.65-5.52-11.33-5.52-9.65,0-15.18,5.13-19,12.76l4.47,2.24c2.77-5.54,5.71-8.34,9.74-9.43l-4.95,9.9c-1.89,3.79-4.71,5.53-8.94,5.53h-4.32v6h4.32c6.7,0,11.19-2.74,14.21-8.66,2.64,2,10.54,8.63,12.77,17.66l5.69-1.9c-2.21-8.96-8.54-15.45-12.63-18.85l4.26-8.51c.66.57,1.24,1.25,1.88,2.01Z"
                  fill="#2D9964"
                />
              </svg>
              <SwitchTheme />
            </div>
          </header>
          <main className="container mx-auto my-12 flex max-w-3xl flex-1 flex-col items-center px-4 md:px-6">
            <article className="space-y-4 prose prose-gray dark:prose-invert">
              <TitlePage>{title}</TitlePage>
              {/* API de datas ou timeSprint  em um db  */}
              <DateComponent>{date}null data </DateComponent>

              {intro.map((item: any, index) => {
                return (
                  <>
                    <TextPage key={index}>{item}</TextPage>
                  </>
                );
              })}
            </article>
            <div className="w-[300px]  flex  items-center justify-center   h-[315px]  my-12 ">
              <YoutubeEmbed />
            </div>
            <article className="space-y-4 prose prose-gray dark:prose-invert">
              {intro.map((item: any, index) => {
                return (
                  <>
                    <TextPage key={index}>{item}</TextPage>
                  </>
                );
              })}
            </article>
            <div className="my-6 shadow-0">
              <TextRevealDemo />
            </div>
            <article className="space-y-4 prose prose-gray dark:prose-invert">
              {intro.map((item: any, index) => {
                return (
                  <>
                    <TextPage key={index}>{item}</TextPage>
                  </>
                );
              })}
            </article>
          </main>
          <EmailFooter />
        </div>
      </data>
    </>
  );
}

function CalendarIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}
