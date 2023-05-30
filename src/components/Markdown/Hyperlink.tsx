import { isExternalUrl } from "@/lib/url";
import { merge } from "@/lib/utils";
import Link from "next/link";
import { useRouteContext } from "../contexts/RouteContext";

type Props = {
  className?: string;
  href: string;
};

const Hyperlink: React.FC<Props> = ({ className, ...props }) => {
  const route = useRouteContext();
  const { href, ...rest } = props;

  return isExternalUrl(href) ? (
    <a
      className={merge("text-sky-300 underline", className)}
      {...props}
      target="_blank"
      rel="noopener noreferrer"
    />
  ) : (
    <Link
      className={merge("text-sky-300 underline", className)}
      href={route.build({ relative: href })}
      {...rest}
    />
  );
};

export { Hyperlink };
