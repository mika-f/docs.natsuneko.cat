"use client";

import { useLockedBody } from "@natsuneko-laboratory/ui/hooks/useLockedBody";
import { Portal } from "@natsuneko-laboratory/ui/miscellaneous/portal";

import { LANGUAGES } from "@/configurations/internationalization";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const LanguageSwitch: React.FC = () => {
  const [state, setState] = useState(false);
  const [locked, setLocked] = useLockedBody(false, "body");
  const pathname = usePathname();
  const params = useParams<{
    lang: string;
    product: string;
    version: string;
    rest: string | string[];
  }>()!;
  const router = useRouter();
  const { lang } = params;

  useEffect(() => {
    setState(false);
    setLocked(false);
  }, [pathname, setLocked]);

  const toggleState = () => {
    setState(!state);
    setLocked(!locked);
  };

  const changeLanguage = useCallback(
    (code: string) => {
      const rest = Array.isArray(params.rest) ? params.rest : [params.rest];
      const url = [code, params.product, params.version, ...rest].join("/");
      router.push(`/${url}`);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname, router, setLocked]
  );

  return (
    <>
      <button onClick={toggleState}>
        <i className="fa-sharp fa-solid fa-language text-2xl" />
      </button>
      {state && (
        <Portal>
          <div className="fixed inset-0 top-16 z-20 bg-neutral-800 px-4">
            <div className="z-10 overflow-y-auto">
              <div className="lg:container lg:mx-auto lg:py-6">
                <div className="flex h-12 items-center border-b border-neutral-600 px-4 text-sm lg:mb-2 lg:h-auto lg:pb-4 lg:text-2xl lg:font-bold">
                  Switch Language
                </div>
                <ul className="flex flex-col px-4 text-base lg:text-lg">
                  {LANGUAGES.map((w) => {
                    const isCurrentLang = lang === w.code;

                    return (
                      <li className="py-2" key={w.code}>
                        <button
                          disabled={isCurrentLang}
                          onClick={() => changeLanguage(w.code)}
                          className="disabled:opacity-50"
                        >
                          {w.name} {isCurrentLang && "(Current)"}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export { LanguageSwitch };
