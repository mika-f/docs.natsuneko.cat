import { RouteContext } from "@/components/contexts/RouteContext";
import { GlobalArticle } from "../GlobalArticle";

type Props = {
  params: {
    lang: string;
    product: string;
  };
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
