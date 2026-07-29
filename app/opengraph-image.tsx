import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { fullName, siteDescription, siteName } from "@/lib/site";

export const alt = siteName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const pfp = await readFile(join(process.cwd(), "public/pfp.jpg"));

  return new ImageResponse(
    (
      <div
        style={{
          background: "#fff",
          color: "#000",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: 80,
          fontFamily: "monospace",
          gap: 48,
        }}
      >
        <img
          src={`data:image/jpeg;base64,${pfp.toString("base64")}`}
          alt=""
          width={240}
          height={240}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <div style={{ display: "flex", fontSize: 56, fontWeight: 700 }}>
            {fullName} ({siteName})
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              marginTop: 16,
              color: "#333",
            }}
          >
            {siteDescription}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
