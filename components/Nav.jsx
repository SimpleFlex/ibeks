import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <Link href="/" className="brand">
          IBEKS®
        </Link>
        <ul>
          <li>
            <Link href="/#work">Work</Link>
          </li>
          <li>
            <Link href="/#expertise">Expertise</Link>
          </li>
          <li>
            <Link href="/notes">Field notes</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <div className="right">
          <span>
            <i className="dot" />
            Available for select projects
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
