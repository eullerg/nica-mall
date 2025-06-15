'use client';

import SearchBar from '@/components/SearchBar';

interface HeroProps {
  onSearch: (q: string) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  return (
    <section
      className="
        relative hero-grad
        flex min-h-screen flex-col items-center justify-center
        px-4 text-center

        /* ─── foto de fundo ─── */
        after:absolute after:inset-0
        after:bg-[url('/imagem-shopping-2.png')]      /* mobile */
        md:after:bg-[url('/imagem-shopping.jpg')]     /* desktop */
        after:bg-cover after:bg-top md:after:bg-center
        after:opacity-20 dark:after:opacity-10
      "
    >
      {/* card ---------------------------------------------------- */}
      <div
        className="
          relative z-10 w-full max-w-[840px] rounded-[28px]
          bg-white/70 dark:bg-surface/80 backdrop-blur-xl shadow-xl p-12
          -mt-16 md:-mt-24
        "
      >
        <h1
          className="
            mb-4 font-extrabold
            text-[clamp(2.2rem,6vw,3.5rem)] leading-[1.15]
            bg-gradient-to-r from-brand-600 to-brand-400
            dark:from-brand-800 dark:to-brand-700
            bg-clip-text text-transparent
          "
        >
          Encontre tudo no Manaíra Shopping
        </h1>

        <p className="mb-10 text-slate-500 dark:text-slate-400 md:text-lg">
          Busque preços, lojas e marcas em um só lugar.
        </p>

        <SearchBar onSearch={onSearch} />
      </div>
    </section>
  );
}
