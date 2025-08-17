import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Lead = ({ children, className }: Props) => {
  return (
    <p className={cn("text-muted-foreground text-xl", className)}>{children}</p>
  );
};
