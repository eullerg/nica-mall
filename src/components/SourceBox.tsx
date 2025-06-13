import Image from 'next/image';

interface Props {
  img: string;
  store: string;
  name: string;
}

export default function SourceBox({ img, store, name }: Props) {
  return (
    <div className="w-[120px] shrink-0">
      <div className="h-[140px] w-[120px] overflow-hidden rounded-lg bg-slate-800">
        <Image
          src={img}
          alt={name}
          width={120}
          height={140}
          className="h-full w-full object-cover"
        />
      </div>
      <p className="mt-1 truncate text-[11px] text-slate-800 dark:text-slate-300">{store}</p>
      <p className="truncate text-[11px] text-slate-400">{name}</p>
    </div>
  );
}
