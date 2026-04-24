interface ElieLogoProps {
  color?: string;
  size?: number;
}

export default function ElieLogo({ color = "#C89B3C", size = 40 }: ElieLogoProps) {
  return (
    <span style={{ display: "inline-flex", alignItems: "baseline", lineHeight: 1, color, letterSpacing: "-0.02em" }}>
      <span style={{ fontFamily: "var(--font-fraunces, serif)", fontSize: size, fontWeight: 500, letterSpacing: "-0.05em" }}>E</span>
      <span style={{
        fontFamily: "var(--font-fraunces, serif)",
        fontSize: size * 1.35,
        fontStyle: "italic",
        fontWeight: 300,
        transform: "translateY(5%)",
        display: "inline-block",
        marginLeft: "-0.05em",
        marginRight: "-0.02em",
      }}>l</span>
      <span style={{ fontFamily: "var(--font-fraunces, serif)", fontSize: size, fontWeight: 500, letterSpacing: "-0.03em" }}>ie</span>
    </span>
  );
}
