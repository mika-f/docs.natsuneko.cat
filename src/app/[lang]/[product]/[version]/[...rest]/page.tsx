import { GlobalArticle } from "@/app/[lang]/GlobalArticle";
import { RouteContext } from "@/components/contexts/RouteContext";
import { isValidVersion } from "@/lib/versions";

type Props = {
  params: {
    lang: string;
    product: string;
    version: string;
    rest: string[];
  };
};

const Page: React.FC<Props> = ({ params }) => {
  return (
    <RouteContext.Provider
      value={{
        language: params.lang,
        product: params.product,
        version: isValidVersion(params.version) ? params.version : null,
        rest: isValidVersion(params.version)
          ? params.rest
          : [params.version, ...params.rest],
      }}
    >
      <GlobalArticle />
    </RouteContext.Provider>
  );
};

export default Page;
