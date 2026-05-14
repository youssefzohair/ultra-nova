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

  // Check if current path matches nav item
  const isActive = (href: string) => path === href || (path === "/" && href === "/");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1b2d]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
        <Link href={localizedPath(locale, "/")} className="flex items-center gap-2 md:gap-3">
          <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-sky-700 text-base md:text-lg font-black text-white shadow-lg shadow-sky-950/30">
            UN
          </div>
          <div className="text-center">
            <p className="text-xs md:text-sm font-black tracking-wide text-white">
              {company.name}
            </p>
            <p className="text-xs md:text-sm font-semibold text-slate-300">
              {company.arabicName}
            </p>
          </div>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden rounded-lg border border-white/20 p-2 text-white transition-all duration-200 hover:border-sky-400 hover:bg-sky-700/50 active:scale-95"
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
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 rounded-lg border px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                isActive(item.href)
                  ? "border-sky-400 bg-sky-700 text-white shadow-lg"
                  : "border-white/10 text-slate-300 hover:border-sky-400 hover:bg-sky-700/50 hover:text-white active:scale-95"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="absolute left-0 right-0 top-full z-40 border-b border-white/10 bg-[#0f1b2d]/98 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-lg border px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                    isActive(item.href)
                      ? "border-sky-400 bg-sky-700 text-white shadow-lg"
                      : "border-white/10 text-slate-300 hover:border-sky-400 hover:bg-sky-700/50 hover:text-white active:scale-95"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}

        {/* Action buttons */}
        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href={alternateLocalePath(locale, path)}
            className="hidden sm:flex rounded-lg border border-white/20 px-3 py-2 text-xs md:text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-slate-950 active:scale-95"
          >
            {text.nav.switchLanguage}
          </Link>
          <a
            href={`https://wa.me/${company.whatsapp}`}
            className="flex items-center gap-2 rounded-lg bg-sky-700 px-3 py-2 text-xs md:text-sm font-black text-white transition-all duration-200 hover:bg-sky-600 active:scale-95 shadow-lg"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span className="hidden sm:inline">{text.nav.whatsapp}</span>
          </a>
        </div>
      </div>
    </header>
  );
}