type Props = {
  children: React.ReactNode;
};

export const Paragraph = ({ children }: Props) => {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6 mb-2 group-[.admonition]:mt-0! group-[.admonition]:first:hidden">
      {children}
    </p>
  );
};
