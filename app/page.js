"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const year = new Date().getFullYear();

  const convertTags = () => {
    const tags = input
      .split(",")
      .map((tag) => {
        // Trim whitespace and remove trailing symbols
        const cleanedTag = tag.trim().replace(/[\s\W_]+$/, "");
        return `#${cleanedTag.replace(/\s+/g, "")}`;
      })
      .join(", ");
    setOutput(tags);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    toast.success("Copied to clipboard!");
  };

  const resetFields = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Hashtag Converter</h1>
      </header>
      <div className="input-section">
        <label htmlFor="tags">Enter tags separated by commas:</label>
        <textarea
          value={input}
          id="tags"
          onChange={(e) => setInput(e.target.value)}
          rows="5"
        />
      </div>
      <div className="button-section">
        <button onClick={convertTags}>Convert</button>
        <button onClick={copyToClipboard}>Copy</button>
        <button onClick={resetFields}>Reset</button>
      </div>
      <div className="output-section">
        <label htmlFor="output">Output:</label>
        <textarea id="output" value={output} readOnly rows="5" />
        <ToastContainer />
      </div>
      <footer className="footer">
        © {year}{" "}
        <a href="https://www.youtube.com/@ProgrammingforCareer" target="_blank">
          Programming for Career{" "}
        </a>
        <span> - All rights reserved.</span>
      </footer>
    </div>
  );
}
