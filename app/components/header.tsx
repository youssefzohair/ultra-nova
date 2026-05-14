"use client";

import Link from "next/link";
import { useState } from "react";
import { company } from "../../data/company";
import { alternateLocalePath, copy, Locale, localizedPath } from "../../data/i18n";

export function Header({ locale, path }: { locale: Locale; path: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const text = copy[locale];
  const navItems = [
    { href: localizedPath(locale, "/"), label: text.nav.home },
    { href: localizedPath(locale, "/services"), label: text.nav.services },
    { href: localizedPath(locale, "/industries"), label: text.nav.industries },
    { href: localizedPath(locale, "/about"), label: text.nav.about },
    { href: localizedPath(locale, "/contact"), label: text.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1b2d]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-6">
        <Link href={localizedPath(locale, "/")} className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-sky-700 text-lg font-black text-white shadow-lg shadow-sky-950/30">
            UN
          </div>
          <div className="text-center">
            <p className="text-sm font-black tracking-wide text-white md:text-base">
              {company.name}
            </p>
            <p className="text-sm font-semibold text-slate-300 md:text-base">
              {company.arabicName}
            </p>
          </div>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden rounded-sm border border-white/10 p-2 text-white hover:border-sky-400 hover:bg-sky-700"
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-sm border border-white/10 px-4 py-2 transition hover:border-sky-400 hover:bg-sky-700 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="absolute left-0 right-0 top-full z-40 border-b border-white/10 bg-[#0f1b2d]/95 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-2 px-5 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-sm border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-sky-400 hover:bg-sky-700 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}

        <div className="flex items-center gap-3">
          <Link
            href={alternateLocalePath(locale, path)}
            className="rounded-sm border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-slate-950"
          >
            {text.nav.switchLanguage}
          </Link>
          <a
            href={`https://wa.me/${company.whatsapp}`}
            className="rounded-sm bg-sky-700 px-5 py-2 text-sm font-black text-white transition hover:bg-sky-600"
          >
            {text.nav.whatsapp}
          </a>
        </div>
      </div>
    </header>
  );
}