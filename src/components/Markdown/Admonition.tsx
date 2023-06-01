import { merge } from "@/lib/utils";

type Props = {
  type: string;

  children?: React.ReactNode;
  className?: string;
};

const Admonition: React.FC<Props> = ({
  type,
  className,
  children,
  ...props
}) => {
  return (
    <blockquote
      className={merge(
        "my-4 border px-4 py-2",
        className,
        type === "bug" && "border-rose-600 bg-rose-900",
        type === "danger" && "border-red-600 bg-red-900",
        type === "important" && "border-sky-600 bg-sky-900",
        type === "info" && "border-cyan-600 bg-cyan-900",
        type === "note" && "border-indigo-600 bg-indigo-900",
        type === "success" && "border-green-600 bg-green-900",
        type === "tip" && "border-emerald-600 bg-emerald-900",
        type === "warning" && "border-orange-600 bg-orange-900"
      )}
      {...props}
    >
      <p
        className={merge(
          "mb-1 flex items-center text-xl",
          type === "bug" && "text-rose-300",
          type === "danger" && "text-red-300",
          type === "danger" && "text-red-300",
          type === "important" && "text-sky-300",
          type === "info" && "text-cyan-300",
          type === "note" && "text-indigo-300",
          type === "success" && "text-green-300",
          type === "tip" && "text-emerald-300",
          type === "warning" && "text-orange-300"
        )}
      >
        <i
          className={merge(
            "fa-regular",
            type === "bug" && "fa-bug",
            type === "danger" && "fa-bolt",
            type === "important" && "fa-circle-exclamation",
            type === "info" && "fa-info-circle",
            type === "note" && "fa-note",
            type === "success" && "fa-check-circle",
            type === "tip" && "fa-fire",
            type === "warning" && "fa-triangle-exclamation"
          )}
        />
        <span className="ml-2 text-lg capitalize">{type}</span>
      </p>
      <div>{children}</div>
    </blockquote>
  );
};

export { Admonition };
