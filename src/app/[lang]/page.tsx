import { Article } from "@/components/Article";
import { RouteContext } from "@/components/contexts/RouteContext";

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
        product: "",
        version: "latest",
        rest: [],
      }}
    >
      <Article />
    </RouteContext.Provider>
  );
};

export default Page;