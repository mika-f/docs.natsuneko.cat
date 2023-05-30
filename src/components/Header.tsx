import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 h-16 border-b border-neutral-600">
      <div className="h-full bg-neutral-950 px-4">
        <div className="container mx-auto flex h-full items-center justify-between">
          <a href="/" className="flex  items-center gap-x-4">
            <Image src="/logo.png" alt="logo" width={36} height={36} />
            <span>Natsuneko Docs</span>
          </a>

          <button>
            <i className="fa-sharp fa-solid fa-language text-2xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };
