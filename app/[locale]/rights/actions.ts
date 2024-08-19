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

export const getUrls = () => {
  const urls = [
    "https://www.youtube.com/watch?v=pZBDVklQT-g&pp=ygUgQ8OzZGlnbyBkZSBkZWZlc2EgYW8gIGNvbnN1bWlkb3I%3D",
    "https://www.youtube.com/watch?v=aehiyj4t6O0&pp=ygUgQ8OzZGlnbyBkZSBkZWZlc2EgYW8gIGNvbnN1bWlkb3I%3D",
    "https://www.youtube.com/watch?v=W1-7_eK-XYk&t=1s&pp=ygUgQ8OzZGlnbyBkZSBkZWZlc2EgYW8gIGNvbnN1bWlkb3I%3D",
    "https://www.youtube.com/watch?v=_uVB4nB7IAI&list=PL64hzxlE6uurhWAbI9wAGtJ3whOQX0XWr",
  ];

  return {
    response: urls
  }

}