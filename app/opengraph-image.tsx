import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { ogBackgroundColor, shareBlurb, siteName } from "@/lib/site";

export const alt = siteName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const pfp = await readFile(join(process.cwd(), "public/pfp.jpg"));

  return new ImageResponse(
    <div
      style={{
        background: ogBackgroundColor,
        color: "#000",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "flex-end",
        padding: "40px 48px 0 0",
        fontFamily: "monospace",
        gap: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          width: 440,
          height: 590,
          overflow: "hidden",
          alignItems: "flex-end",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <img
          src={`data:image/jpeg;base64,${pfp.toString("base64")}`}
          alt=""
          width={590}
          height={590}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
          alignSelf: "stretch",
          marginLeft: 32,
          paddingBottom: 48,
        }}
      >
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700 }}>
          {siteName}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            marginTop: 16,
            color: "#333",
          }}
        >
          {shareBlurb[0]}
        </div>
      </div>
    </div>,
    { ...size },
  );
}
