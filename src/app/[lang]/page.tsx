import { RouteContext } from "@/components/contexts/RouteContext";
import { GlobalArticle } from "./GlobalArticle";

type Props = {
  params: {
    lang: string;
  };
};

const Page: React.FC<Props> = ({ params }) => {
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
