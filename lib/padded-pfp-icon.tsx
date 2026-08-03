import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { pfpBackgroundColor } from "@/lib/site";

const PORTRAIT_SCALE = 0.65;

export async function paddedPfpIcon(size: number) {
  const pfp = await readFile(join(process.cwd(), "public/pfp.jpg"));
  const portraitSize = Math.round(size * PORTRAIT_SCALE);

  return new ImageResponse(
    <div
      style={{
        background: pfpBackgroundColor,
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* ImageResponse/Satori requires a native img, not next/image */}
      {/* eslint-disable-next-line @next/next/no-img-element -- next/image is unsupported in ImageResponse */}
      <img
        src={`data:image/jpeg;base64,${pfp.toString("base64")}`}
        alt=""
        width={portraitSize}
        height={portraitSize}
      />
    </div>,
    { width: size, height: size },
  );
}
