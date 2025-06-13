import ResultCard from './ResultCard';
import type { Item } from './ResultCard';

export default function SearchResults({
  items,
  loading,
}: {
  items: Item[];
  loading: boolean;
}) {
  if (loading) {
    return (
      <section className="mx-auto max-w-[1400px] px-4 md:px-8 py-12 grid gap-6
                          sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-72 w-full rounded-xl bg-slate-200/40 animate-pulse" />
        ))}
      </section>
    );
  }

  if (!items.length)
    return (
      <p className="text-center text-slate-500 mt-12">
        Nenhum resultado encontrado.
      </p>
    );

  return (
    <section className="mx-auto max-w-[1400px] px-4 md:px-8 py-12 grid gap-6
                        sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map(i => (
        <ResultCard key={`${i.id}-${i.store}`} item={i} />
      ))}
    </section>
  );
}
