const Footer: React.FC = () => {
  return (
    <footer className="px-4 pb-16">
      <div className="container mx-auto border-t border-neutral-600 pt-4 text-sm ">
        <div className="flex items-center opacity-70">
          <p>&copy; {new Date().getFullYear()} Natsuneko.</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
