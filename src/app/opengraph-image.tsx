import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Easy To Europe — Study Abroad Consultancy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #1E3A6E 60%, #1E6FD9 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          padding: "60px",
        }}
      >
        {/* Logo area */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #D4AF37, #F5CE5A)",
              borderRadius: "16px",
              width: "64px",
              height: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: "bold",
              color: "#0A1628",
            }}
          >
            E
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#FFFFFF", fontSize: "32px", fontWeight: "bold", letterSpacing: "-0.5px" }}>
              Easy to Europe
            </span>
            <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px", letterSpacing: "2px", textTransform: "uppercase" }}>
              Education Consultancy
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            color: "#FFFFFF",
            fontSize: "52px",
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          Your Trusted Study Abroad Partner
        </div>

        {/* Sub */}
        <div
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "22px",
            textAlign: "center",
            maxWidth: "700px",
            marginBottom: "40px",
            lineHeight: 1.5,
          }}
        >
          Bangladesh&apos;s #1 education consultancy for Europe, UK, Canada & Australia
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "40px" }}>
          {[["1,000+", "Students Placed"], ["98%", "Visa Success"], ["12+", "Countries"]].map(([num, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ color: "#D4AF37", fontSize: "28px", fontWeight: "bold" }}>{num}</span>
              <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", marginTop: "4px" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* URL badge */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "60px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "8px",
            padding: "8px 18px",
            color: "rgba(255,255,255,0.5)",
            fontSize: "14px",
          }}
        >
          easytoeurope.com
        </div>
      </div>
    ),
    { ...size }
  );
}
