import { Heading } from "../Typography";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Heading1: React.FC<Props> = ({ className, ...props }) => (
  <Heading level={1} className={className} {...props} />
);

const Heading2: React.FC<Props> = ({ className, ...props }) => (
  <Heading level={2} className={className} {...props} />
);

const Heading3: React.FC<Props> = ({ className, ...props }) => (
  <Heading level={3} className={className} {...props} />
);

const Heading4: React.FC<Props> = ({ className, ...props }) => (
  <Heading level={4} className={className} {...props} />
);

const Heading5: React.FC<Props> = ({ className, ...props }) => (
  <Heading level={5} className={className} {...props} />
);

const Heading6: React.FC<Props> = ({ className, ...props }) => (
  <Heading level={6} className={className} {...props} />
);

export { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 };
