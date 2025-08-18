import { useMDXComponent } from "next-contentlayer2/hooks";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { AdmonitionOrDiv } from "./AdmonitionOrDiv";
import { Heading1, Heading2, Heading3, Heading4 } from "./Headings";
import { InlineCode } from "./InlineCode";
import { ListItem, OrderedList, UnorderedList } from "./List";
import { Paragraph } from "./Paragraph";
import { Preformat } from "./Preformat";
import { Hyperlink } from "./Hyperlink";
import { Blockquote } from "./Blockquote";

type Props = {
  markdown: string;
};

export const Markdown = ({ markdown }: Props) => {
  const Component = useMDXComponent(markdown);

  return (
    <Component
      components={{
        h1: Heading1,
        h2: Heading2,
        h3: Heading3,
        h4: Heading4,
        p: Paragraph,
        a: Hyperlink,
        ul: UnorderedList,
        ol: OrderedList,
        li: ListItem,
        pre: Preformat,
        code: InlineCode,
        table: ({ children, ...rest }) => (
          <Table className="my-4" {...rest}>
            {children}
          </Table>
        ),
        thead: TableHeader,
        tbody: TableBody,
        tr: TableRow,
        th: TableHead,
        td: TableCell,
        div: AdmonitionOrDiv,
        blockquote: Blockquote,
      }}
    />
  );
};
