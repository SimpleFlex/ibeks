import Link from "next/link";

const services = [
  [
    "Community building",
    "Building an ecosystem around a project based on its vision and mission, so the community becomes known, trusted and active.",
  ],
  [
    "Discord setup & management",
    "Setting up Discord communities and managing day-to-day engagement in community channels.",
  ],
  [
    "Moderation",
    "Moderating community channels and keeping discussions positive and engaged.",
  ],
  [
    "Marketing & campaigns",
    "Structuring and organizing marketing campaigns, and creating marketing content for X.",
  ],
  [
    "User growth & onboarding",
    "Growth strategies and user onboarding that help projects attract and keep an active audience.",
  ],
  [
    "Promotion & communication",
    "Clear communication, product updates and promotion across different platforms.",
  ],
];
const projects = [
  {
    name: "Creamly",
    role: "Marketer",
    href: "/work/creamly",
    desc: "A multi-chain crypto portfolio tracker for Solana and EVM. No wallet connect, no login.",
    tags: "X content / Product explainers / Onboarding",
  },
  {
    name: "SoliSecure",
    role: "Growth Strategist / Marketer",
    desc: "A privacy-first encrypted messaging app. No phone number, name or email needed.",
    tags: "Growth / Messaging / X content",
  },
  {
    name: "Meme Warzone",
    role: "Discord Manager",
    desc: "A multichain memecoin launchpad with battles, squads, rewards and leagues.",
    tags: "Discord / Community / Onboarding",
  },
  {
    name: "BoringBud AI",
    role: "Community Builder",
    desc: "An all-in-one AI content platform for creators, marketers and businesses.",
    tags: "Promotion / Content / Onboarding",
  },
  {
    name: "BAM",
    role: "Community Builder",
    desc: "A social prediction trading app on Solana, powered by Polymarket and Kalshi.",
    tags: "Community / Awareness / Onboarding",
  },
  {
    name: "SenPepe",
    role: "Community Builder",
    desc: "A community-driven Solana meme coin built around live streams.",
    tags: "Community / Moderation / Raids",
  },
  {
    name: "Normie Nation",
    role: "Moderator",
    desc: "A community-first Solana lifestyle brand and token with real products.",
    tags: "Moderation / Content / Updates",
  },
];
const steps = [
  [
    "Find the signal",
    "Understand the project, audience, market and the story worth telling.",
  ],
  [
    "Build the system",
    "Turn the strategy into clear content, community and campaign workflows.",
  ],
  [
    "Show the work",
    "Execute consistently, learn from response, and document what changes.",
  ],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">Independent Web3 growth partner / 001</p>
          <h1 className="display">
            Make noise.
            <br />
            Build signal.
          </h1>
          <div className="split" style={{ marginTop: 40 }}>
            <p className="lead" style={{ marginTop: 0 }}>
              I help ambitious Web3 teams turn good ideas into visible projects,
              engaged communities and momentum that lasts beyond launch day.
            </p>
            <p
              style={{
                textAlign: "right",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              Strategy first.
              <br />
              Execution always.
              <br />
              <span className="muted" style={{ fontSize: 12, fontWeight: 400 }}>
                Web3 / Culture / Growth
              </span>
            </p>
          </div>
          <p style={{ marginTop: 48 }}>
            <Link href="#work" className="btn">
              Explore the work ↗
            </Link>
            <Link href="/about" className="link">
              Let’s talk ↗
            </Link>
          </p>
          <div className="hero-foot">
            <span>Scroll to explore ↓</span>
            <span>Independent by design. Built for the onchain era.</span>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <div>
            <p className="eyebrow">The point of view</p>
            <h2>
              Attention is rented.
              <br />
              Trust is earned.
            </h2>
          </div>
          <p className="lead" style={{ marginTop: 0 }}>
            The work is bigger than posting more. It is about finding the story,
            creating the right signal, and giving a community a reason to care.
            I connect strategy, culture and consistent execution.
          </p>
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <p className="eyebrow">02 / Selected proof of work</p>
          <h2>Work that speaks.</h2>
          <p className="muted" style={{ marginTop: 14 }}>
            Projects I’ve helped grow, from community to content.
          </p>
          <div className="cases">
            {projects.map((p, i) => {
              const art = ["ring", "bars", "tiles"][i % 3];
              const inner = (
                <>
                  <div className="art">
                    {art === "ring" && <div className="ring">{p.name[0]}</div>}
                    {art === "bars" && (
                      <div className="bars">
                        {[125, 108, 91, 125, 108, 91, 125].map((h, k) => (
                          <i key={k} style={{ height: h }} />
                        ))}
                      </div>
                    )}
                    {art === "tiles" && (
                      <>
                        <div className="tiles">
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="tiles-t">{p.name}</div>
                      </>
                    )}
                  </div>
                  <div className="body">
                    <p className="eyebrow" style={{ marginBottom: 0 }}>
                      {String(i + 1).padStart(2, "0")} / {p.role}
                    </p>
                    <h3>{p.name}</h3>
                    <p className="muted">{p.desc}</p>
                    <p className="tags">{p.tags}</p>
                  </div>
                </>
              );
              return p.href ? (
                <Link key={p.name} href={p.href} className="card">
                  {inner}
                </Link>
              ) : (
                <div key={p.name} className="card">
                  {inner}
                </div>
              );
            })}
          </div>
          <p className="muted" style={{ marginTop: 28, fontSize: 14 }}>
            Selected case files are presented as documented work. Metrics and
            outcomes will be added only where verified.
          </p>
        </div>
      </section>

      <section id="expertise">
        <div className="wrap">
          <div className="split" style={{ marginBottom: 56 }}>
            <div>
              <p className="eyebrow">03 / What I do</p>
              <h2>
                The work behind
                <br />
                the work.
              </h2>
            </div>
            <p className="lead" style={{ marginTop: 0 }}>
              Community, marketing and growth for Web3 projects and digital
              products.
            </p>
          </div>
          {services.map(([t, d], i) => (
            <div className="row" key={t}>
              <span className="n">0{i + 1}</span>
              <h3>{t}</h3>
              <p className="muted">{d}</p>
              <span className="arr">↗</span>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="wrap">
          <p className="eyebrow">04 / The method</p>
          <h2>
            Less noise. More
            <br />
            meaningful movement.
          </h2>
          <div className="steps">
            {steps.map(([t, d], i) => (
              <div key={t}>
                <b>
                  0{i + 1} / {t}
                </b>
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderBottom: 0 }}>
        <div className="wrap">
          <div className="split">
            <div>
              <p className="eyebrow">05 / The person behind the work</p>
              <h2>
                Curious by nature.
                <br />
                Intentional by practice.
              </h2>
            </div>
            <p className="lead" style={{ marginTop: 0 }}>
              I work at the intersection of Web3, internet culture and
              community. My approach combines strategic thinking with hands-on
              execution, so the work has a reason, a rhythm and a clear point of
              view.
            </p>
          </div>
          <div className="contact">
            <div>
              <p style={{ fontSize: 13, marginBottom: 12 }}>
                Have a project worth building?
              </p>
              <h2>Let’s make it matter.</h2>
              <p style={{ marginTop: 10 }}>
                For founders, teams and people building with intent.
              </p>
            </div>
            <Link href="/about" className="btn">
              Start a conversation ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
