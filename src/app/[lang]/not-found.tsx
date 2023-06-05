import { Heading } from "@/components/Typography";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  params: { lang: string };
};

const NotFound = async ({ params }: Props) => {
  const { t } = await useTranslation(params?.lang, "not-found");

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Heading level={1}>{t("title")}</Heading>
      <p>{t("message")}</p>
    </div>
  );
};

export default NotFound;
