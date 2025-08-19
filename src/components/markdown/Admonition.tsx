import { cn } from "@/lib/utils";

type Props = {
  type:
    | "bug"
    | "danger"
    | "important"
    | "info"
    | "note"
    | "success"
    | "tip"
    | "warning";
  children: React.ReactNode;
  className?: string;
};

export const Admonition = ({ type, children, className }: Props) => {
  return (
    <blockquote
      className={cn(
        "group my-4 border px-4 py-2",
        className,
        type === "bug" &&
          "border-rose-800 bg-rose-200 dark:border-rose-600 dark:bg-rose-900",
        type === "danger" &&
          "border-red-800 bg-red-200 dark:border-red-600 dark:bg-red-900",
        type === "important" &&
          "border-sky-800 bg-sky-200 dark:border-sky-600 dark:bg-sky-900",
        type === "info" &&
          "border-cyan-800 bg-cyan-200 dark:border-cyan-600 dark:bg-cyan-900",
        type === "note" &&
          "border-indigo-800 bg-indigo-200 dark:border-indigo-600 dark:bg-indigo-900",
        type === "success" &&
          "border-green-800 bg-green-200 dark:border-green-600 dark:bg-green-900",
        type === "tip" &&
          "border-emerald-800 bg-emerald-200 dark:border-emerald-600 dark:bg-emerald-900",
        type === "warning" &&
          "border-orange-800 bg-orange-200 dark:border-orange-600 dark:bg-orange-900"
      )}
    >
      <p
        className={cn(
          "mb-1 flex items-center dark:text-xl",
          type === "bug" && "text-rose-900 dark:text-rose-300",
          type === "danger" && "text-red-900 dark:text-red-300",
          type === "important" && "text-sky-900 dark:text-sky-300",
          type === "info" && "text-cyan-900 dark:text-cyan-300",
          type === "note" && "text-indigo-900 dark:text-indigo-300",
          type === "success" && "text-green-900 dark:text-green-300",
          type === "tip" && "text-emerald-900 dark:text-emerald-300",
          type === "warning" && "text-orange-900 dark:text-orange-300"
        )}
      >
        <i
          className={cn(
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
      <div className="text-neutral-800 dark:text-neutral-200 group admonition">
        {children}
      </div>
    </blockquote>
  );
};
