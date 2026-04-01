import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";

const APP_VERSION = "1.0.1";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/events");
    }
  }, [user, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    setIsLoading(true);

    try {
      await signIn(email, password);
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    if (password.length < 6) {
      toast.error("A senha deve ter no minimo 6 caracteres");
      return;
    }

    setIsLoading(true);

    try {
      await signUp(email, password);
      setActiveTab("login");
    } catch (error) {
      console.error("SignUp error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fff8fb_0%,#ffe2ec_50%,#fff8fb_100%)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,#f4bfd1_0%,rgba(244,191,209,0.16)_34%,transparent_70%)]" />
      <div className="pointer-events-none absolute left-[-80px] top-40 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[-60px] h-72 w-72 rounded-full bg-[#f0cedb] blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="max-w-xl">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur transition hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar para o site
              </Link>

              <div className="mt-8">
                <img
                  src="/leju-logo.jpg"
                  alt="Leju Assessoria"
                  className="h-20 w-20 rounded-[1.6rem] border border-white/80 object-cover shadow-lg"
                />
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.32em] text-primary">
                  Sistema Legio Assessoria
                </p>
                <h1 className="mt-4 font-display text-5xl leading-[0.95] text-[#621c3d]">
                  Acesso exclusivo para clientes, parceiros e equipe.
                </h1>
                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  Entre para acompanhar os eventos, organizacoes e rotinas da
                  operacao. A apresentacao comercial da marca agora fica na pagina
                  inicial, e esta area permanece dedicada ao sistema.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/80 bg-white/75 p-5 shadow-lg shadow-primary/10 backdrop-blur">
                  <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-lg font-semibold text-[#7a2449]">
                    Ambiente seguro
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Tela exclusiva para autenticacao e acesso as funcionalidades
                    internas do sistema.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/80 bg-white/75 p-5 shadow-lg shadow-primary/10 backdrop-blur">
                  <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                    <LockKeyhole className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-lg font-semibold text-[#7a2449]">
                    Fluxo simplificado
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    A home apresenta a marca. O login continua focado apenas em
                    entrar no sistema.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Card className="mx-auto w-full max-w-xl rounded-[2rem] border-white/80 bg-white/88 shadow-[0_28px_90px_rgba(122,36,73,0.16)] backdrop-blur">
              <CardHeader className="space-y-3 px-8 pt-8 text-center">
                <CardTitle className="text-3xl text-[#621c3d]">
                  Bem-vindo ao sistema
                </CardTitle>
                <CardDescription className="text-base text-slate-500">
                  Use seu email e senha para acessar a area interna da Legio
                  Assessoria.
                </CardDescription>
                <p className="text-sm text-slate-400">Versao {APP_VERSION}</p>
              </CardHeader>

              <CardContent className="px-8">
                <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="mb-8 grid w-full grid-cols-2 rounded-full bg-primary/10 p-1">
                    <TabsTrigger value="login" className="rounded-full">
                      Login
                    </TabsTrigger>
                    <TabsTrigger value="register" className="rounded-full">
                      Cadastro
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="login">
                    <form onSubmit={handleLogin} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            className="h-12 rounded-xl border-slate-200 pl-11"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password">Senha</Label>
                          <Button
                            variant="link"
                            type="button"
                            className="h-auto px-0 text-xs font-normal text-primary"
                          >
                            Esqueceu a senha?
                          </Button>
                        </div>
                        <div className="relative">
                          <LockKeyhole className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                          <Input
                            id="password"
                            type="password"
                            placeholder="******"
                            className="h-12 rounded-xl border-slate-200 pl-11"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="h-12 w-full rounded-xl bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90"
                        disabled={isLoading}
                      >
                        {isLoading ? "Entrando..." : "Entrar no sistema"}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="register">
                    <form onSubmit={handleSignUp} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="register-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                          <Input
                            id="register-email"
                            type="email"
                            placeholder="seu@email.com"
                            className="h-12 rounded-xl border-slate-200 pl-11"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-password">Senha</Label>
                        <div className="relative">
                          <LockKeyhole className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                          <Input
                            id="register-password"
                            type="password"
                            placeholder="******"
                            className="h-12 rounded-xl border-slate-200 pl-11"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                        <p className="text-xs text-slate-500">
                          Minimo de 6 caracteres
                        </p>
                      </div>

                      <Button
                        type="submit"
                        className="h-12 w-full rounded-xl bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90"
                        disabled={isLoading}
                      >
                        {isLoading ? "Criando conta..." : "Criar conta"}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>

              <CardFooter className="px-8 pb-8 pt-2">
                <p className="text-center text-xs leading-6 text-slate-500">
                  Ao continuar, voce concorda com os Termos de Servico e Politica
                  de Privacidade da plataforma.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
