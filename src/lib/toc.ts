import { toc } from "mdast-util-toc";
import { remark } from "remark";
import { visit } from "unist-util-visit";

import type {
  Blockquote,
  Break,
  Code,
  Definition,
  Delete,
  Emphasis,
  Footnote,
  FootnoteDefinition,
  FootnoteReference,
  HTML,
  Heading,
  Image,
  ImageReference,
  InlineCode,
  Link,
  LinkReference,
  List,
  ListItem,
  Paragraph,
  Root,
  Strong,
  Table,
  TableCell,
  TableRow,
  Text,
  ThematicBreak,
  YAML,
} from "mdast";
import type { Plugin } from "unified";

type Node =
  | Root
  | Paragraph
  | Heading
  | ThematicBreak
  | Blockquote
  | List
  | ListItem
  | Table
  | TableRow
  | TableCell
  | HTML
  | Code
  | YAML
  | Definition
  | FootnoteDefinition
  | Text
  | Emphasis
  | Strong
  | Delete
  | InlineCode
  | Break
  | Link
  | Image
  | LinkReference
  | ImageReference
  | Footnote
  | FootnoteReference;

type Item = {
  title: string;
  url: string;
  items?: Item[];
};

type Items = {
  items: Item[];
};

const flattenNode = (node: Node): string => {
  const sb: string[] = [];

  visit(node, (item) => {
    if (item.type === "text") {
      sb.push(item.value);
    }
  });

  return sb.join("");
};

const getItems = (node: Node | null): Items => {
  switch (node?.type) {
    case "paragraph": {
      const item: Item = { url: "", title: "", items: [] };

      visit(node, (n) => {
        if (n.type === "link") {
          item.url = n.url;
          item.title = flattenNode(node);
        }

        if (n.type === "text") {
          item.title = flattenNode(node);
        }
      });

      return { items: [item] };
    }

    case "list": {
      const items = node.children
        .map((w) => getItems(w))
        .flatMap((w) => w.items);

      return { items };
    }

    case "listItem": {
      const root = getItems(node.children[0]);

      if (node.children.length > 1) {
        node.children.slice(1).map((w) => {
          const item = getItems(w);
          root.items[0].items = item.items;
        });
      }

      return root;
    }

    default:
      return { items: [] };
  }
};

const getToc: Plugin<void[], Root> = () => (node, file) => {
  const table = toc(node, Object.assign({}));
  const items = getItems(table.map);

  file.data = items;
};

const getTableOfContents = (markdown: string): Items => {
  const result = remark().use(getToc).processSync(markdown);
  return result.data as Items;
};

export { getTableOfContents };
export type { Items };
