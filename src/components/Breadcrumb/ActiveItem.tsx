type Props = {
  label: string;
};

const ActiveItem: React.FC<Props> = ({ label }) => {
  return <span>{label}</span>;
};

export { ActiveItem };
export type { Props as BreadcrumbActiveItem };
