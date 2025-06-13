// app/api/search/route.ts
import { NextResponse } from 'next/server';
import mockProducts from '@/utils/mockData';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get('q') ?? '').toLowerCase();

  // 👉 substitua pelo fetch real quando a API do shopping estiver pronta
  const items = mockProducts.filter(
    p =>
      p.name.toLowerCase().includes(q) ||
      p.store.toLowerCase().includes(q) ||
      p.brand?.toLowerCase().includes(q)
  );

  // agrupamento “mesmo item, lojas diferentes”
  const grouped = items.reduce<Record<string, typeof items>>( (acc, cur) => {
    acc[cur.id] = [...(acc[cur.id] ?? []), cur];
    return acc;
  }, {});

  return NextResponse.json({ items, grouped });
}
