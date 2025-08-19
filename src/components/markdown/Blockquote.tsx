type Props = {
  children: React.ReactNode;
};

export const Blockquote = ({ children }: Props) => {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
};
