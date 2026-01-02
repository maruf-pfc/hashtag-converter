"use client";

import { useEffect, useState } from "react";
import { Copy, RotateCcw, Hash, Check, Moon, Sun } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const convertTags = () => {
    if (!input.trim()) {
      toast.info("Please enter some tags");
      return;
    }

    const tags = input
      .split(",")
      .map(t => `#${t.trim().replace(/\s+/g, "")}`)
      .filter(Boolean)
      .join(", ");

    setOutput(tags);
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    toast.success("Copied");
    setTimeout(() => setCopied(false), 1500);
  };

  const resetAll = () => {
    setInput("");
    setOutput("");
    setCopied(false);
  };

  if (!mounted) return null;

  return (
    <main className="app-container">
      {/* NAV */}
      <nav className="nav-bar">
        <div className="logo">
          <span className="logo-icon">
            <Hash size={16} />
          </span>
          Hashtag Converter
        </div>

        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      {/* CARD */}
      <section className="premium-card wide">
        <header className="hero">
          <h1>Convert Tags into Platform-Ready Hashtags</h1>
          <p className="tagline">
            Instagram & TikTok optimized • Free • No tracking
          </p>
        </header>

        <div className="converter-grid">
          {/* INPUT */}
          <div className="panel">
            <label>Input Tags</label>
            <textarea
              className="premium-textarea"
              placeholder="nature, travel, web design"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <span className="meta">{input.length} characters</span>
          </div>

          {/* ACTIONS */}
          <div className="center-actions">
            <button onClick={convertTags} className="btn-primary">
              Convert →
            </button>
            <button onClick={resetAll} className="btn-secondary">
              <RotateCcw size={14} /> Reset
            </button>
          </div>

          {/* OUTPUT */}
          <div className="panel">
            <label>Output Hashtags</label>
            <textarea
              readOnly
              value={output}
              placeholder="#hashtags will appear here"
              className="premium-textarea"
            />
            {output && (
              <button onClick={copyOutput} className="copy-btn">
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Copied" : "Copy"}
              </button>
            )}
          </div>
        </div>
      </section>

      <footer className="premium-footer">
        Built by <strong>Md. Maruf Sarker</strong> • Privacy-friendly
      </footer>

      <ToastContainer position="bottom-right" theme={theme} />
    </main>
  );
}
