import { useState, FormEvent } from "react";
import { Search, AlertTriangle, TrendingUp, X, Check } from "lucide-react";

const Index = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    try {
      await fetch("https://formspree.io/f/mgoleaqv", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10">
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">
              Posicionamento para advogados
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.08] tracking-tight mb-6">
            Seu posicionamento pode estar fazendo{" "}
            <span className="text-primary">você perder clientes</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-xl mx-auto leading-relaxed">
            mesmo você sendo um bom advogado
          </p>

          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Se quem chega até você não sente confiança rápido, a tendência é continuar procurando
            ou escolher outro.
          </p>

          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
            style={{ boxShadow: "var(--shadow-accent)" }}
          >
            Solicitar análise do meu posicionamento
          </button>
        </div>
      </section>

      {/* BLOCO COMPARATIVO */}
      <section className="px-6 py-20 bg-secondary">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">
            O cliente decide <span className="text-primary">antes</span> de falar com você
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            {/* Posicionamento fraco */}
            <div className="rounded-2xl border border-border bg-background p-6 sm:p-7">
              <h3 className="text-lg font-bold text-muted-foreground mb-5">
                Posicionamento fraco
              </h3>
              <ul className="space-y-4">
                {[
                  "Parece igual a outros advogados",
                  "Não transmite segurança",
                  "Gera dúvida na decisão",
                  "Atrai clientes que comparam preço",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-destructive/15 flex items-center justify-center">
                      <X size={12} className="text-destructive" strokeWidth={3} />
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Posicionamento forte */}
            <div className="rounded-2xl border border-primary/30 bg-background p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              <div className="relative">
                <h3 className="text-lg font-bold text-primary mb-5">
                  Posicionamento forte
                </h3>
                <ul className="space-y-4">
                  {[
                    "Passa confiança com mais clareza",
                    "Mostra autoridade",
                    "Reduz a comparação",
                    "Atrai clientes mais decididos",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                        <Check size={12} className="text-primary" strokeWidth={3} />
                      </span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className="text-center mt-10 text-lg sm:text-xl font-bold text-muted-foreground">
            Quando não existe diferença clara,{" "}
            <span className="text-primary">o cliente escolhe outro.</span>
          </p>
        </div>
      </section>

      {/* BLOCO DE AUTORIDADE */}
      <section className="px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-6">O que eu faço</h2>
          <p className="text-muted-foreground text-lg text-center mb-12 max-w-xl mx-auto leading-relaxed">
            Eu ajusto a forma como você é visto no digital para transmitir mais confiança,
            autoridade e valor.
          </p>

          <div className="grid gap-4">
            {[
              "Posicionamento estratégico",
              "Percepção de valor",
              "Comunicação orientada à decisão",
            ].map((title) => (
              <div
                key={title}
                className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border transition-colors hover:border-primary/30"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <span className="text-primary text-sm">◆</span>
                <span className="font-semibold text-lg">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="px-6 py-20 bg-secondary">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-3">
            Como você deixa de parecer <span className="text-primary">só mais um</span>
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-12 max-w-xl mx-auto">
            Não é sobre postar mais. É sobre corrigir a forma como o cliente interpreta você.
          </p>

          <div className="grid gap-5">
            {[
              {
                step: "01",
                icon: Search,
                title: "Análise do seu posicionamento",
                text: "Eu vejo como você está sendo percebido hoje por quem chega até o seu Instagram.",
              },
              {
                step: "02",
                icon: AlertTriangle,
                title: "Identificação dos erros",
                text: "Mostro onde sua comunicação pode estar passando insegurança ou fazendo você parecer comum.",
              },
              {
                step: "03",
                icon: TrendingUp,
                title: "Ajustes estratégicos",
                text: "Você entende o que mudar para transmitir mais autoridade e atrair clientes melhores.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl bg-background border border-border p-6 flex gap-5 items-start"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <item.icon size={22} className="text-primary" />
                </div>
                <div>
                  <span className="text-xs font-bold text-primary tracking-widest uppercase mb-1 block">
                    Passo {item.step}
                  </span>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRASE DE IMPACTO */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            Seu posicionamento pode estar te fazendo parecer{" "}
            <span className="text-primary">comum.</span>
          </p>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section id="formulario" className="px-6 py-20">
        <div className="max-w-lg mx-auto">
          <div
            className="rounded-2xl border border-primary/20 bg-card p-8 sm:p-10"
            style={{ boxShadow: "0 0 60px -12px hsl(24 95% 53% / 0.15)" }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Check size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Recebido!</h3>
                <p className="text-muted-foreground">
                  Vou analisar seu posicionamento e entro em contato em breve.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl sm:text-3xl font-black text-center mb-2">
                  Solicite uma análise do seu posicionamento
                </h2>
                <p className="text-muted-foreground text-center mb-8">
                  Preencha abaixo. Leva menos de 2 minutos.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    required
                    className="w-full px-4 py-3.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                  <input
                    type="text"
                    name="instagram"
                    placeholder="Instagram"
                    required
                    className="w-full px-4 py-3.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                  <input
                    type="text"
                    name="area"
                    placeholder="Área de atuação"
                    required
                    className="w-full px-4 py-3.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="WhatsApp"
                    required
                    className="w-full px-4 py-3.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                  <textarea
                    name="incomoda"
                    placeholder="O que mais te incomoda hoje na forma como você está sendo percebido?"
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg transition-all duration-300 hover:brightness-110 active:scale-[0.98] disabled:opacity-60"
                    style={{ boxShadow: "var(--shadow-accent)" }}
                  >
                    {submitting ? "Enviando..." : "Quero entender onde estou perdendo clientes"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 border-t border-border text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} · Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
};

export default Index;
