import Link from "next/link";
import { useState } from "react";
import { company } from "../../data/company";
import { alternateLocalePath, copy, Locale, localizedPath } from "../../data/i18n";

export function SiteShell({
  children,
  locale,
  path,
}: {
  children: React.ReactNode;
  locale: Locale;
  path: string;
}) {
  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
      <Header locale={locale} path={path} />
      {children}
      <Footer locale={locale} />
    </div>
  );
}

export function Header({ locale, path }: { locale: Locale; path: string }) {
  "use client";
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

export function Footer({ locale }: { locale: Locale }) {
  const text = copy[locale];

  return (
    <footer className="border-t border-white/10 bg-[#0f1b2d] px-6 py-10 text-center text-sm text-slate-400">
      <div className="mx-auto max-w-7xl">
        <p className="font-semibold text-white">{text.company.name}</p>
        <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

export function PageHero({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-sky-100 bg-[#eaf4ff] px-6 py-20">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.16),transparent_36%),linear-gradient(300deg,rgba(45,212,191,0.1),transparent_40%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="relative">
        <p className="text-sm font-black uppercase tracking-widest text-sky-300">
          {label}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          {description}
        </p>
        </div>
      </div>
    </section>
  );
}

export function ContactCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="rounded-sm border border-sky-100 bg-white p-5 shadow-sm transition hover:border-sky-300 hover:shadow-md">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 font-semibold text-slate-950">{value}</p>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}
