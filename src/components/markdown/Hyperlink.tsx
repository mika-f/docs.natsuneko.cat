import { JSX } from "react";

type Props = JSX.IntrinsicElements["a"];

export const Hyperlink = ({ children, href, ...props }: Props) => {
  const isExternal = href?.startsWith("https");
  return (
    <a
      {...props}
      href={href}
      target={isExternal ? "_blank" : "_self"}
      className="text-blue-500 hover:underline"
    >
      {children}
    </a>
  );
};
