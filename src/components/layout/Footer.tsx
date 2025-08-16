export const Footer = () => {
  return (
    <footer className="border-border border-t pb-16">
      <div className="container mx-auto pt-4 text-sm">
        <div className="mx-4 flex flex-col gap-x-4 gap-y-6 md:flex-row md:items-center lg:mx-0">
          <div className="flex flex-col gap-y-4">
            <div>Powered by</div>
            <a className="block" target="_blank" href="https://natsuneko.com">
              <img
                src="/natsuneko-laboratory-dark.png"
                alt="logo"
                width={1216 / 6}
                height={358 / 6}
                className="inline dark:hidden"
              />
              <img
                src="/natsuneko-laboratory-light.png"
                alt="logo"
                width={1216 / 6}
                height={358 / 6}
                className="hidden dark:inline"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
