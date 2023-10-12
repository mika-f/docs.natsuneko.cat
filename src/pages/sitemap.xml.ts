import * as SitemapService from "@/lib/sitemap";
import { GetServerSidePropsContext } from "next";

export const revalidate = 60 * 30; // 30 minutes

const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext): Promise<{ props: {} }> => {
  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  res.write(await SitemapService.getSitemapIndex());
  res.end();

  return { props: {} };
};

const Sitemap = () => {};

export { getServerSideProps };
export default Sitemap;
