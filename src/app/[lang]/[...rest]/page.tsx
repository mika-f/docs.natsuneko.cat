import { find } from "@/services/docs";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    lang: string;
    rest: string[];
  }>;
};

export default async function Page({ params }: Props) {
  const { lang, rest } = await params;
  const document = find(rest.join("/"), lang);

  if (document) {
    return <div>{JSON.stringify(document)}</div>;
  } else {
    notFound();
  }
}
