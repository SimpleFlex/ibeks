export const metadata = { title: "About - IBEKS" };

export default function About() {
  return (
    <div className="wrap page-h" style={{ paddingBottom: 100 }}>
      <p className="eyebrow">05 / About IBEKS</p>
      <h1
        className="display"
        style={{ textTransform: "none", fontSize: "clamp(40px,6.5vw,88px)" }}
      >
        A clear point of view.
        <br />A bias for getting it done.
      </h1>
      <div className="about">
        <div className="portrait">
          <b>+</b>
          <span style={{ color: "var(--text)", textTransform: "uppercase" }}>
            Drop your portrait here
          </span>
          <span>
            Recommended: vertical image, 4:5.
            <br />
            Replace this placeholder with your own photo.
          </span>
        </div>
        <div>
          <h2 style={{ fontSize: 44 }}>The person behind the proof.</h2>
          <p>
            I work across Web3 marketing, growth strategy, community management
            and content. I care about the thinking behind the work as much as
            the execution: understanding the audience, finding the signal,
            building a system and learning from what happens next.
          </p>
          <p>
            My approach is collaborative, curious and grounded in doing the
            work. I want every campaign to have a purpose, every community to
            have a rhythm, and every project to communicate its value clearly.
          </p>
          <p className="eyebrow" style={{ marginTop: 56 }}>
            How I work
          </p>
          <p style={{ color: "var(--text)", fontSize: 22, marginTop: 0 }}>
            Curiosity over assumptions.
            <br />
            Clarity over noise.
            <br />
            Consistency over empty hype.
          </p>
          <p style={{ marginTop: 36 }}>
            <a className="btn" href="mailto:hello@example.com">
              Let’s connect ↗
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
