import Image from "next/image";
import type { ReactNode } from "react";

const comparison = [
  {
    title: "Posicionamento fraco",
    tone: "weak",
    items: [
      <>Parece <PainText>substituível</PainText>.</>,
      "Explica demais.",
      "Depende de convencimento.",
      <>Atrai clientes que pedem <PainText>desconto</PainText>.</>
    ]
  },
  {
    title: "Posicionamento forte",
    tone: "strong",
    items: [
      "Parece específico.",
      "Cria critério.",
      "Transmite segurança.",
      "Atrai clientes que já chegam decididos."
    ]
  }
];

const problems = [
  {
    text: "Quando sua presença parece comum, o cliente hesita.",
    highlight: "parece comum"
  },
  {
    text: "Quando sua promessa parece ampla demais, ele adia.",
    highlight: "ele adia"
  },
  {
    text: "Quando sua comunicação não cria autoridade, ele negocia.",
    highlight: "ele negocia"
  }
];

const process = [
  {
    number: "01",
    title: "Diagnóstico de percepção",
    text: "Identifico onde o mercado interpreta mal seu valor, sua diferença e seu nível de autoridade."
  },
  {
    number: "02",
    title: "Estrutura de posicionamento",
    text: "Defino a lógica central da sua presença: mensagem, critérios, tensão, diferenciação e narrativa de valor."
  },
  {
    number: "03",
    title: "Direção de percepção",
    text: "Transformo a estratégia em uma presença mais clara, premium e decisiva para sustentar conversas de maior valor."
  }
];

function PainText({ children }: { children: ReactNode }) {
  return <span className="text-signal">{children}</span>;
}

function HighlightedLine({
  text,
  highlight
}: {
  text: string;
  highlight: string;
}) {
  const [before, after] = text.split(highlight);

  return (
    <>
      {before}
      <PainText>{highlight}</PainText>
      {after}
    </>
  );
}

function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`mb-5 text-[11px] uppercase leading-5 tracking-[0.2em] sm:mb-6 sm:text-xs sm:tracking-[0.3em] ${
        dark ? "text-signal" : "text-signal"
      }`}
    >
      {children}
    </p>
  );
}

function PrimaryCta({ className = "" }: { className?: string }) {
  return (
    <a
      href="#analise"
      className={`group inline-flex w-full items-center justify-center rounded-sm bg-signal px-7 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-carbon transition duration-300 hover:-translate-y-0.5 hover:bg-ivory hover:shadow-[0_18px_50px_rgba(232,93,31,0.16)] focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-carbon sm:w-auto sm:px-8 sm:text-sm ${className}`}
    >
      Solicitar análise estratégica
      <span className="ml-3 h-px w-6 bg-carbon transition-all duration-300 group-hover:w-9" />
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-carbon text-ivory">
      <section className="texture grain relative px-5 py-7 sm:px-8 lg:min-h-screen lg:px-14 lg:py-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(232,93,31,0.12),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_42%)]" />
        <nav className="fade-in relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-6 text-[10px] uppercase tracking-[0.12em] text-muted sm:text-[11px] sm:tracking-[0.28em]">
          <a
            href="#topo"
            aria-label="Percepção estratégica"
            className="inline-flex items-center"
          >
            <Image
              src="/logo.png"
              alt="Percepção estratégica"
              width={56}
              height={56}
              priority
              className="h-11 w-11 object-contain sm:h-12 sm:w-12 lg:h-14 lg:w-14"
            />
          </a>
          <a href="#analise" className="hidden transition duration-300 hover:text-ivory sm:block">
            Solicitar análise
          </a>
        </nav>

        <div
          id="topo"
          className="relative z-10 mx-auto grid max-w-7xl gap-12 pb-16 pt-24 sm:pb-24 sm:pt-32 md:grid-cols-[1.08fr_0.72fr] md:items-end lg:gap-16 lg:pt-44 xl:pt-48"
        >
          <div className="fade-up">
            <p className="mb-7 max-w-[18rem] text-[11px] uppercase leading-5 tracking-[0.2em] text-signal sm:mb-8 sm:max-w-none sm:text-xs sm:tracking-[0.34em]">
              Posicionamento e desenho de percepção
            </p>
            <h1 className="max-w-5xl font-display text-[3.55rem] font-semibold leading-[0.9] text-ivory sm:text-7xl md:text-8xl xl:text-[9.4rem]">
              O mercado não paga mais pelo que{" "}
              <span className="text-signal">parece comum</span>.
            </h1>
          </div>

          <div className="fade-up max-w-xl md:max-w-md md:pb-5 [animation-delay:160ms]">
            <div className="rounded-md border border-ivory/10 bg-ivory/[0.035] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur sm:p-7">
              <p className="text-lg leading-8 text-ivory/88 sm:text-xl">
                Empresas competentes continuam sendo{" "}
                <PainText>comparadas por preço</PainText> quando sua percepção
                não sustenta o valor que entregam.
              </p>
              <p className="mt-7 leading-7 text-muted sm:mt-8">
                O problema raramente está na qualidade do seu trabalho. Está no
                modo como o mercado interpreta sua autoridade, sua clareza e o
                risco de contratar você.
              </p>
            </div>
            <PrimaryCta className="mt-9" />
          </div>
        </div>
      </section>

      <section className="section-reveal bg-[linear-gradient(180deg,#f7f3ec_0%,#ebe7df_100%)] px-5 py-24 text-carbon sm:px-8 sm:py-32 lg:px-14 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <Eyebrow dark>Mudança de percepção</Eyebrow>
            <h2 className="font-display text-[2.75rem] font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
              Você não está disputando atenção. Está disputando interpretação.
            </h2>
          </div>

          <div className="mt-16 grid gap-12 sm:mt-24 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
            <div className="max-w-lg text-base leading-8 text-carbon/70 sm:text-lg">
              <p>
                Quando a mensagem é genérica, o mercado procura equivalentes.
              </p>
              <p className="mt-6">
                Quando a percepção é clara, o mercado entende diferença.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {comparison.map((column) => (
                <div
                  key={column.title}
                  className={`rounded-md p-6 sm:p-8 ${
                    column.tone === "strong"
                      ? "border border-signal/35 bg-carbon text-ivory shadow-[0_28px_80px_rgba(5,5,5,0.18)]"
                      : "border border-carbon/10 bg-white/45 text-carbon"
                  }`}
                >
                  <h3
                    className={`text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.22em] ${
                      column.tone === "strong" ? "text-signal" : "text-carbon"
                    }`}
                  >
                    {column.title}
                  </h3>
                  <ul className="mt-7 space-y-4 text-xl font-medium leading-8 sm:mt-8 sm:space-y-5 sm:text-2xl">
                    {column.items.map((item, itemIndex) => (
                      <li key={`${column.title}-${itemIndex}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-reveal relative px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_22%,rgba(232,93,31,0.1),transparent_25%),linear-gradient(180deg,#050505_0%,#11100e_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <div>
            <Eyebrow>Problema oculto</Eyebrow>
            <h2 className="font-display text-[2.75rem] font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
              O valor não desaparece. Ele apenas não é percebido.
            </h2>
          </div>

          <div className="rounded-md border border-ivory/10 bg-ivory/[0.035] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.24)] sm:p-8 lg:pt-8">
            <div className="space-y-6 sm:space-y-8">
              {problems.map((item) => (
                <p
                  key={item.text}
                  className="border-b border-ivory/12 pb-6 text-xl leading-8 text-ivory/90 last:border-b-0 last:pb-0 sm:pb-8 sm:text-2xl sm:leading-9"
                >
                  <HighlightedLine text={item.text} highlight={item.highlight} />
                </p>
              ))}
            </div>
            <p className="mt-10 max-w-xl text-base leading-8 text-muted sm:mt-12 sm:text-lg">
              A consequência é previsível: conversas improdutivas, pressão por
              preço, <PainText>clientes desalinhados</PainText> e menos decisões
              firmes.
            </p>
            <p className="mt-7 text-xl font-semibold leading-8 sm:mt-8 sm:text-2xl">
              Não é falta de capacidade.{" "}
              <PainText>É falta de percepção estruturada.</PainText>
            </p>
          </div>
        </div>
      </section>

      <section className="section-reveal bg-[linear-gradient(180deg,#f7f3ec_0%,#eeeae3_100%)] px-5 py-24 text-carbon sm:px-8 sm:py-32 lg:px-14 lg:py-40">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          <div className="rounded-md bg-[linear-gradient(145deg,#050505,#171512)] p-5 text-ivory shadow-[0_34px_100px_rgba(5,5,5,0.22)] sm:p-8 lg:aspect-[4/5]">
            <div className="flex min-h-[22rem] flex-col justify-between rounded-sm border border-ivory/15 p-6 sm:min-h-[28rem] sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-signal sm:text-xs sm:tracking-[0.28em]">
                Autoridade
              </p>
              <p className="font-display text-3xl font-semibold leading-[1.02] sm:text-4xl">
                Clareza antes de estética.
                <br />
                Estratégia antes de execução.
                <br />
                Percepção antes de conversão.
              </p>
            </div>
          </div>

          <div className="self-center">
            <h2 className="font-display text-[2.75rem] font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
              Eu desenho a forma como o mercado entende o seu valor.
            </h2>
            <div className="mt-10 space-y-4 text-xl font-medium leading-8 sm:mt-12 sm:text-2xl sm:leading-9">
              <p>Não organizo apenas palavras.</p>
              <p>Não faço aparência para encobrir ausência de substância.</p>
              <p>Não crio uma imagem mais bonita de um negócio confuso.</p>
            </div>
            <p className="mt-10 max-w-2xl text-base leading-8 text-carbon/70 sm:mt-12 sm:text-lg">
              Estruturo posicionamento, narrativa, percepção e presença para
              que sua oferta seja compreendida com mais autoridade, mais
              precisão e menos resistência.
            </p>
          </div>
        </div>
      </section>

      <section className="section-reveal px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-4xl">
              <Eyebrow>Processo</Eyebrow>
              <h2 className="font-display text-[2.75rem] font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
                Um processo curto, controlado e estratégico.
              </h2>
            </div>
            <p className="max-w-lg text-base leading-8 text-muted sm:max-w-sm sm:text-lg">
              O foco não está em produzir mais materiais. Está em reduzir
              ambiguidade antes da decisão.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:mt-24 lg:grid-cols-3">
            {process.map((step) => (
              <article
                key={step.number}
                className="rounded-md border border-ivory/10 bg-[linear-gradient(180deg,rgba(247,243,236,0.055),rgba(247,243,236,0.018))] p-6 transition duration-300 hover:-translate-y-1 hover:border-signal/35 sm:p-8"
              >
                <span className="font-display text-5xl font-semibold leading-none text-signal sm:text-6xl">
                  {step.number}
                </span>
                <h3 className="mt-8 text-xl font-semibold sm:mt-10 sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-5 leading-7 text-muted sm:mt-6">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-reveal bg-[linear-gradient(180deg,#f7f3ec_0%,#ece8e1_100%)] px-5 py-24 text-carbon sm:px-8 sm:py-32 lg:px-14 lg:py-40">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            <Eyebrow dark>Reenquadramento de valor</Eyebrow>
            <h2 className="font-display text-[2.75rem] font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
              Melhor percepção não atrai mais pessoas. Atrai melhores decisões.
            </h2>
          </div>

          <div className="self-end rounded-md border border-carbon/10 bg-white/45 p-6 text-base leading-8 text-carbon/70 shadow-[0_24px_80px_rgba(5,5,5,0.08)] sm:p-8 sm:text-lg">
            <p>Volume pode parecer crescimento, mas muitas vezes apenas aumenta ruído.</p>
            <p className="mt-7 sm:mt-8">
              Clientes melhores não compram apenas entrega. Compram segurança,
              critério, clareza e redução de risco.
            </p>
            <p className="mt-9 text-xl font-semibold leading-8 text-carbon sm:mt-10 sm:text-2xl sm:leading-9">
              Quando a percepção sustenta o preço, a conversa muda.
            </p>
          </div>
        </div>
      </section>

      <section className="section-reveal relative px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-44">
        <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-signal/45 to-transparent" />
        <div className="mx-auto max-w-6xl">
          <p className="font-display text-[2.8rem] font-semibold leading-[1] sm:text-6xl lg:text-8xl">
            O mercado não escolhe apenas quem entrega melhor; escolhe quem
            parece mais seguro para confiar.
          </p>
        </div>
      </section>

      <section
        id="analise"
        className="section-reveal relative bg-[linear-gradient(180deg,#f7f3ec_0%,#e9e5dd_100%)] px-5 py-24 text-carbon sm:px-8 sm:py-32 lg:px-14 lg:py-40"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(232,93,31,0.11),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <Eyebrow dark>Decisão</Eyebrow>
            <h2 className="font-display text-[2.75rem] font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
              Se o seu valor já é alto, sua percepção precisa estar no mesmo nível.
            </h2>
            <div className="mt-10 space-y-3 text-lg leading-8 text-carbon/72 sm:mt-12 sm:text-xl">
              <p>Sem pressão.</p>
              <p>Sem promessa inflada.</p>
              <p>
                Sem <PainText>resistência na decisão</PainText>.
              </p>
            </div>
          </div>

          <form
            action="https://formspree.io/f/mgoleaqv"
            method="POST"
            className="rounded-md bg-[linear-gradient(145deg,#050505,#15130f)] p-5 text-ivory shadow-[0_40px_120px_rgba(5,5,5,0.22)] sm:p-10"
          >
            <p className="mb-9 max-w-xl text-base leading-8 text-ivory/76 sm:mb-10 sm:text-lg">
              A análise inicial serve para entender se existe um problema real
              de posicionamento, percepção e clareza estratégica.
            </p>

            <div className="grid gap-6">
              <label className="block">
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted sm:text-xs sm:tracking-[0.22em]">
                  Nome
                </span>
                <input
                  className="mt-2 w-full border-0 border-b border-ivory/22 bg-transparent px-0 py-4 text-base text-ivory outline-none transition placeholder:text-muted focus:border-signal sm:mt-3 sm:text-lg"
                  name="nome"
                  placeholder="Seu nome"
                  type="text"
                />
              </label>
              <label className="block">
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted sm:text-xs sm:tracking-[0.22em]">
                  Empresa
                </span>
                <input
                  className="mt-2 w-full border-0 border-b border-ivory/22 bg-transparent px-0 py-4 text-base text-ivory outline-none transition placeholder:text-muted focus:border-signal sm:mt-3 sm:text-lg"
                  name="empresa"
                  placeholder="Nome da empresa"
                  type="text"
                />
              </label>
              <label className="block">
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted sm:text-xs sm:tracking-[0.22em]">
                  Site ou perfil
                </span>
                <input
                  className="mt-2 w-full border-0 border-b border-ivory/22 bg-transparent px-0 py-4 text-base text-ivory outline-none transition placeholder:text-muted focus:border-signal sm:mt-3 sm:text-lg"
                  name="site_ou_perfil"
                  placeholder="Onde sua presença pode ser analisada"
                  type="text"
                />
              </label>
              <label className="block">
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted sm:text-xs sm:tracking-[0.22em]">
                  Principal desafio
                </span>
                <textarea
                  className="mt-2 min-h-32 w-full resize-none border-0 border-b border-ivory/22 bg-transparent px-0 py-4 text-base text-ivory outline-none transition placeholder:text-muted focus:border-signal sm:mt-3 sm:text-lg"
                  name="principal_desafio"
                  placeholder="O que hoje reduz a percepção de valor?"
                />
              </label>
            </div>

            <button
              type="submit"
              className="group mt-9 inline-flex w-full items-center justify-center rounded-sm bg-signal px-7 py-5 text-xs font-semibold uppercase tracking-[0.16em] text-carbon transition duration-300 hover:-translate-y-0.5 hover:bg-ivory hover:shadow-[0_18px_50px_rgba(232,93,31,0.18)] focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-carbon sm:mt-10 sm:px-8 sm:text-sm"
            >
              Solicitar análise estratégica
              <span className="ml-3 h-px w-6 bg-carbon transition-all duration-300 group-hover:w-9" />
            </button>
            <p className="mt-6 text-sm leading-6 text-muted">
              Para empresas e profissionais que desejam atrair clientes
              melhores, sustentar preços mais altos e reduzir resistência na
              decisão.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
