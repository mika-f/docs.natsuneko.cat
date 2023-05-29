import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "@contentlayer/source-files";

const IntroLinks = defineNestedType(() => ({
  name: "IntroLinks",
  fields: {
    title: { type: "string", required: true },
    link: { type: "string", required: true },
  },
}));

const FeaturedLinks = defineNestedType(() => ({
  name: "FeaturedLinks",
  fields: {
    title: { type: "string", required: true },
    links: { type: "list", of: { type: "string" }, required: true },
  },
}));

const Changelog = defineNestedType(() => ({
  name: "Changelog",
  fields: {
    repository: { type: "string", required: true },
  },
}));

const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "**/*.{md,mdx}",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    shortTitle: { type: "string", required: false },
    layout: {
      type: "enum",
      options: ["product-landing", "product-overview", "product-article"],
      default: "product-article",
      required: false,
    },
    intro: { type: "string", required: false },
    introLinks: { type: "nested", of: IntroLinks, required: false },
    featuredLinks: { type: "nested", of: FeaturedLinks, required: false },
    versions: { type: "list", of: { type: "string" } },
    children: { type: "list", of: { type: "string" }, required: false },
    changelog: { type: "nested", of: Changelog, required: false },
  },
  computedFields: {
    lang: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFilePath.split("/")[0],
    },
  },
}));

export { IntroLinks, FeaturedLinks, Changelog, Article };

export default makeSource({
  contentDirPath: "contents",
  documentTypes: [Article],
});
