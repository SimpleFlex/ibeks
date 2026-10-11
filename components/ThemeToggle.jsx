"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [t, setT] = useState("dark");
  useEffect(() => setT(document.documentElement.dataset.theme || "dark"), []);
  const set = (v) => {
    setT(v);
    document.documentElement.dataset.theme = v;
    try { localStorage.setItem("theme", v); } catch (e) {}
  };
  return (
    <div className="toggle" role="group" aria-label="Appearance">
      <button aria-label="Dark mode" aria-pressed={t === "dark"} onClick={() => set("dark")}>☾</button>
      <button aria-label="Light mode" aria-pressed={t === "light"} onClick={() => set("light")}>☼</button>
    </div>
  );
}
