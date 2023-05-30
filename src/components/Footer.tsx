const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-600 px-8 pb-16">
      <div className="pt-4 text-sm">
        <div className="flex items-center opacity-70">
          <p>&copy; {new Date().getFullYear()} Natsuneko.</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
