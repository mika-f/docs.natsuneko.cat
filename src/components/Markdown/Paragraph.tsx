import { merge } from "@/lib/utils";
import { Paragraph as P } from "@natsuneko-laboratory/ui/typography/paragraph";

type Props = {
  className?: string;
};

const Paragraph: React.FC<Props> = ({ className, ...props }) => (
  <P
    className={merge("leading-7 [&:not(:first-child)]:mt-4", className)}
    {...props}
  />
);

export { Paragraph };
