import { merge } from "@/lib/utils";
import Link from "next/link";

type Props = {
  href: string;

  primary?: boolean;
  children?: React.ReactNode;
  className?: string;
};

const LinkButton: React.FC<Props> = ({
  href,
  primary,
  className,
  children,
}) => {
  return (
    <Link
      className={merge(
        "border border-neutral-600 px-4 py-2 hover:bg-neutral-700",
        primary &&
          "border-sky-700 bg-sky-800 hover:border-sky-500 hover:bg-sky-600",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

export { LinkButton };
