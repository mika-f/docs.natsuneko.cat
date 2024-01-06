import { Admonition } from "@natsuneko-laboratory/ui/miscellaneous/admonition";
import { Blockquote as BQ } from "@natsuneko-laboratory/ui/typography/blockquote";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Blockquote: React.FC<Props> = ({ className, ...props }) => {
  if (className?.includes("admonition")) {
    const type = className.split("admonition-")[1];
    const { children, ...rest } = props;

    return (
      <Admonition type={type as any} {...rest}>
        {children}
      </Admonition>
    );
  }

  return <BQ {...props} />;
};

export { Blockquote };
