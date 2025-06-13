// src/components/ResultView.tsx
'use client';

import InlineLoader from '@/components/InlineLoader';
import SourceBox from './SourceBox';
import type { Item } from './ResultCard';

interface ResultViewProps {
  query: string;
  items: Item[];
  loading?: boolean;
}

export default function ResultView({ query, items, loading = false }: ResultViewProps) {
  return (
    <main className="mx-auto w-[740px] max-w-[92vw] px-4 pt-10 pb-36">
      {/* ­­­— Título da busca — */}
      <h1 className="mb-6 text-[32px] font-semibold capitalize text-slate-800 dark:text-slate-100">
        {query}
      </h1>

      {/* ­­­— Loader ou conteúdo — */}
      {loading ? (
        <InlineLoader />
      ) : (
        <>
          {/* carrossel de produtos */}
          <div className="mb-8 flex gap-4 overflow-x-auto pb-2 dark:text-slate-200">
            {items.map(i => (
              <SourceBox
                key={`${i.id}-${i.store}`}
                img={i.image}
                store={i.store}
                name={i.name}
              />
            ))}
          </div>

          {/* texto simulado da IA */}
          <article className="prose prose-invert text-slate-700 dark:prose-invert dark:text-slate-200">
            <p>
              {`Encontramos ${items.length} resultado${
                items.length > 1 ? 's' : ''
              } para “${query}”. Compare preços e bom passeio! Compras no Shopping: Uma Experiência de Consumo e Lazer …`}
            </p>
          </article>
        </>
      )}
    </main>
  );
}
