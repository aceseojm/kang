"use client";

import { useState } from "react";

const CONTACT_EMAIL = "mindset.seo@gmail.com";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = `[나의 四季] 문의 - ${name}`;
    const body = [
      `문의자: ${name}`,
      `이메일: ${email}`,
      `연락처: ${phone}`,
      "",
      "문의 내용:",
      message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable; the email is still visible for manual copy
    }
  }

  const inputClass =
    "mt-2 w-full border-b border-[color-mix(in_srgb,var(--color-ink)_20%,transparent)] bg-transparent py-2 text-sm outline-none transition-colors focus:border-[var(--color-summer)] md:text-base";

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
      <label className="block">
        <span className="text-xs tracking-widest text-[var(--color-taupe)]">
          문의자
        </span>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
      </label>

      <label className="block">
        <span className="text-xs tracking-widest text-[var(--color-taupe)]">
          이메일
        </span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </label>

      <label className="block">
        <span className="text-xs tracking-widest text-[var(--color-taupe)]">
          연락처
        </span>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClass}
        />
      </label>

      <label className="block">
        <span className="text-xs tracking-widest text-[var(--color-taupe)]">
          문의 내용
        </span>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass}
        />
      </label>

      <button
        type="submit"
        className="mt-2 self-start border border-[var(--color-summer)] px-6 py-3 text-sm tracking-widest text-[var(--color-summer)] transition-colors hover:bg-[var(--color-summer)] hover:text-[var(--color-ivory-end)]"
      >
        문의 보내기
      </button>

      <p className="text-xs leading-relaxed text-[var(--color-taupe)]">
        메일 앱이 열리지 않는다면 아래 이메일로 직접 보내주세요.
        <br />
        <span className="text-[var(--color-ink)]">{CONTACT_EMAIL}</span>{" "}
        <button
          type="button"
          onClick={copyEmail}
          className="-m-2 p-2 tracking-widest text-[var(--color-summer)] transition-colors hover:text-[var(--color-ink)]"
        >
          {copied ? "복사됨" : "이메일 복사"}
        </button>
      </p>
    </form>
  );
}
