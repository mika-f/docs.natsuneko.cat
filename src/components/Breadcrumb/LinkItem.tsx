import Link from "next/link";

type Props = {
  label: string;
  href: string;
};

const LinkItem: React.FC<Props> = ({ label, href }) => {
  return (
    <Link href={href} className="text-neutral-500 hover:text-neutral-400">
      {label}
    </Link>
  );
};

export { LinkItem };
export type { Props as BreadcrumbLinkItem };
