import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const InlineCode = ({ children, className }: Props) => {
  return (
    <code
      className={cn(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono! text-sm font-semibold",
        "group-[.code]:bg-transparent group-[.code]:relative group-[.code]:rounded-none group-[.code]:p-0 group-[.code]:text-base group-[.code]:font-normal",
        className
      )}
    >
      {children}
    </code>
  );
};
