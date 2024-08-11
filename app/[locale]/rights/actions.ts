"use server"

import { getI18n } from "@/locales/server";

export const translate = async () => {

  const t = await getI18n();

  return {
    title: t("title"),
    date: t("date"),

    response: [
      t("P_01"),
      t("P_02"),
      t("P_03"),
      t("P_04"),
      t("P_05"),
    ]
  }

}