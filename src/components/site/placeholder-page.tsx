import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SiteShell } from "@/components/site/site-shell";
import { TextAnimate } from "@/components/ui/text-animate";

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <SiteShell>
      <Header />
      <main className="flex min-h-[70vh] items-center justify-center bg-white px-4 py-16 pt-24 text-center md:pt-28">
        <div className="w-full max-w-3xl rounded-[2rem] border border-[rgba(20,18,18,0.08)] bg-white px-8 py-14 shadow-[0_24px_80px_rgba(17,17,17,0.06)]">
          <p className="section-kicker">{title}</p>
          <TextAnimate
            as="h1"
            animation="blurInUp"
            by="word"
            once
            className="section-title mx-auto mt-5 max-w-[12ch]"
          >
            {"Pas trop vite Sarah, je n'ai pas encore finalisé les autres pages :)"}
          </TextAnimate>
        </div>
      </main>
      <Footer />
    </SiteShell>
  );
}
