import { merge } from "@/lib/utils";
import { Admonition } from "./Admonition";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Blockquote: React.FC<Props> = ({ className, ...props }) => {
  if (className?.includes("admonition")) {
    const type = className.split("admonition-")[1];
    const { children, ...rest } = props;

    return (
      <Admonition type={type} {...rest}>
        {children}
      </Admonition>
    );
  }

  return <blockquote className={merge("bg-white", className)} {...props} />;
};

export { Blockquote };
