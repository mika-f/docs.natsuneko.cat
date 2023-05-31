const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-600 pb-16">
      <div className="container mx-auto pt-4 text-sm">
        <div className="mx-4 flex items-center opacity-70 lg:mx-0">
          <p>&copy; {new Date().getFullYear()} Natsuneko.</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
