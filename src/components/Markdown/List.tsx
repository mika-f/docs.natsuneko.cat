import { merge } from "@/lib/utils";

type Props = {
  className?: string;
};

const UnorderedList: React.FC<Props> = ({ className, ...props }) => (
  <ul
    className={merge(
      "group my-6 ml-2 list-inside list-disc group-[.my-6]:my-2",
      className
    )}
    {...props}
  />
);

const OrderedList: React.FC<Props> = ({ className, ...props }) => (
  <ol
    className={merge(
      "group my-6 ml-2 list-inside list-decimal group-[.my-6]:my-2",
      className
    )}
    {...props}
  />
);

const ListItem: React.FC<Props> = ({ className, ...props }) => (
  <li className={merge("mt-2", className)} {...props} />
);

export { UnorderedList, OrderedList, ListItem };
