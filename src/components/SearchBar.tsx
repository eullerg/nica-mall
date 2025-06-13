'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Props {
  onSearch: (q: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [value, setValue] = useState('');

  function send() {
    if (!value.trim()) return;
    onSearch(value.trim());
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        send();
      }}
      className="relative mx-auto w-full max-w-[600px]"
    >
      {/* input */}
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Digite produto, loja ou marca…"
        className="h-[74px] w-full rounded-xl bg-white/65 dark:bg-surface-2/70 backdrop-blur-lg
                   pr-[110px] pl-6 text-base text-slate-800 placeholder:text-slate-500
                   ring-1 ring-brand-300/60 focus:outline-none focus:ring-2
                   focus:ring-brand-400"
      />

      {/* botão à direita, também envia */}
      <button
        type="submit"
        aria-label="Buscar"
        className="absolute right-3 top-1/2 -translate-y-1/2
                   flex h-10 px-5 items-center gap-1 rounded-xl
                   bg-brand-500 hover:bg-brand-600 text-white text-sm
                   dark:bg-brand-700/90 dark:hover:bg-brand-600/90"
      >
        <Sparkles className="h-4 w-4" />
        Buscar
      </button>
    </form>
  );
}
