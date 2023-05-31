import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "@contentlayer/source-files";

import RehypeSlug from "rehype-slug";
import RemarkGfm from "remark-gfm";
import RemarkGitHubAdmonitions from "remark-github-beta-blockquote-admonitions";

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
    items: { type: "list", of: { type: "string" }, required: true },
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
    introLinks: { type: "list", of: IntroLinks, required: false },
    featuredLinks: { type: "list", of: FeaturedLinks, required: false },
    versions: { type: "list", of: { type: "string" } },
    children: { type: "list", of: { type: "string" }, required: false },
    changelog: { type: "nested", of: Changelog, required: false },
  },
  computedFields: {
    // lang field is required
    lang: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/")[0],
    },
    // product field is not required
    product: {
      type: "string",
      resolve: (doc) => {
        const path = doc._raw.flattenedPath.split("/");
        return path.length > 1 ? path[1] : null;
      },
    },
    // path fields is required
    path: {
      type: "string",
      resolve: (doc) => {
        const path = doc._raw.flattenedPath.split("/");
        return path.length > 2 ? path.slice(2).join("/") : "";
      },
    },
  },
}));

export { IntroLinks, FeaturedLinks, Changelog, Article };

export default makeSource({
  contentDirPath: "contents",
  documentTypes: [Article],
  mdx: {
    rehypePlugins: [RehypeSlug],
    remarkPlugins: [
      RemarkGfm,
      [
        RemarkGitHubAdmonitions,
        {
          classNameMaps: {
            block: (title: string) => {
              return ["admonition", `admonition-${title.toLowerCase()}`];
            },
            title: () => {
              return ["hidden"];
            },
          },
          titleFilter: ["Note", "Important"],
        },
      ],
    ],
  },
});
