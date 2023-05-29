import { Article } from "@/components/Article";
import { RouteContext } from "@/components/contexts/RouteContext";

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
        version: "latest",
        rest: [],
      }}
    >
      <Article />
    </RouteContext.Provider>
  );
};

export default Page;
