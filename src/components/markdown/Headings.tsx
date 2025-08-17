type Props = {
  children: React.ReactNode;
};

export const Heading1 = ({ children }: Props) => {
  return (
    <h1 className="scroll-m-20 text-4xl pb-2 font-extrabold tracking-tight text-balance">
      {children}
    </h1>
  );
};

export const Heading2 = ({ children }: Props) => {
  return (
    <h2 className="scroll-m-20 border-b pb-4 mt-8 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
};

export const Heading3 = ({ children }: Props) => {
  return (
    <h3 className="scroll-m-20 text-2xl pb-4 mt-6 font-semibold tracking-tight first:mt-0">
      {children}
    </h3>
  );
};

export const Heading4 = ({ children }: Props) => {
  return (
    <h4 className="scroll-m-20 text-xl pb-4 mt-4 font-semibold tracking-tight">
      {children}
    </h4>
  );
};
