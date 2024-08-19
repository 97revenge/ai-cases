import ContainerPage from "../../../components/component/container-page";

import type { Metadata } from "next";
import { SwitchTheme } from "../../../components/component/swith-theme";

export const metadata: Metadata = {
  title:
    "Definindo uma Inteligência Artificial sobre código e defesa ao consumidor com a Hugging Face",
  description: "blog post",
};

export default async function Page() {
  return (
    <>
      <ContainerPage />
    </>
  );
}
