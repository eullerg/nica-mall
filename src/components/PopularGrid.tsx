import ResultCard, { Item } from './ResultCard';

export default function PopularGrid({ items }: { items: Item[] }) {
  if (!items.length) return null;

  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-16" id="populares">
      <h2 className="text-2xl font-bold mb-8 text-slate-800">Mais populares</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map(it => (
          <ResultCard key={it.id} item={it} />
        ))}
      </div>
    </section>
  );
}
