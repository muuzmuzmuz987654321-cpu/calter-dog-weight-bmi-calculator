import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "CALTER Dog Weight BMI Calculator & Canine Body Condition Tool";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0d5c52",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #137164 2%, transparent 0%), radial-gradient(circle at 75px 75px, #137164 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          padding: "70px 80px",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4V20M4 12H20"
                stroke="#0d5c52"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "36px", fontWeight: "900", letterSpacing: "0.08em" }}>
              CALTER
            </span>
            <span style={{ fontSize: "16px", color: "#a7f3d0", letterSpacing: "0.12em" }}>
              CANINE HEALTH TOOLS
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "900px" }}>
          <span
            style={{
              fontSize: "20px",
              color: "#34d399",
              fontWeight: "600",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Evidence-Based Assessment
          </span>
          <h1
            style={{
              fontSize: "58px",
              fontWeight: "800",
              lineHeight: 1.15,
              margin: 0,
              color: "#ffffff",
            }}
          >
            Dog Weight BMI Calculator
          </h1>
          <p
            style={{
              fontSize: "26px",
              lineHeight: 1.4,
              color: "#e2e8f0",
              margin: 0,
            }}
          >
            WSAVA 9-point body condition scoring, recognized breed reference benchmarks, and target ideal weight estimation.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid rgba(255,255,255,0.15)",
            paddingTop: "30px",
          }}
        >
          <div style={{ display: "flex", gap: "36px" }}>
            <span style={{ fontSize: "20px", color: "#a7f3d0" }}>[WSAVA 9-Point Scale]</span>
            <span style={{ fontSize: "20px", color: "#a7f3d0" }}>[60+ Breed Standards]</span>
            <span style={{ fontSize: "20px", color: "#a7f3d0" }}>[Metric & Imperial]</span>
          </div>
          <span style={{ fontSize: "18px", color: "#94a3b8" }}>calter.org</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
