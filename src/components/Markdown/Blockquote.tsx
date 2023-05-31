import { merge } from "@/lib/utils";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Blockquote: React.FC<Props> = ({ className, ...props }) => {
  if (className?.includes("admonition")) {
    const type = className.split("admonition-")[1];
    const { children, ...rest } = props;

    switch (type) {
      case "important":
        return (
          <blockquote
            className={merge(
              "my-4 border border-sky-600 bg-sky-900 px-4 py-2",
              className
            )}
            {...rest}
          >
            <p className="mb-1 flex items-center text-xl text-sky-300">
              <i className="fa-regular fa-info-circle" />
              <span className="ml-2 text-lg">Important</span>
            </p>
            <div>{children}</div>
          </blockquote>
        );

      case "note":
        return (
          <blockquote
            className={merge(
              "my-4 border border-indigo-600 bg-indigo-900 px-4 py-2",
              className
            )}
            {...rest}
          >
            <p className="mb-1 flex items-center text-xl text-indigo-300">
              <i className="fa-regular fa-note" />
              <span className="ml-2 text-lg">Note</span>
            </p>
            <div>{children}</div>
          </blockquote>
        );
    }
  }

  return <blockquote className={merge("bg-white", className)} {...props} />;
};

export { Blockquote };
