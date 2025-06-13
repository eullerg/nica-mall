// src/components/InlineLoader.tsx
'use client';

import dynamic from 'next/dynamic';
import loadingJson from '@/../public/lottie-loading-screen.json';

// o pacote exporta um componente default.
// basta capturar esse default no dynamic:
const LottiePlayer = dynamic(() => import('react-lottie-player'), {
  ssr: false,          // só no client
  // opcional: podemos exibir um fallback leve enquanto o player carrega
  loading: () => <div className="h-32" />,
});

export default function InlineLoader() {
  return (
    <div className="flex flex-col items-center gap-4 py-12">
      <LottiePlayer
        animationData={loadingJson}
        loop
        style={{ width: 120, height: 120 }}
      />
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Buscando resultados, aguarde…
      </p>
    </div>
  );
}
