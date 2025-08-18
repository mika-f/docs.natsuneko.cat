import { Admonition } from "./Admonition";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const AdmonitionOrDiv = ({ className, ...rest }: Props) => {
  if (className?.includes("admonition")) {
    const type = className.split("admonition-")[1];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <Admonition type={type as any} className={className} {...rest} />;
  }

  return <div className={className} {...rest} />;
};
