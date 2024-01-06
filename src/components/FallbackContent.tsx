import { Banner } from "@natsuneko-laboratory/ui/miscellaneous/banner";

import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  originalLang: string;
  lang: string;
};

const FallbackContent = async ({ originalLang, lang }: Props) => {
  const { t } = await useTranslation(lang, "translation");

  return (
    <Banner type="note">
      <span className="mr-2">
        <i className="fa-regular fa-circle-exclamation" />
      </span>
      <span>{t("fallbackContent", { originalLang })}</span>
    </Banner>
  );
};

export { FallbackContent };
