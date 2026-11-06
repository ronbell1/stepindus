import { ImageResponse } from "next/og";

export const alt = "StepIndus — Launch your India GCC in 90 days";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172f 0%, #080c1c 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 20,
              height: 4,
              borderRadius: 2,
              background: "#e95229",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: 2, color: "#e95229", display: "flex" }}>
            STEPINDUS
          </div>
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.15,
            maxWidth: 920,
            display: "flex",
          }}
        >
          Launch your India GCC in 90 days.
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "rgba(255,255,255,0.65)",
            maxWidth: 820,
            display: "flex",
          }}
        >
          Execution-led Global Capability Center setup — Captive, or GCC-as-a-Service.
        </div>
      </div>
    ),
    { ...size }
  );
}
