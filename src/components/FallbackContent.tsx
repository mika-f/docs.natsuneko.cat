type Props = {
  originalLang: string;
};

const FallbackContent: React.FC<Props> = ({ originalLang }) => {
  return (
    <div className="border-b border-purple-800 bg-purple-950 px-4">
      <div className="container mx-auto flex h-16 items-center justify-center">
        <p>
          <span className="mr-2">
            <i className="fa-regular fa-circle-exclamation" />
          </span>
          <span>
            This topic is not available in your language. Therefore, the
            original version ({originalLang}) is displayed.
          </span>
        </p>
      </div>
    </div>
  );
};

export { FallbackContent };
