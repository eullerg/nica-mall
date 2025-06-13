'use client';
import { useState } from 'react';
import { Search } from 'lucide-react';

export default function BottomSearch({ onSearch }: { onSearch: (q: string) => void }) {
    const [value, setValue] = useState('');
  
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if (value.trim()) {
            onSearch(value.trim());
            setValue('');
          }
        }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[740px] max-w-[92vw] z-40"
      >
        {/* caixa */}
        <div className="relative h-[58px] rounded-2xl bg-slate-900/90 backdrop-blur
                        ring-1 ring-slate-700/50 px-4">
          {/* input ocupa 100 % */}
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Pergunte qualquer coisa…"
            className="h-full w-full bg-transparent pr-[68px] text-base
                       text-slate-200 placeholder:text-slate-500 outline-none"
          />
          {/* botão encaixado à direita */}
          <button
            aria-label="Buscar"
            type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2
                       flex h-10 w-10 items-center justify-center rounded-xl
                       ring-1 ring-brand-400 text-brand-300 hover:bg-slate-800"
          >
            <Search size={20} />
          </button>
        </div>
      </form>
    );
  }