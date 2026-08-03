import { paddedPfpIcon } from "@/lib/padded-pfp-icon";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default async function Icon() {
  return paddedPfpIcon(size.width);
}
