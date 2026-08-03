import { paddedPfpIcon } from "@/lib/padded-pfp-icon";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return paddedPfpIcon(size.width);
}
