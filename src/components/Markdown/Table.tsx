import { merge } from "@/lib/utils";

type Props = {
  className?: string;
};

const Table: React.FC<Props> = ({ className, ...props }) => (
  <div className="my-6 w-full border-collapse overflow-y-auto border-neutral-500">
    <table className={merge("max-w-full", className)} {...props} />
  </div>
);

const TableHead: React.FC<Props> = ({ className, ...props }) => (
  <thead className={merge("bg-neutral-600", className)} {...props} />
);

const TableHeader: React.FC<Props> = ({ className, ...props }) => (
  <th
    className={merge(
      "border border-neutral-500 px-4 py-2 text-center font-semibold",
      className
    )}
    {...props}
  />
);

const TableRow: React.FC<Props> = ({ className, ...props }) => (
  <tr
    className={merge(
      "m-0 border-t border-neutral-500 p-0 even:bg-neutral-700",
      className
    )}
    {...props}
  />
);

const TableData: React.FC<Props> = ({ className, ...props }) => (
  <td
    className={merge(
      "border border-neutral-600 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
      className
    )}
    {...props}
  />
);

export { Table, TableHead, TableHeader, TableRow, TableData };
