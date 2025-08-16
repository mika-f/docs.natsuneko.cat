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

const Changelog = defineNestedType(() => ({
  name: "Changelog",
  fields: {
    repository: { type: "string", required: true },
  },
}));

const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "**/*.md",
  contentType: "markdown",
  fields: {
    title: { type: "string", required: true },
    layout: {
      type: "enum",
      options: ["overview", "article"],
      default: "article",
      required: false,
    },
    changelog: { type: "nested", of: Changelog, required: false },
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
  markdown: {
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
            "Bug",
            "Danger",
            "Important",
            "Info",
            "Note",
            "Success",
            "Tip",
            "Warning",
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
