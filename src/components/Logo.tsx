import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 38 }) => {
  return (
    <div className={`calter-logo-wrapper ${className}`} style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/* Rounded Hexagonal Shield representing Protection & Medical Science */}
        <rect
          x="3"
          y="3"
          width="42"
          height="42"
          rx="12"
          fill="url(#calterGradient)"
          stroke="#093f37"
          strokeWidth="1.5"
        />
        {/* Stylized Veterinary Cross with Gentle Organic Curves */}
        <path
          d="M24 11V37M11 24H37"
          stroke="#34d399"
          strokeWidth="4"
          strokeLinecap="round"
          strokeOpacity="0.35"
        />
        {/* Subtle Canine Silhouette & Vitality Pulse */}
        <path
          d="M15 26.5C17.5 24 20 20 22 20C24 20 25.5 28 27.5 28C29.5 28 32 23 34 23"
          stroke="#ffffff"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Precision Balance Dot */}
        <circle cx="34" cy="23" r="2.5" fill="#a7f3d0" />
        <circle cx="15" cy="26.5" r="2" fill="#a7f3d0" />

        <defs>
          <linearGradient id="calterGradient" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0a463d" />
            <stop offset="0.6" stopColor="#0d5c52" />
            <stop offset="1" stopColor="#147466" />
          </linearGradient>
        </defs>
      </svg>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontSize: `${size * 0.58}px`,
            fontWeight: 800,
            letterSpacing: "0.08em",
            color: "#0f172a",
            textTransform: "uppercase",
          }}
        >
          CALTER
        </span>
        <span
          style={{
            fontSize: `${Math.max(9, size * 0.24)}px`,
            fontWeight: 600,
            letterSpacing: "0.14em",
            color: "#0d5c52",
            textTransform: "uppercase",
            marginTop: "2px",
          }}
        >
          Canine Health
        </span>
      </div>
    </div>
  );
};
