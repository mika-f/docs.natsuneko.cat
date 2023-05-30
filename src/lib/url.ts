import type { UrlObject } from "url";

const EXTERNAL_PROTOCOLS = ["http:", "https:"];

const isAbsoluteUrl = (url: string | UrlObject) => {
  if (typeof url === "string") {
    return EXTERNAL_PROTOCOLS.some((w) => url.startsWith(w));
  }

  return EXTERNAL_PROTOCOLS.some((w) => w === url.protocol);
};

const isExternalUrl = (url: string | UrlObject) => {
  if (isAbsoluteUrl(url)) {
    return true;
  }

  return false;
};

export { isExternalUrl };
