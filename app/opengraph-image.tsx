import { ImageResponse } from "next/og";

export const alt = "Victory Okoye - Full-Stack Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#090d16",
        padding: "56px 64px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Background glow effects */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-100px",
          width: "550px",
          height: "550px",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.28) 0%, rgba(9, 13, 22, 0) 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-140px",
          left: "-80px",
          width: "550px",
          height: "550px",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.20) 0%, rgba(9, 13, 22, 0) 70%)",
        }}
      />

      {/* Decorative inner frame */}
      <div
        style={{
          position: "absolute",
          inset: "20px",
          borderRadius: "24px",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          pointerEvents: "none",
        }}
      />

      {/* Top Header: Logo + Identity & Availability Badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              backgroundColor: "rgba(37, 99, 235, 0.15)",
              border: "1px solid rgba(59, 130, 246, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px",
            }}
          >
            <svg width="28" height="16" viewBox="0 0 155.58 84.85" fill="none">
              <path
                d="M142,125.11,110.63,93.7a9.38,9.38,0,0,0-13.26,0L66,125.11a15,15,0,0,1-10.61,4.39H31.22A5,5,0,0,1,27.68,121L104,44.65,180.32,121a5,5,0,0,1-3.54,8.54H152.64A15,15,0,0,1,142,125.11Z"
                transform="translate(-26.21 -44.65)"
                fill="#3b82f6"
              />
            </svg>
          </div>
          <span
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#f8fafc",
              letterSpacing: "-0.02em",
            }}
          >
            Victory Okoye
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 18px",
            borderRadius: "9999px",
            backgroundColor: "rgba(37, 99, 235, 0.12)",
            border: "1px solid rgba(59, 130, 246, 0.3)",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "9999px",
              backgroundColor: "#3b82f6",
              boxShadow: "0 0 10px #3b82f6",
            }}
          />
          <span
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#93c5fd",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Full-Stack Developer
          </span>
        </div>
      </div>

      {/* Center Main Content: Heading & Description */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          maxWidth: "920px",
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: "52px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
          }}
        >
          Building modern web applications that help businesses grow.
        </div>
        <div
          style={{
            fontSize: "22px",
            color: "#94a3b8",
            lineHeight: 1.45,
            fontWeight: 400,
            maxWidth: "840px",
          }}
        >
          Fast, responsive, and polished web development with Next.js, React,
          TypeScript, and modern scalable architectures.
        </div>
      </div>

      {/* Bottom Footer: Tech Stack Chips & Portfolio Domain */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 16px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  border: "1px solid rgba(59, 130, 246, 0.25)",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#cbd5e1",
                }}
              >
                {tech}
              </div>
            ),
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 18px",
            borderRadius: "9999px",
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            color: "#94a3b8",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          victoryokoye.vercel.app
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
