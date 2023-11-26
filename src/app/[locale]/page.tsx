import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("Index");
  return <div className="max-w-page w-full"> {t("title")} </div>;
}
