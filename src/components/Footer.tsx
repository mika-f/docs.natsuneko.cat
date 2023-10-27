import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-600 pb-16">
      <div className="container mx-auto pt-4 text-sm">
        <div className="mx-4 flex items-center lg:mx-0">
          <div className="flex flex-col gap-y-4">
            <div className="text-base">Powered by</div>
            <a className="block" target="_blank" href="https://natsuneko.com">
              <Image
                src="/natsuneko-laboratory.png"
                width={1217 / 6}
                height={358 / 6}
                alt="logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
