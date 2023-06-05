import { RouteContext } from "@/components/contexts/RouteContext";
import { Metadata, ResolvingMetadata } from "next";
import { GlobalArticle, getMetadata } from "./GlobalArticle";

type Props = {
  params: {
    lang: string;
  };
};

const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  return getMetadata(
    {
      language: params.lang,
      product: null,
      version: null,
      rest: [],
    },
    parent
  );
};

const Page = async ({ params }: Props) => {
  return (
    <RouteContext.Provider
      value={{
        language: params.lang,
        product: null,
        version: null,
        rest: [],
      }}
    >
      <GlobalArticle />
    </RouteContext.Provider>
  );
};

export default Page;
export { generateMetadata };
