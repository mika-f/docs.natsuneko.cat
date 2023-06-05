import { Heading } from "@/components/Typography";

const NotFound = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Heading level={1}>404 Not Found</Heading>
      <p>The requested page is not found on server.</p>
    </div>
  );
};

export default NotFound;
