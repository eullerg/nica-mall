'use client';
import { useState, useCallback } from 'react';
import type { Item } from '@/components/ResultCard';

export default function useSearch() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error('Erro ao buscar');
      const { items } = await res.json();
      setItems(items);
    } catch (err: any) {
      setError(err.message);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { items, loading, error, search };
}
