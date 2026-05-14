import Link from "next/link";
import { company } from "../../data/company";
import { copy, Locale, localizedPath } from "../../data/i18n";
import { PageHero, SiteShell } from "./site";
import { ContactForm } from "./contact-form";

export function HomePage({ locale }: { locale: Locale }) {
  const text = copy[locale];

  return (
    <SiteShell locale={locale} path={localizedPath(locale, "/")}>
      <main className="min-h-screen bg-[#dbeafe] text-slate-950">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.2),transparent_34%),linear-gradient(300deg,rgba(255,255,255,0.8),transparent_44%)]" />
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(14,165,233,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.18)_1px,transparent_1px)] [background-size:56px_56px]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.08fr_0.92fr] md:items-center lg:py-28">
            <div>
              <h1 className="max-w-5xl text-4xl font-black leading-tight text-slate-950 md:text-7xl">
                {text.home.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                {text.company.description}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  className="rounded-sm bg-sky-700 px-8 py-4 text-center font-black text-white transition hover:bg-sky-600"
                >
                  {text.home.primaryCta}
                </a>
                <Link
                  href={localizedPath(locale, "/services")}
                  className="rounded-sm border border-sky-200 bg-white/70 px-8 py-4 text-center font-bold text-slate-800 transition hover:bg-white hover:text-sky-800"
                >
                  {text.home.secondaryCta}
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <div
                aria-label={text.home.heroGallery[0].title}
                className="min-h-80 border border-sky-100 bg-cover bg-center shadow-2xl shadow-sky-950/10"
                role="img"
                style={{ backgroundImage: `url(${text.home.heroGallery[0].image})` }}
              />
              <div className="grid grid-cols-3 gap-4">
                {text.home.heroGallery.slice(1).map((item) => (
                  <div
                    aria-label={item.title}
                    className="min-h-40 border border-sky-100 bg-cover bg-center shadow-lg shadow-sky-950/10"
                    key={item.title}
                    role="img"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black uppercase tracking-widest text-sky-600">
              {text.home.galleryLabel}
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              {text.home.galleryTitle}
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {text.home.galleryItems.map((item) => (
                <article
                  className="overflow-hidden rounded-sm border border-sky-100 bg-[#f8fbff] shadow-sm"
                  key={item.title}
                >
                  <div
                    aria-label={item.title}
                    className="h-64 bg-cover bg-center"
                    role="img"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#eaf4ff] px-6 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black uppercase tracking-widest text-sky-300">
              {text.home.exploreLabel}
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              {text.home.exploreTitle}
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {text.home.highlights.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-sm border border-sky-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

export function AboutPageContent({ locale }: { locale: Locale }) {
  const text = copy[locale];

  return (
    <SiteShell locale={locale} path={localizedPath(locale, "/about")}>
      <main className="min-h-screen bg-[#dbeafe] text-slate-950">
        <PageHero
          label={text.about.label}
          title={text.about.title}
          description={text.about.description}
        />

        <section className="bg-[#eaf4ff] px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black md:text-5xl">
                {text.about.sectionTitle}
              </h2>
            </div>
            <div className="space-y-5 rounded-sm border border-sky-100 bg-white p-8 text-lg leading-8 text-slate-700 shadow-sm">
              <p>{text.company.description}</p>
              <p>{text.about.secondParagraph}</p>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

export function ServicesPageContent({ locale }: { locale: Locale }) {
  const text = copy[locale];

  return (
    <SiteShell locale={locale} path={localizedPath(locale, "/services")}>
      <main className="min-h-screen bg-[#dbeafe] text-slate-950">
        <PageHero
          label={text.services.label}
          title={text.services.title}
          description={text.services.description}
        />

        <section className="bg-white px-6 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl space-y-16">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-sm font-black uppercase tracking-widest text-sky-500">
                  {text.services.introLabel}
                </p>
                <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                  {text.services.introTitle}
                </h2>
                <p className="max-w-3xl leading-8 text-slate-600">
                  {text.services.description}
                </p>
              </div>

              <div className="grid gap-5">
                <div className="rounded-3xl border border-slate-200 bg-sky-50 p-8 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
                    {text.services.cardHighlightLabel1}
                  </p>
                  <h3 className="mt-4 text-2xl font-black text-slate-950">
                    {text.services.cardHighlightTitle1}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {text.services.cardHighlightText1}
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
                    {text.services.cardHighlightLabel2}
                  </p>
                  <h3 className="mt-4 text-2xl font-black text-slate-950">
                    {text.services.cardHighlightTitle2}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {text.services.cardHighlightText2}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-slate-950 md:text-5xl">
                What we deliver
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {text.services.items.map((service) => (
                  <article
                    key={service.title}
                    className="group rounded-[2rem] border border-slate-200 bg-[#f8fbff] p-8 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:bg-white"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-700 text-white shadow-lg shadow-sky-950/10">
                      <span className="text-xl font-black">✓</span>
                    </div>
                    <h3 className="mt-6 text-xl font-black text-slate-950">
                      {service.title}
                    </h3>
                    <p className="mt-4 leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

export function IndustriesPageContent({ locale }: { locale: Locale }) {
  const text = copy[locale];

  return (
    <SiteShell locale={locale} path={localizedPath(locale, "/industries")}>
      <main className="min-h-screen bg-[#dbeafe] text-slate-950">
        <PageHero
          label={text.industries.label}
          title={text.industries.title}
          description={text.industries.description}
        />

        <section className="bg-[#eaf4ff] px-6 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl space-y-14">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-sky-500">
                  {text.industries.coverageLabel}
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                  {text.industries.coverageTitle}
                </h2>
                <p className="mt-6 max-w-3xl leading-8 text-slate-600">
                  {text.industries.description}
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {text.industries.items.slice(0, 4).map((industry) => (
                  <div
                    key={industry}
                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-sky-300"
                  >
                    <p className="text-lg font-black text-slate-950">{industry}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {text.industries.items.slice(4).map((industry) => (
                <div
                  key={industry}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-sky-300"
                >
                  <p className="text-lg font-black text-slate-950">{industry}</p>
                </div>
              ))}
            </div>

            <div className="rounded-4xl border border-sky-100 bg-white p-10 shadow-sm">
              <p className="text-lg leading-8 text-slate-700">
                {text.industries.summaryText}
              </p>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

export function ContactPageContent({ locale }: { locale: Locale }) {
  const text = copy[locale];

  return (
    <SiteShell locale={locale} path={localizedPath(locale, "/contact")}>
      <main className="min-h-screen bg-[#dbeafe] text-slate-950">
        <PageHero
          label={text.contact.label}
          title={text.contact.title}
          description={text.contact.description}
        />

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-black md:text-5xl">
                  {text.contact.sectionTitle}
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-700">
                  {text.contact.sectionText}
                </p>
              </div>

              <div className="space-y-6">
                <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-black text-slate-950 mb-4">Our Location</h3>
                  <p className="text-slate-700 mb-6">{text.company.address}</p>
                  <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-200">
                    <iframe
                      src="https://maps.google.com/maps?q=Office%20No.%20F-38%2C%20Al%20Karama%2C%20Dubai%2C%20United%20Arab%20Emirates&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Office Location Map"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm text={text.contact} />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
