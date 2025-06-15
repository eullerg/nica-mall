'use client';
import { useEffect, useState } from 'react';

interface Props {
  query: string;
  loading: boolean;
}

export default function AIResponse({ query, loading }: Props) {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;
    // delay forçado para testar o loading
    setText(null);
    const t = setTimeout(() => {
      setText(`O produto “${query}” está disponível em várias lojas do Manaíra Shopping.
Recomendamos comparar preços e conferir a disponibilidade antes da visita.`);
    }, 900);
    return () => clearTimeout(t);
  }, [query]);

  if (loading) return null;
  if (!text) return null;

  return (
    <div className="mx-auto max-w-[840px] mt-12 bg-white/60 backdrop-blur-md
                    rounded-2xl p-8 text-slate-700 shadow">
      {text}
    </div>
  );
}
