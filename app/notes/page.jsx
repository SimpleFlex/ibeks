export const metadata = { title: "Field notes — PRIMO" };

const notes = [
  ["Growth", "Why visibility before launch matters", "A project needs a clear story and repeatable signals before it asks the internet to care."],
  ["Community", "Beyond raids: building community habits", "Designing repeatable rituals that make participation meaningful."],
  ["Content", "The difference between posting and positioning", "Content works harder when every piece reinforces a recognisable point of view."],
  ["Launch", "The first 30 days of project communication", "A practical framework for consistent messaging, feedback and iteration."],
];

export default function Notes() {
  return (
    <div className="wrap page-h" style={{ paddingBottom: 80 }}>
      <p className="eyebrow">04 / Field notes</p>
      <h1 className="display" style={{ textTransform: "none", fontSize: "clamp(48px,8vw,104px)" }}>Thinking in public.</h1>
      <p className="lead">Working ideas on Web3 growth, community, culture and the mechanics of attention.</p>
      <div style={{ marginTop: 64 }}>
        {notes.map(([c, t, d], i) => (
          <article className="note" key={t}>
            <span className="eyebrow">0{i + 1}</span>
            <span className="muted" style={{ fontSize: 12, textTransform: "uppercase" }}>{c}</span>
            <div><h3>{t}</h3><p className="muted">{d}</p></div>
            <span className="arr" style={{ color: "var(--accent)" }}>↗</span>
          </article>
        ))}
      </div>
    </div>
  );
}
