type Props = {
  content: string;
};

const Banner = async ({ content }: Props) => {
  return (
    <div className="border-b border-blue-800 bg-blue-950 px-4">
      <div className="container mx-auto flex min-h-[64px] items-center justify-center">
        <p className="p-4">{content}</p>
      </div>
    </div>
  );
};

export { Banner };
