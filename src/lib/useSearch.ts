// src/lib/useSearch.ts
'use client';

import { useState, useCallback } from 'react';
import type { Item } from '@/components/ResultCard';

export interface UseSearchReturn {
  items: Item[];
  loading: boolean;
  error: string | null;
  search: (query: string) => Promise<void>;
}

export default function useSearch(): UseSearchReturn {
  const [items, setItems]     = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  const search = useCallback(async (query: string) => {
    const q = query.trim();
    if (!q) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      if (!res.ok) throw new Error('Erro ao buscar');

      const data: { items: Item[] } = await res.json();
      setItems(data.items);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Erro inesperado';
      setError(message);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { items, loading, error, search };
}
