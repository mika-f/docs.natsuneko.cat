"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LANGUAGES } from "@/configurations/i18n";

type Props = {
  lang: string;
};

export const SwitchLanguage = ({ lang }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const switchLanguage = useCallback(
    (lang: string) => {
      const [, , ...paths] = pathname.split("/");
      router.push(`/${lang}/${paths.join("/")}`);
    },
    [pathname, router]
  );

  return (
    <Sheet>
      <SheetTrigger className="lang:mx-0 mx-4">
        <i className="fa-sharp fa-solid fa-language text-2xl" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Switch Language</SheetTitle>
          <div>
            <ul className="flex flex-col px-4 text-base lg:text-lg">
              {LANGUAGES.map((w) => {
                const isCurrentLang = w.code === lang;

                return (
                  <li
                    key={w.code}
                    className={`py-2 ${isCurrentLang ? "font-bold" : ""}`}
                  >
                    <button
                      disabled={isCurrentLang}
                      type="button"
                      onClick={() => switchLanguage(w.code)}
                    >
                      {w.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
