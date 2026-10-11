import Link from "next/link";

export const metadata = { title: "Creamly — PRIMO" };

const approach = [
  ["01 / Clarify", "Make the product value easy to repeat and understand."],
  ["02 / Communicate", "Create consistent content that speaks to real user needs."],
  ["03 / Connect", "Give the community clear ways to engage and share feedback."],
];

export default function Creamly() {
  return (
    <div className="wrap page-h">
      <p className="eyebrow">Work / Case file 001</p>
      <h1 className="display" style={{ textTransform: "none", fontSize: "clamp(56px,10vw,128px)" }}>Creamly</h1>
      <p className="lead">Making wallet intelligence easier to understand, trust and talk about.</p>
      <div className="hero-art"><b>creamly</b><span style={{ fontSize: 13, textTransform: "uppercase" }}>Wallet intelligence / Solana + EVM</span></div>
      <section style={{ padding: "70px 0" }}>
        <div className="facts">
          <div><p className="eyebrow">The brief</p><p>Help a utility-first Web3 product communicate its value with clarity and build consistent awareness.</p></div>
          <div><p className="eyebrow">My contribution</p><ul><li>Marketing strategy</li><li>Content direction</li><li>Community communication</li><li>Product storytelling</li></ul></div>
        </div>
      </section>
      <section style={{ padding: "70px 0" }}>
        <p className="eyebrow">The approach</p>
        <div className="steps">{approach.map(([t, d]) => <div key={t}><b>{t}</b>{d}</div>)}</div>
      </section>
      <section style={{ padding: "70px 0", borderBottom: 0 }}>
        <p className="eyebrow">Outcomes & evidence</p>
        <p className="lead" style={{ marginTop: 0 }}>Add campaign screenshots, post examples, engagement data and verified outcomes here. No unverified metrics.</p>
        <div className="two"><div className="slot">+ Add campaign screenshot</div><div className="slot">+ Add post / community example</div></div>
        <p style={{ marginTop: 48 }}><Link href="/#work" className="link" style={{ marginLeft: 0, color: "var(--accent)" }}>← Back to all work</Link></p>
      </section>
    </div>
  );
}
