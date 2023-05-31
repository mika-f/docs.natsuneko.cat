import { RouteContext } from "@/components/contexts/RouteContext";
import { isValidVersion } from "@/lib/versions";
import { Metadata, ResolvingMetadata } from "next";
import { GlobalArticle, getMetadata } from "../../GlobalArticle";

type Props = {
  params: {
    lang: string;
    product: string;
    version: string;
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
      version: isValidVersion(params.version) ? params.version : null,
      rest: isValidVersion(params.version) ? [] : [params.version],
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
        version: isValidVersion(params.version) ? params.version : null,
        rest: isValidVersion(params.version) ? [] : [params.version],
      }}
    >
      <GlobalArticle />
    </RouteContext.Provider>
  );
};

export default Page;
export { generateMetadata };
