import { merge } from "@/lib/utils";

type Props = {
  className?: string;
};

const Code: React.FC<Props> = ({ className, ...props }) => (
  <code
    className={merge(
      "relative rounded border border-slate-700 bg-slate-900 bg-opacity-25 p-1 font-mono text-sm text-slate-300 group-[.code]:grid group-[.code]:min-w-full group-[.code]:break-words group-[.code]:rounded-none group-[.code]:border-0 group-[.code]:bg-transparent group-[.code]:px-4",
      className
    )}
    {...props}
  />
);

const Preformatted: React.FC<Props> = ({ className, ...props }) => (
  <pre
    className={merge(
      "code group mb-4 mt-6 overflow-x-auto rounded-lg bg-slate-900 py-4",
      className
    )}
    {...props}
  />
);

export { Code, Preformatted };
