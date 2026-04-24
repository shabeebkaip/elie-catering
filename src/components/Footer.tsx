import ElieLogo from "./ElieLogo";

const cols = [
  { h: "Atelier", l: ["Riyadh, Saudi Arabia", "Sun–Thu · 10—18"] },
  { h: "Contact", l: ["+966 54 435 6564", "hello@eliecatering.com", "www.eliecatering.com"] },
  { h: "Services", l: ["Weddings", "Corporate", "Private dinners", "Galas"] },
  { h: "Newsletter", l: ["A dispatch from the kitchen,", "four times a year.", "→ Subscribe"] },
];

export default function Footer() {
  return (
    <footer style={{ background: "#3B2A5A", color: "#FAF6EF", padding: "100px 80px 40px", position: "relative" }}>
      <div style={{ textAlign: "center", marginBottom: 80 }}>
        <ElieLogo size={70} color="#C89B3C" />
        <div style={{ marginTop: 8, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "rgba(250,246,239,0.6)" }}>
          Catering &nbsp;&amp;&nbsp; Event Planning
        </div>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 48,
        paddingTop: 56, borderTop: "1px solid rgba(230,225,245,0.15)",
      }}>
        {cols.map((col) => (
          <div key={col.h}>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#C89B3C", marginBottom: 18, fontWeight: 500 }}>
              {col.h}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "rgba(250,246,239,0.8)" }}>
              {col.l.map((x) => <span key={x}>{x}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 60, paddingTop: 24,
        borderTop: "1px solid rgba(230,225,245,0.15)",
        display: "flex", justifyContent: "space-between",
        fontSize: 11, color: "rgba(250,246,239,0.5)", letterSpacing: 1,
      }}>
        <span>© 2026 Elie Catering &amp; Event Planning</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
}
