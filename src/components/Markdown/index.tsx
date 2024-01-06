import { Table, TableBody, TableData, TableHead, TableHeader, TableRow } from "@natsuneko-laboratory/ui/data/table";
import {
  ListItem,
  OrderedList,
  UnorderedList,
} from "@natsuneko-laboratory/ui/miscellaneous/list";

import { useMDXComponent } from "next-contentlayer/hooks";
import { Blockquote } from "./Blockquote";
import { Code, Preformatted } from "./Code";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "./Headings";
import { Hyperlink } from "./Hyperlink";
import { Paragraph } from "./Paragraph";

type Props = {
  markdown: string;
};

const components: any = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  p: Paragraph,
  a: Hyperlink,
  blockquote: Blockquote,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  table: Table,
  tbody: TableBody,
  thead: TableHead,
  th: TableHeader,
  tr: TableRow,
  td: TableData,
  pre: Preformatted,
  code: Code,
};

const Markdown: React.FC<Props> = ({ markdown }) => {
  const Component = useMDXComponent(markdown);

  return <Component components={components} />;
};

export { Markdown };
