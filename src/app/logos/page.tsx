import Image from "next/image";

const logos = [
  { src: "/logos/ilsuffitde-premierlogo.png", label: "Logo 1" },
  { src: "/logos/ilsuffitde-deuxiemelogo.png", label: "Logo 2" },
  { src: "/logos/ilsuffitde-troisiemelogo.png", label: "Logo 3" },
  { src: "/logos/ilsuffitde-quatrieme.png", label: "Logo 4" },
];

export default function LogosPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f8f6",
        padding: "48px 24px",
        fontFamily: "var(--font-geist-sans, sans-serif)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: 600,
          marginBottom: "8px",
          color: "#1a1a1a",
        }}
      >
        Comparaison des logos
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#555",
          marginBottom: "48px",
          fontSize: "0.95rem",
        }}
      >
        Voici les quatre versions du logo.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "32px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {logos.map(({ src, label }) => (
          <div
            key={src}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              padding: "32px 24px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              border: "1px solid #e8e8e5",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1 / 1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={src}
                alt={label}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 80vw, 280px"
              />
            </div>
            <span
              style={{
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "#444",
                letterSpacing: "0.02em",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
