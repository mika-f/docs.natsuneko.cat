import { defineCollection } from "@natsuneko-laboratory/makit/metadata";

export default defineCollection({
  id: "checkout-lfs",
  title: "checkout-lfs",
  description: "Self-Hosted な Git LFS サーバーを使っている場合の LFS checkout を提供する GitHub Actions",
  path: "/checkout-lfs",
});
