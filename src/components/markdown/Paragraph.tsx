type Props = {
  children: React.ReactNode;
};

export const Paragraph = ({ children }: Props) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};
