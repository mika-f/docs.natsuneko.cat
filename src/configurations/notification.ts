type NotificationBanner = {
  content?: Record<string, string>;
  href?: string;
};

const BANNER: NotificationBanner = {
  content: {
    "en-us": "",
    "ja-jp": "",
  },
};

export { BANNER };
export type { NotificationBanner };
