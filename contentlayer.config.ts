import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer2/source-files";
import RehypeCodeTitles from "rehype-code-titles";
import RehypePrettyCode from "rehype-pretty-code";
import RehypeSlug from "rehype-slug";
import RemarkGfm from "remark-gfm";
import RemarkGitHubAdmonitions from "remark-github-beta-blockquote-admonitions";

const IntroLinks = defineNestedType(() => ({
  name: "IntroLinks",
  fields: {
    title: { type: "string", required: true },
    item: { type: "string", required: true },
  },
}));

const FeaturedLinks = defineNestedType(() => ({
  name: "FeaturedLinks",
  fields: {
    title: { type: "string", required: true },
    items: { type: "list", of: { type: "string" }, required: true },
  },
}));

const Navigation = defineNestedType(() => ({
  name: "Navigation",
  fields: {
    self: { type: "boolean", required: false, default: false },
    items: { type: "list", of: { type: "string" }, required: true },
  },
}));

const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "**/*.md",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    layout: {
      type: "enum",
      options: ["landing", "overview", "article"],
      default: "article",
      required: false,
    },
    introLinks: { type: "list", of: IntroLinks, required: false },
    featuredLinks: { type: "list", of: FeaturedLinks, required: false },
    repository: { type: "string", required: false },
    navigation: { type: "nested", of: Navigation },
  },
  computedFields: {
    lang: {
      type: "string",
      resolve: (doc) => {
        return doc._raw.flattenedPath.split("/")[0];
      },
    },
    path: {
      type: "string",
      resolve: (doc) => {
        const path = doc._raw.flattenedPath.split("/");
        return path.length > 1 ? path.slice(1).join("/") : "";
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "docs",
  documentTypes: [Article],
  mdx: {
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
          titleFilter: [
            "![BUG]",
            "![DANGER]",
            "![IMPORTANT]",
            "![INFO]",
            "![NOTE]",
            "![SUCCESS]",
            "![TIP]",
            "![WARNING]",
          ],
        },
      ],
    ],
    rehypePlugins: [
      RehypeSlug,
      [RehypeCodeTitles, { titleSeparator: ":" }],
      [RehypePrettyCode, { theme: "dark-plus" }],
    ],
  },
});
