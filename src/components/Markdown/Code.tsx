import { merge } from "@/lib/utils";

type Props = {
  className?: string;

  [key: `data-${string}`]: string;
};

const Code: React.FC<Props> = ({ className, ...props }) => (
  <code
    className={merge(
      "relative mx-0.5 whitespace-break-spaces break-words rounded bg-neutral-400 bg-opacity-25 p-1 font-mono text-sm text-neutral-700 dark:bg-neutral-500 dark:text-neutral-300",
      props["data-theme"] &&
        "mx-0 grid whitespace-pre break-words bg-transparent",
      className
    )}
    {...props}
  />
);

const Preformatted: React.FC<Props> = ({ className, ...props }) => (
  <pre
    className={merge(
      "code group mb-4 mt-6 overflow-x-auto bg-neutral-900 py-4",
      className
    )}
    {...props}
  />
);

export { Code, Preformatted };
