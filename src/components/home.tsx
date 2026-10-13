import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, PlayMark } from "@/components/icons";
import { clients, email, instagramUrl, principles, reels, services, steps } from "@/lib/site";

const shell = "mx-auto w-full max-w-[1512px] px-6 md:px-8 lg:px-16";

function PrimaryCta({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contacto"
      className={`inline-flex h-14 items-center gap-2 whitespace-nowrap rounded-lg bg-ink px-5 text-[17px] font-semibold text-surface transition-colors duration-300 hover:bg-black active:bg-support ${className}`}
    >
      Hablemos de tu proyecto
      <ArrowUpRight className="size-[18px]" />
    </a>
  );
}

export function HomePage() {
  return (
    <main id="inicio">
      <section className="relative pb-4 pt-6 md:pt-8 lg:pb-2 lg:pt-6" aria-labelledby="hero-title">
        <div className="mx-auto w-full max-w-[1512px] px-6 md:px-8 lg:pl-16 lg:pr-[clamp(280px,34vw,420px)]">
          <p className="eyebrow text-muted">Presenze — Comunicación digital</p>
          <div className="mt-5 lg:mt-4 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-x-10">
            <div className="min-w-0">
              <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_249px] md:gap-6 lg:grid-cols-1 lg:gap-0">
                <div className="min-w-0">
                  <h1
                    id="hero-title"
                    className="font-medium text-[48px] uppercase leading-[1.02] tracking-[-2px] text-ink md:text-[60px] md:leading-[61px] md:tracking-normal lg:text-[clamp(2.75rem,4.2vw,4rem)] lg:leading-[1.02] lg:tracking-[-0.04em]"
                  >
                    No somos
                    <br />
                    una agencia
                    <br />
                    enorme.
                  </h1>
                  <p className="mt-4 font-medium text-[28px] leading-[35px] tracking-[-1px] text-muted md:mt-6 lg:mt-3 lg:text-[clamp(1.35rem,1.8vw,1.75rem)] lg:leading-[1.2]">
                    Y eso es algo muy bueno.
                  </p>
                </div>
                <div className="relative mx-auto hidden aspect-square h-[220px] w-full max-w-[240px] justify-self-end md:mx-0 md:block md:h-[252px] md:w-[249px] md:max-w-none lg:hidden">
                  <Image
                    src="/brand/hero-mark.png"
                    alt=""
                    fill
                    sizes="249px"
                    quality={100}
                    className="object-contain object-right md:object-right"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-6 md:grid md:grid-cols-2 md:items-start md:gap-6 lg:mt-6 lg:flex lg:flex-col lg:gap-0">
                <div>
                  <p className="font-medium text-[17px] leading-[26px] text-ink md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">
                    Somos un equipo de comunicación digital que trabaja cerca de cada marca.
                  </p>
                  <p className="mt-4 font-medium text-base leading-6 text-muted lg:mt-2">
                    Branding · Diseño web · Social media
                  </p>
                </div>
                <div className="flex flex-col items-start gap-8 md:items-end lg:mt-4 lg:items-start lg:gap-0">
                  <PrimaryCta className="w-[280px] justify-center lg:w-auto lg:justify-start" />
                  <a
                    href="#diferencial"
                    className="hidden h-11 items-center text-[13px] font-normal uppercase text-muted md:inline-flex lg:mt-3"
                  >
                    <span className="md:hidden lg:inline">Cerca de tu marca ↓</span>
                    <span className="hidden md:inline lg:hidden">Conoce nuestro trabajo ↓</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute right-0 top-1/2 hidden w-[clamp(280px,32vw,400px)] -translate-y-1/2 lg:block">
          <div className="relative aspect-square w-full">
            <Image
              src="/brand/hero-mark.png"
              alt=""
              fill
              sizes="400px"
              quality={100}
              className="object-contain object-right"
            />
          </div>
        </div>
      </section>

      <section id="diferencial" className="scroll-mt-28 pb-12 pt-10 md:pt-24 lg:pb-16 lg:pt-32" aria-labelledby="diferencial-title">
        <div className={shell}>
          <div className="h-px w-full bg-support" />
          <div className="mt-8 grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_249px] md:gap-x-6 lg:mt-12 lg:grid-cols-[minmax(0,856px)_400px] lg:gap-x-32">
            <div className="md:col-span-2 lg:col-span-1">
              <p className="eyebrow text-muted">Nuestra manera de estar</p>
              <h2
                id="diferencial-title"
                className="mt-6 font-medium text-[38px] uppercase leading-[41px] tracking-[-1px] text-ink md:text-[48px] md:leading-[52px] md:tracking-normal lg:text-[68px] lg:leading-[73px] lg:tracking-[-3px]"
              >
                <span className="md:hidden lg:inline">Somos pocos. Y nos gusta que sea así.</span>
                <span className="hidden md:inline lg:hidden">
                  Somos pocos. Y nos
                  <br />
                  gusta que sea así.
                </span>
              </h2>
            </div>
            <div className="md:col-start-1 lg:col-start-1">
              <p className="font-medium text-[17px] leading-[26px] text-ink md:hidden">
                Somos un equipo chico que se involucra de verdad. Conocemos tu marca y hablamos con vos, sin intermediarios.
              </p>
              <p className="mt-6 font-medium text-[17px] leading-[26px] text-muted md:hidden">
                Roles claros, criterio compartido y supervisión para cuidar cada resultado.
              </p>
              <p className="hidden font-medium text-[17px] leading-relaxed text-ink md:block md:text-[18px] md:leading-[27px] lg:text-xl lg:leading-[30px]">
                Nos involucramos de verdad. Conocemos a cada cliente, su marca y lo que necesita. Hablás con quienes piensan y hacen tu proyecto, sin intermediarios.
              </p>
              <p className="mt-6 hidden font-medium text-[17px] leading-relaxed text-muted md:block md:text-[18px] md:leading-[27px] lg:text-xl lg:leading-[30px]">
                Cada uno tiene un rol claro. Compartimos criterio, responsabilidad y supervisión para cuidar el resultado de principio a fin.
              </p>
            </div>
            <figure className="w-full md:col-start-2 md:row-start-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:max-w-[400px]">
              <Image
                src="/brand/isotipo.png"
                alt=""
                width={900}
                height={839}
                className="mx-auto h-auto w-[128px] md:w-[224px] lg:w-full"
              />
              <figcaption className="eyebrow mt-6 text-center text-muted">
                Menos distancia. Más presencia.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="py-12 md:pb-8 md:pt-10 lg:py-16" aria-labelledby="clientes-title">
        <div className={shell}>
          <h2 id="clientes-title" className="eyebrow text-muted">
            Confiaron en nosotros
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-x-6 md:gap-y-4 lg:mt-12 lg:grid-cols-5 lg:gap-x-7 lg:gap-y-7">
            {clients.map((client) => (
              <li
                key={client.name}
                className="flex h-28 min-w-0 items-center justify-center overflow-hidden px-2 lg:h-[136px]"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={240}
                  height={120}
                  className="h-auto max-h-[88px] w-full max-w-[144px] object-contain lg:max-w-[180px]"
                />
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-medium leading-[21px] text-muted">
            Marcas con las que construimos vínculos. Cada relación, una historia propia.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-12 lg:py-24" aria-labelledby="instagram-title">
        <div className={shell}>
          <div className="hidden h-px w-full bg-support lg:block" />
          <div className="max-w-3xl md:mt-0 lg:mt-10">
            <p className="eyebrow text-muted">Instagram</p>
            <h2
              id="instagram-title"
              className="mt-4 font-medium text-[28px] leading-[35px] tracking-[-1px] text-ink md:text-[48px] md:leading-[52px] lg:text-[40px] lg:leading-[50px]"
            >
              Conocé nuestro trabajo en Instagram.
            </h2>
            <p className="mt-4 hidden text-[17px] font-medium leading-relaxed text-muted lg:block lg:text-lg lg:leading-[27px]">
              Un espacio editorial para compartir lo que hacemos y cómo lo pensamos.
            </p>
          </div>

          <ul className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-3 md:gap-6 md:overflow-visible [&::-webkit-scrollbar]:hidden">
            {reels.map((reel) => (
              <li key={reel.number} className="w-[278px] shrink-0 snap-start md:w-auto">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-lg transition-colors duration-300 hover:bg-support/25 lg:p-6"
                  aria-label={`${reel.title}. Portada pendiente. Abre el Instagram de PRESENZE.`}
                >
                  <div className="relative grid aspect-[278/494] place-items-center overflow-hidden rounded-lg bg-support md:aspect-[9/16]">
                    <span className="absolute left-3 top-3 rounded bg-ink px-2 py-1 text-[13px] font-bold uppercase tracking-[1.2px] text-surface md:hidden">
                      {reel.title}
                    </span>
                    <span className="eyebrow absolute left-5 top-5 hidden text-ink lg:block">
                      Portada de muestra
                    </span>
                    <span className="display absolute bottom-20 left-5 hidden text-5xl text-ink/80 lg:block">
                      {reel.number}
                    </span>
                    <div className="hidden flex-col items-center gap-4 px-4 text-center md:flex lg:hidden">
                      <span className="eyebrow text-ink">Portada de muestra</span>
                      <PlayMark filled className="size-11" />
                    </div>
                    <PlayMark filled className="size-11 md:hidden" />
                    <PlayMark className="hidden size-16 lg:grid" />
                  </div>
                  <p className="mt-2 text-[17px] font-semibold leading-[21px] text-ink md:hidden">Portada de muestra</p>
                  <div className="mt-4 hidden items-baseline justify-between gap-4 md:flex lg:mt-4">
                    <p className="text-[17px] font-semibold text-ink">{reel.title}</p>
                    <p className="hidden text-[13px] text-muted lg:block">Portada pendiente</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-4 md:mt-8 lg:mt-8 lg:flex-row lg:items-center lg:justify-between lg:border-t lg:border-support lg:pt-6">
            <p className="hidden text-[15px] text-muted lg:block">Ver más contenido en la cuenta oficial.</p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col text-ink"
            >
              <span className="inline-flex items-center gap-2 text-[17px] font-semibold leading-[21px]">
                Ver más en Instagram
                <ArrowUpRight className="size-[18px]" />
              </span>
              <span className="text-[15px] leading-[19px] text-muted lg:hidden">@somos_presenze</span>
            </a>
          </div>
        </div>
      </section>

      <section id="servicios" className="scroll-mt-28 py-16 md:pt-24 lg:py-24" aria-labelledby="servicios-title">
        <div className={shell}>
          <p className="eyebrow text-muted">Servicios</p>
          <h2
            id="servicios-title"
            className="mt-6 font-medium text-[38px] uppercase leading-[41px] tracking-[-1px] text-ink md:text-[48px] md:leading-[52px] md:tracking-normal lg:text-[72px] lg:leading-[78px] lg:tracking-[-3px]"
          >
            <span className="md:hidden">
              Marca, digital
              <br />
              y comunicación.
            </span>
            <span className="hidden md:inline">
              Distintas miradas.
              <br />
              Un mismo criterio.
            </span>
          </h2>
          <ul className="mt-12 border-t border-support lg:mt-16">
            {services.map((service) => (
              <li
                key={service.number}
                className="grid gap-4 border-b border-support py-8 transition-colors duration-300 hover:bg-support/25 md:grid-cols-[249px_minmax(0,1fr)] md:items-start md:gap-x-6 lg:grid-cols-[4rem_minmax(180px,420px)_minmax(0,1fr)_auto] lg:gap-x-10"
              >
                <p className="text-base leading-5 text-muted lg:col-start-1 lg:row-start-1">{service.number}</p>
                <h3 className="font-medium text-[32px] uppercase leading-[40px] tracking-[-1px] text-ink md:text-[28px] md:leading-[35px] md:tracking-normal lg:col-start-2 lg:row-start-1 lg:text-[46px] lg:leading-[58px] lg:tracking-[-1.5px]">
                  {service.name}
                </h3>
                <Image
                  src={service.icon}
                  alt=""
                  width={249}
                  height={234}
                  className="hidden size-11 md:block lg:col-start-4 lg:row-start-1 lg:size-7 lg:justify-self-end"
                />
                <div className="md:col-start-2 md:row-start-1 md:row-span-3 lg:col-start-3 lg:row-span-1">
                  <p className="whitespace-pre-line text-[18px] font-semibold leading-[27px] text-ink md:hidden">
                    {service.mobile}
                  </p>
                  <div className="hidden md:block">
                    <p className="text-[17px] font-semibold leading-snug text-ink md:text-[18px] md:leading-[27px] lg:text-[23px] lg:leading-[34px]">
                      {service.scope}
                    </p>
                    <p className="mt-4 text-base font-medium leading-relaxed text-ink md:text-[18px] md:leading-[27px] lg:text-[19px] lg:leading-[28px]">
                      {service.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="proceso" className="scroll-mt-28 py-16 lg:py-24" aria-labelledby="proceso-title">
        <div className={shell}>
          <p className="eyebrow text-muted">Cómo trabajamos</p>
          <div className="mt-6 lg:grid lg:grid-cols-[minmax(0,960px)_360px] lg:items-end lg:justify-between lg:gap-8">
            <h2
              id="proceso-title"
              className="font-medium text-[38px] leading-[41px] tracking-[-1px] text-ink md:text-[48px] md:leading-[52px] md:tracking-normal lg:max-w-[960px] lg:text-[64px] lg:leading-[69px] lg:tracking-[-3px]"
            >
              <span className="uppercase md:hidden">
                Primero entendemos.
                <br />
                Después hacemos.
              </span>
              <span className="hidden md:inline">
                El trabajo empieza antes de que algo aparezca en el feed o en la web.
              </span>
            </h2>
            <p className="mt-6 font-medium text-[17px] leading-[26px] text-muted md:ml-auto md:w-[74%] md:max-w-none md:text-left md:text-[18px] md:leading-[27px] lg:ml-0 lg:mt-0 lg:w-auto lg:text-xl">
              <span className="md:hidden">El trabajo empieza antes de aparecer en tu feed o en tu web.</span>
              <span className="hidden md:inline">
                No empezamos por una pieza. Empezamos por una conversación y una buena pregunta.
              </span>
            </p>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
            {steps.map((step) => (
              <li
                key={step.number}
                className="border-t border-support pt-6 transition-colors duration-300 hover:border-ink"
              >
                <p className="font-normal text-[40px] leading-[50px] text-muted lg:text-[56px] lg:leading-[70px]">{step.number}</p>
                <h3 className="mt-6 text-2xl font-semibold uppercase leading-[30px] text-ink lg:text-[22px] lg:leading-7">
                  {step.title}
                </h3>
                <p className="mt-6 text-[17px] font-medium leading-[26px] text-ink md:leading-[27px]">
                  <span className="md:hidden">{step.mobile}</span>
                  <span className="hidden md:inline">{step.body}</span>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink py-16 text-surface md:py-24 lg:py-40" aria-labelledby="manifiesto-title">
        <div className={shell}>
          <p className="eyebrow text-support">Una forma de entender el trabajo</p>
          <h2
            id="manifiesto-title"
            className="mt-8 font-medium text-[48px] uppercase leading-[52px] tracking-[-1px] md:text-[60px] md:leading-[65px] md:tracking-normal lg:mt-16 lg:text-[108px] lg:leading-[117px] lg:tracking-[-4px]"
          >
            Nos gusta
            <br />
            trabajar con vos,
            <br />
            no para vos.
          </h2>
          <p className="mt-8 max-w-none font-normal text-[17px] leading-[26px] text-support md:ml-auto md:mt-10 md:max-w-[431px] md:text-xl md:leading-[30px] lg:mt-16 lg:max-w-[460px]">
            Porque las mejores ideas se construyen de los dos lados de la conversación.
          </p>
        </div>
      </section>

      <section id="nosotros" className="scroll-mt-28 py-16 md:pt-24 lg:py-24" aria-labelledby="nosotros-title">
        <div className={shell}>
          <h2 id="nosotros-title" className="eyebrow text-muted">
            Nosotros
          </h2>
          <ul className="mt-10">
            {principles.map((principle, index) => (
              <li key={principle.title} className="border-t border-support py-8">
                {index === 1 ? (
                  <div className="hidden items-start gap-6 md:grid md:grid-cols-[249px_minmax(0,1fr)] lg:hidden">
                    <div>
                      <Image
                        src="/brand/wordmark.png"
                        alt=""
                        width={1400}
                        height={432}
                        className="h-20 w-[224px] object-contain object-left"
                      />
                      <p className="mt-6 font-medium text-[18px] leading-[27px] text-ink">
                        Cercanía no es hacer todo. Es saber quién hace qué.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium text-[40px] uppercase leading-[43px] text-ink">
                        {principle.title}
                      </h3>
                      <p className="mt-6 font-medium text-[18px] leading-[27px] text-ink">
                        {principle.body}
                      </p>
                    </div>
                  </div>
                ) : null}
                <div
                  className={`flex items-start justify-between gap-8 ${index === 1 ? "md:hidden lg:flex" : ""}`}
                >
                <div className="min-w-0 max-w-[968px]">
                    <h3 className="font-medium text-[38px] uppercase leading-[41px] tracking-[-1px] text-ink md:text-[40px] md:leading-[43px] lg:text-[60px] lg:leading-[65px]">
                      {principle.title}
                    </h3>
                    <p className="mt-4 font-medium text-[17px] leading-[26px] text-ink md:mt-6 md:text-[18px] md:leading-[27px] lg:text-xl lg:leading-[30px]">
                      <span className="md:hidden">{principle.mobile}</span>
                      <span className="hidden md:inline">{principle.body}</span>
                    </p>
                  </div>
                  <ArrowDownRight className="mt-1 hidden size-[67px] shrink-0 text-ink md:block lg:size-24" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contacto" className="scroll-mt-28 bg-support py-16 text-ink md:py-24 lg:py-32" aria-labelledby="contacto-title">
        <div className={shell}>
          <p className="eyebrow">Empecemos por charlar</p>
          <h2
            id="contacto-title"
            className="mt-6 font-medium text-[40px] uppercase leading-[43px] tracking-[-1px] md:text-[64px] md:leading-[69px] lg:mt-10 lg:text-[124px] lg:leading-[134px] lg:tracking-[-3px]"
          >
            <span className="md:hidden">
              ¿Te
              <br />
              escuchamos?
            </span>
            <span className="hidden md:inline">¿Te escuchamos?</span>
          </h2>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between lg:mt-10">
            <p className="font-medium text-[18px] leading-[27px] md:max-w-[400px] lg:max-w-none lg:text-2xl lg:leading-9">
              Si te gustaría que escuchemos tu proyecto, escribinos.
            </p>
            <a
              href={`mailto:${email}`}
              className="inline-flex h-14 w-[280px] items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-ink px-5 text-[17px] font-semibold text-surface transition-colors duration-300 hover:bg-black lg:w-auto lg:justify-start"
            >
              Hablemos de tu proyecto
              <ArrowUpRight className="size-[18px]" />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-16">
        <div className={shell}>
          <div className="grid gap-10 md:grid-cols-2 md:gap-x-6 lg:grid-cols-[450px_minmax(0,1fr)_auto] lg:items-start lg:gap-12">
            <div>
              <Image
                src="/brand/wordmark.png"
                alt="PRESENZE — Comunicación digital"
                width={1400}
                height={432}
                className="h-[76px] w-[240px] object-contain object-left"
              />
              <p className="mt-6 max-w-[450px] font-medium text-[18px] leading-[27px] text-ink md:max-w-[340px] lg:max-w-[450px] lg:text-xl lg:leading-[30px]">
                Comunicación digital con cercanía, criterio y compromiso.
              </p>
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <p className="eyebrow text-muted">Escribinos</p>
              <a
                href={`mailto:${email}`}
                className="mt-4 inline-flex font-semibold text-base leading-6 text-ink md:text-xl md:leading-[30px]"
              >
                {email}
              </a>
              <p className="mt-4 font-medium text-[17px] leading-[27px] text-muted md:text-[18px]">
                Desde algún lugar de Argentina.
              </p>
            </div>
            <div className="md:col-start-2 md:row-start-1 md:justify-self-end md:text-right lg:col-start-3 lg:row-start-1 lg:text-left">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[17px] font-semibold text-ink"
              >
                Instagram
                <ArrowUpRight className="size-[18px]" />
              </a>
              <p className="mt-2 text-[15px] leading-[19px] text-muted">@somos_presenze</p>
            </div>
          </div>
          <div className="mt-12 h-px w-full bg-support" />
          <div className="mt-6 flex flex-row justify-between gap-4 text-[13px] leading-4 text-muted">
            <p>© 2026 PRESENZE</p>
            <p>Hecho con presencia.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
