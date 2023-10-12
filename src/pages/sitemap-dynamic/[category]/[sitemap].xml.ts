import * as SitemapService from "@/lib/sitemap";
import { GetServerSidePropsContext } from "next";

export const revalidate = 60 * 30; // 30 minutes

const getServerSideProps = async ({
  res,
  params,
}: GetServerSidePropsContext): Promise<{ props: {} }> => {
  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");

  if (params?.category && params?.sitemap) {
    res.write(
      await SitemapService.getSitemapContent(
        params.category as string,
        params.sitemap as string
      )
    );
  } else {
    res.write("");
  }

  res.end();

  return { props: {} };
};

const Sitemap = () => {};

export { getServerSideProps };
export default Sitemap;
