import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Flower2,
  Heart,
  Instagram,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useAuth } from "@/contexts/AuthContext";

const instagramUrl = "https://www.instagram.com/lejuassessoria/";

const services = [
  {
    icon: Heart,
    title: "Assessoria para casamentos",
    description:
      "Planejamento, acompanhamento e coordenação para que cada etapa do grande dia aconteça com leveza, beleza e segurança.",
    bullets: ["Cronograma do evento", "Suporte aos noivos", "Coordenação do dia"],
  },
  {
    icon: CalendarDays,
    title: "Assessoria para eventos",
    description:
      "Organização cuidadosa para eventos sociais e celebrações especiais, com atenção aos detalhes e experiência acolhedora para anfitriões e convidados.",
    bullets: ["Planejamento completo", "Acompanhamento de fornecedores", "Execução organizada"],
  },
  {
    icon: Flower2,
    title: "Decoração e ambientação",
    description:
      "Composições florais, ambientação e locação de peças que valorizam o estilo do evento e criam uma experiência memorável.",
    bullets: ["Decoração elegante", "Produções florais", "Locação de utensílios"],
  },
];

const differentials = [
  {
    icon: ShieldCheck,
    title: "Transparência em cada etapa",
    description: "Processos claros, acompanhamento próximo e decisões alinhadas com o que realmente importa para cada celebração.",
  },
  {
    icon: Sparkles,
    title: "Requinte com personalidade",
    description: "Projetos pensados para unir sofisticação, acolhimento e a identidade única de cada cliente.",
  },
  {
    icon: MapPin,
    title: "Vitória e Grande Vitória",
    description: "Atendimento em Vitória, Espírito Santo, com suporte para eventos em toda a região metropolitana.",
  },
];

const highlights = [
  {
    eyebrow: "Casamentos",
    title: "Celebrações elegantes, leves e bem coordenadas",
    description:
      "Da organização prévia ao acompanhamento do grande dia, a assessoria ajuda cada momento a acontecer no tempo certo.",
  },
  {
    eyebrow: "Eventos especiais",
    title: "Experiências que acolhem anfitriões e convidados",
    description:
      "Eventos sociais com planejamento, ambientação e condução pensados para criar lembranças afetivas e bem executadas.",
  },
  {
    eyebrow: "Ambientação floral",
    title: "Detalhes que transformam o cenário do evento",
    description:
      "Composições decorativas e elementos de apoio que valorizam a identidade visual e o clima da ocasião.",
  },
];

const journey = [
  {
    title: "Entendimento do evento",
    description: "Escuta atenta para alinhar estilo, prioridades e a experiência que cada cliente deseja viver.",
  },
  {
    title: "Planejamento e curadoria",
    description: "Organização dos detalhes, orientação das escolhas e acompanhamento para que tudo caminhe com segurança.",
  },
  {
    title: "Coordenação do grande dia",
    description: "Presença estratégica para que a celebração flua com tranquilidade, cuidado e excelência no atendimento.",
  },
];

function PortraitCard() {
  const [imageError, setImageError] = useState(false);

  if (!imageError) {
    return (
      <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 p-3 shadow-[0_24px_80px_rgba(122,36,73,0.18)] backdrop-blur">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff_0%,transparent_58%)]" />
        <img
          src="/juliana-ferraz.jpg"
          alt="Juliana Ferraz, da Legio Assessoria"
          className="relative h-full min-h-[460px] w-full rounded-[1.6rem] object-cover"
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_24px_80px_rgba(122,36,73,0.18)] backdrop-blur">
      <div className="absolute inset-x-8 top-0 h-32 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative flex h-full min-h-[460px] flex-col justify-between rounded-[1.6rem] bg-[linear-gradient(180deg,#fff7fa_0%,#f4d9e4_100%)] p-8">
        <div>
          <Badge className="rounded-full bg-white/90 px-4 py-1 text-[0.7rem] uppercase tracking-[0.28em] text-primary shadow-sm">
            Atendimento personalizado
          </Badge>
        </div>
        <div className="space-y-6">
          <img
            src="/leju-logo.jpg"
            alt="Logomarca da Leju Assessoria"
            className="h-24 w-24 rounded-3xl border border-white/80 object-cover shadow-lg"
          />
          <div className="space-y-3">
            <p className="font-display text-4xl leading-none text-[#7a2449]">
              Juliana Ferraz
            </p>
            <p className="max-w-sm text-sm leading-7 text-slate-600">
              Excelência no atendimento, amor pelo que fazemos, transparência,
              requinte e qualidade para transformar cada evento em uma experiência
              marcante.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
              <MapPin className="h-4 w-4 text-primary" />
              Vitória, ES
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
              <Users className="h-4 w-4 text-primary" />
              Grande Vitória
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const Index = () => {
  const { user } = useAuth();
  const systemHref = user ? "/events" : "/login";

  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#fff8fb_0%,#ffe4ee_36%,#fff8fb_68%,#ffffff_100%)] text-slate-800">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_top,#f8bfd1_0%,rgba(248,191,209,0.18)_28%,transparent_68%)]" />
      <div className="pointer-events-none absolute left-[-120px] top-[320px] h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute right-[-80px] top-[760px] h-80 w-80 rounded-full bg-[#f1cbd8] blur-3xl" />

      <header className="sticky top-0 z-30 border-b border-white/40 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/leju-logo.jpg"
              alt="Leju Assessoria"
              className="h-14 w-14 rounded-2xl border border-white/70 object-cover shadow-md"
            />
            <div>
              <p className="font-display text-2xl leading-none text-[#7a2449]">
                Legio Assessoria
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Eventos e casamentos
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#servicos" className="transition hover:text-primary">
              Servicos
            </a>
            <a href="#diferenciais" className="transition hover:text-primary">
              Diferenciais
            </a>
            <a href="#eventos" className="transition hover:text-primary">
              Destaques
            </a>
            <a href="#contato" className="transition hover:text-primary">
              Contato
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" className="hidden rounded-full px-5 text-slate-700 sm:inline-flex">
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                <Instagram className="mr-1 h-4 w-4" />
                Instagram
              </a>
            </Button>
            <Button asChild className="rounded-full bg-primary px-6 text-white shadow-lg shadow-primary/30 hover:bg-primary/90">
              <Link to={systemHref}>
                Sistema
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <Badge className="w-fit rounded-full border border-primary/15 bg-white/90 px-4 py-1 text-[0.72rem] uppercase tracking-[0.32em] text-primary shadow-sm">
                Vitoria, ES e Grande Vitoria
              </Badge>
              <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[0.95] text-[#621c3d] sm:text-6xl lg:text-7xl">
                Assessoria elegante para eventos que merecem ser inesqueciveis.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                A Legio Assessoria cuida do planejamento, da coordenacao e da
                ambientacao de casamentos e eventos especiais com atendimento
                proximo, transparencia e sensibilidade em cada detalhe.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-primary px-8 text-white shadow-xl shadow-primary/30 hover:bg-primary/90">
                  <a href="#servicos">
                    Conheca os servicos
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-primary/20 bg-white/70 px-8 text-slate-700 hover:bg-white">
                  <Link to={systemHref}>Acessar o sistema</Link>
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <Card className="rounded-[1.5rem] border-white/70 bg-white/75 shadow-lg shadow-primary/10 backdrop-blur">
                  <CardContent className="p-5">
                    <p className="text-sm font-semibold text-[#7a2449]">Casamentos</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Assessoria completa para o grande dia acontecer com leveza.
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-[1.5rem] border-white/70 bg-white/75 shadow-lg shadow-primary/10 backdrop-blur">
                  <CardContent className="p-5">
                    <p className="text-sm font-semibold text-[#7a2449]">Eventos especiais</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Organizacao cuidadosa para celebracoes sociais com personalidade.
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-[1.5rem] border-white/70 bg-white/75 shadow-lg shadow-primary/10 backdrop-blur">
                  <CardContent className="p-5">
                    <p className="text-sm font-semibold text-[#7a2449]">Decoracao</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Ambientacao floral e locacao de itens para compor o cenario ideal.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full border border-white/60 bg-white/50 blur-sm lg:block" />
              <PortraitCard />
            </div>
          </div>
        </section>

        <section id="servicos" className="relative py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">
                Servicos
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-[#621c3d] sm:text-5xl">
                Um suporte completo para celebrar com tranquilidade e beleza.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                A proposta da Legio Assessoria une organizacao, sensibilidade e
                cuidado estetico para que cada evento aconteca de forma fluida,
                acolhedora e memoravel.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="group rounded-[2rem] border-white/70 bg-white/80 shadow-[0_18px_60px_rgba(122,36,73,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(122,36,73,0.14)]"
                >
                  <CardContent className="p-7">
                    <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-[#7a2449]">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>
                    <div className="mt-6 space-y-3">
                      {service.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-center gap-3 text-sm text-slate-700">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="diferenciais" className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.86),rgba(255,236,243,0.88))] p-8 shadow-[0_22px_70px_rgba(122,36,73,0.12)] lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">
                  Diferenciais
                </p>
                <h2 className="mt-4 font-display text-4xl leading-tight text-[#621c3d] sm:text-5xl">
                  Atendimento humano, olhar apurado e execucao organizada.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                  Cada projeto nasce do entendimento profundo do evento e evolui
                  com acompanhamento proximo, curadoria cuidadosa e presenca
                  atenta para que tudo aconteca com serenidade.
                </p>
              </div>

              <div className="grid gap-5">
                {differentials.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-lg shadow-primary/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#7a2449]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {journey.map((step, index) => (
                <Card
                  key={step.title}
                  className="rounded-[1.8rem] border-white/70 bg-white/80 shadow-[0_18px_50px_rgba(122,36,73,0.10)]"
                >
                  <CardContent className="p-7">
                    <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">
                      Etapa 0{index + 1}
                    </p>
                    <h3 className="mt-5 text-2xl font-semibold text-[#7a2449]">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="eventos" className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">
                  Destaques
                </p>
                <h2 className="mt-4 font-display text-4xl leading-tight text-[#621c3d] sm:text-5xl">
                  Um carrossel de inspiracao para os momentos que a marca entrega.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-600">
                Em vez de mostrar telas do sistema, a pagina inicial valoriza os
                servicos prestados pela Legio Assessoria e a experiencia vivida em
                cada celebracao.
              </p>
            </div>

            <div className="mt-10">
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent>
                  {highlights.map((item) => (
                    <CarouselItem key={item.title} className="md:basis-1/2 xl:basis-1/3">
                      <Card className="h-full rounded-[2rem] border-white/70 bg-[linear-gradient(160deg,#ffffff_0%,#ffe9f1_100%)] shadow-[0_22px_60px_rgba(122,36,73,0.12)]">
                        <CardContent className="flex h-full flex-col justify-between p-7">
                          <div>
                            <Badge className="rounded-full bg-white/90 px-4 py-1 text-[0.7rem] uppercase tracking-[0.28em] text-primary">
                              {item.eyebrow}
                            </Badge>
                            <h3 className="mt-6 font-display text-3xl leading-tight text-[#7a2449]">
                              {item.title}
                            </h3>
                            <p className="mt-5 text-sm leading-7 text-slate-600">
                              {item.description}
                            </p>
                          </div>
                          <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary">
                            <Sparkles className="h-4 w-4" />
                            Cuidado em cada detalhe
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-3 top-auto bottom-3 border-white/80 bg-white/95 text-primary hover:bg-white" />
                <CarouselNext className="right-3 top-auto bottom-3 border-white/80 bg-white/95 text-primary hover:bg-white" />
              </Carousel>
            </div>
          </div>
        </section>

        <section id="contato" className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2.2rem] border border-white/70 bg-[#621c3d] px-6 py-10 text-white shadow-[0_26px_90px_rgba(98,28,61,0.30)] md:px-10 md:py-14">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.34em] text-white/75">
                    Contato e acesso
                  </p>
                  <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                    Uma entrada acolhedora para a marca e um acesso direto ao sistema.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
                    A nova pagina inicial apresenta a Legio Assessoria como marca
                    de eventos e casamentos. Quando quiser entrar na area interna,
                    o botao Sistema leva para o login atual.
                  </p>
                </div>

                <div className="flex flex-col gap-4 rounded-[1.8rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <Button asChild size="lg" className="rounded-full bg-white px-8 text-[#621c3d] hover:bg-white/90">
                    <a href={instagramUrl} target="_blank" rel="noreferrer">
                      <Instagram className="h-4 w-4" />
                      Abrir Instagram
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-transparent px-8 text-white hover:bg-white/10">
                    <Link to={systemHref}>
                      Sistema Legio Assessoria
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <div className="rounded-[1.4rem] bg-white/10 p-4 text-sm leading-7 text-white/75">
                    Atendimento em Vitoria e Grande Vitoria para casamentos,
                    eventos especiais, decoracao e ambientacao.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
