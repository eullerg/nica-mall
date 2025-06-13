import Image from 'next/image';

/* ---------- tipo ---------- */
export interface Item {
  id: string;
  name: string;
  store: string;
  price: string;
  image: string;
}

interface ResultCardProps {
  item: Item;
}

export default function ResultCard({ item }: ResultCardProps) {
  return (
    <article className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xs
                        border border-white/10 hover:scale-[1.03] hover:shadow-lg transition">
      <Image
        src={item.image}
        alt={item.name}
        width={400}
        height={300}
        className="object-cover w-full h-48"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      />

      <div className="p-4 flex flex-col gap-1">
        <h3 className="font-semibold text-base text-white line-clamp-1">{item.name}</h3>
        <p className="text-sm text-brand-100/70 line-clamp-1">{item.store}</p>
        <p className="mt-2 font-bold text-lg text-brand-200">{item.price}</p>
      </div>
    </article>
  );
}

/* ---------- exporta só o tipo, modo isolatedModules ---------- */
export type { Item };
