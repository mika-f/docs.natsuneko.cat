import { notFound } from "next/navigation";
import { find } from "@/services/docs";

type Props = {
  params: Promise<{
    lang: string;
    rest?: string[];
  }>;
};

export default async function Page({ params }: Props) {
  const { lang, rest } = await params;
  const document = find((rest ?? []).join("/"), lang);

  if (document) {
    switch (document.layout) {
      case "landing":
        return <div>{JSON.stringify(document)}</div>;

      case "overview":
        return <div />;

      case "article":
        return <div />;
    }
  } else {
    notFound();
  }
}
