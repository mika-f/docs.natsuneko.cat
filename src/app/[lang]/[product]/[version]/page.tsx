import { RouteContext } from "@/components/contexts/RouteContext";
import { isValidVersion } from "@/lib/versions";
import { GlobalArticle } from "../../GlobalArticle";

type Props = {
  params: {
    lang: string;
    product: string;
    version: string;
  };
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
