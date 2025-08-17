import { JSX } from "react";

type Props = JSX.IntrinsicElements["a"];

export const Hyperlink = ({ children, ...props }: Props) => {
  return (
    <a {...props} className="text-blue-500 hover:underline">
      {children}
    </a>
  );
};
