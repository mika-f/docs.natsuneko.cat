import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  originalLang: string;
  lang: string;
};

const FallbackContent = async ({ originalLang, lang }: Props) => {
  const { t } = await useTranslation(lang, "translation");

  return (
    <div className="border-b border-purple-800 bg-purple-950 px-4">
      <div className="container mx-auto flex min-h-[64px] items-center justify-center">
        <p className="p-4">
          <span className="mr-2">
            <i className="fa-regular fa-circle-exclamation" />
          </span>
          <span>{t("fallbackContent", { originalLang })}</span>
        </p>
      </div>
    </div>
  );
};

export { FallbackContent };
