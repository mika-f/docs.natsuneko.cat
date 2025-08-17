type Props = {
  children: React.ReactNode;
};

export const UnorderedList = ({ children }: Props) => {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
};

export const OrderedList = ({ children }: Props) => {
  return <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>;
};

export const ListItem = ({ children }: Props) => {
  return <li className="mt-2">{children}</li>;
};
