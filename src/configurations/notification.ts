type NotificationBanner = {
  content?: Record<string, string>;
  href?: string;
};

const BANNER: NotificationBanner = {
  content: {
    "en-us":
      "We are temporarily suspending new use of the content listed in the document distributed on BOOTH.",
    "ja-jp":
      "一時的に、ドキュメントに記載されているコンテンツのうち、 BOOTH にて配布しているものについては新規利用を停止しています。",
  },
};

export { BANNER };
export type { NotificationBanner };
