import { allDocuments } from ".contentlayer/generated";
import { LANGUAGE_CODES } from "@/configurations/internationalization";

const HOST = "https://docs.natsuneko.cat";
const THRESHOLD = 10000;

const sitemapLoc = (category: string, count: number) =>
  Array(Math.ceil(count / THRESHOLD))
    .fill(0)
    .map(
      (_, i) =>
        `<sitemap><loc>${HOST}/sitemap-dynamic/${category}/sitemap-${i}.xml</loc></sitemap>`
    )
    .join("\n");

const urlLoc = (items: string[]) =>
  items.map((item) => `<url><loc>${HOST}/${item}</loc></url>`).join("\n");

const xml = (content: string) =>
  `<?xml version="1.0" encoding="UTF-8"?>${content}`;

const sitemapIndex = (content: string) =>
  xml(
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${content}</sitemapindex>`
  );

const urlSet = (content: string) =>
  xml(
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${content}</urlset>`
  );

const getSitemapIndex = async () => {
  return sitemapIndex(`
    ${Object.entries(getSitemapCount())
      .map((w) => sitemapLoc(w[0], w[1]))
      .join("")}
  `);
};

const getSitemapCount = (): Record<string, number> => {
  const languages = LANGUAGE_CODES;
  return languages.reduce((prev, current) => {
    const count = allDocuments.filter((w) => w.lang === current).length;
    return { ...prev, [current]: count / THRESHOLD };
  }, {});
};

const getDynamicSitemapContent = async (language: string, sitemap: string) => {
  const idx = parseInt(sitemap.split("-")[1]);
  const contents = allDocuments
    .filter((w) => w.lang === language)
    .slice(idx * THRESHOLD, idx * THRESHOLD + THRESHOLD);
  return urlSet(urlLoc(contents.map((w) => `${w._raw.flattenedPath}/`)));
};

const getSitemapContent = async (language: string, sitemap: string) => {
  return LANGUAGE_CODES.includes(language)
    ? getDynamicSitemapContent(language, sitemap)
    : "";
};

export { getSitemapContent, getSitemapCount, getSitemapIndex };
