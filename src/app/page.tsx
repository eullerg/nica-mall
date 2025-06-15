'use client';
import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';  
import ResultView from '@/components/ResultView';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BottomSearch from '@/components/BottomSearch';
import mockProducts from '@/utils/mockData';
import type { Item } from '@/components/ResultCard';

export default function Home() {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState<Item[]>([]);
  const [loadingFull, setLoadingFull] = useState(false);   // primeiro loading
  const [loadingInline, setLoadingInline] = useState(false);
  const [searchedOnce, setSearchedOnce] = useState(false); // flag

  async function search(q: string) {
    const norm = q.trim().toLowerCase();
    if (!norm) return;

    // decide qual loading mostrar
    if (!searchedOnce) {
      setLoadingFull(true);
    } else {
      setLoadingInline(true);
    }

    // “delay” de 2s, simulando API -----------------
    await new Promise(r => setTimeout(r, 2000));

    const res = mockProducts.filter(
      p =>
        p.name.toLowerCase().includes(norm) ||
        p.store.toLowerCase().includes(norm)
    );

    // atualiza estados ----------------------------
    setQuery(q);
    setItems(res);
    setSearchedOnce(true);
    setLoadingFull(false);
    setLoadingInline(false);
  }

  function goHome() {
    setQuery('');
    setItems([]);
    setSearchedOnce(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const showingResults = query && items.length > 0;

  return (
    <>
      <Navbar onHome={goHome} />

      {/* Loading em tela cheia */}
      {loadingFull && <LoadingScreen />}

      {!showingResults && !loadingFull && <Hero onSearch={search} />}

      {showingResults && (
        <ResultView query={query} items={items} loading={loadingInline} />
      )}

      {showingResults && <BottomSearch onSearch={search} />}
    </>
  );
}
