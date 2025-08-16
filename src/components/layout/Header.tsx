import Image from "next/image";
import Link from "next/link";
import { SwitchLanguage } from "../features/i18n/switch-language";

type Props = {
  lang: string;
};

export const Header = ({ lang }: Props) => {
  return (
    <header className="border-border bg-background sticky top-0 z-10 h-16 border-b">
      <div className="container mx-auto flex h-full items-center justify-between">
        <div className="mx-4 flex h-full items-center justify-center gap-x-2 lg:mx-0">
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-x-4">
              <Image
                src="/logo.png"
                alt="Logo"
                className="h-8 w-8 aspect-square"
                width={150}
                height={150}
              />
              <span className="hidden text-lg md:block">
                Natsuneko Laboratory | Docs
              </span>
            </Link>
          </div>
        </div>
        <SwitchLanguage lang={lang} />
      </div>
    </header>
  );
};
