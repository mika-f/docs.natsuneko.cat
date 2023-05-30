import { merge } from "@/lib/utils";

type Props = {
  className?: string;
};

const Paragraph: React.FC<Props> = ({ className, ...props }) => (
  <p
    className={merge("leading-7 [&:not(:first-child)]:mt-4", className)}
    {...props}
  />
);

export { Paragraph };
