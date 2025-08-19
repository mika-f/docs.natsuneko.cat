type Props = {
  children: React.ReactNode;
};

export const Preformat = ({ children }: Props) => {
  return <pre className="group code overflow-x-auto pb-4">{children}</pre>;
};
