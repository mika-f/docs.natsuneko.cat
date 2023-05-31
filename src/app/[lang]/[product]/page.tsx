import { RouteContext } from "@/components/contexts/RouteContext";
import { Metadata, ResolvingMetadata } from "next";
import { GlobalArticle, getMetadata } from "../GlobalArticle";

type Props = {
  params: {
    lang: string;
    product: string;
  };
};

const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  return getMetadata(
    {
      language: params.lang,
      product: params.product,
      version: null,
      rest: [],
    },
    parent
  );
};

const Page: React.FC<Props> = ({ params }) => {
  return (
    <RouteContext.Provider
      value={{
        language: params.lang,
        product: params.product,
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
