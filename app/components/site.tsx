import Link from "next/link";
import { company } from "../../data/company";
import { alternateLocalePath, copy, Locale, localizedPath } from "../../data/i18n";
import { Header } from "./header";

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
