// src/components/LoadingScreen.tsx
'use client';

import Lottie        from 'lottie-react';
import loadingJson   from '@/../public/lottie-loading-screen.json';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center
                    bg-white/90 dark:bg-background/90 backdrop-blur-sm">
      <Lottie
        animationData={loadingJson}
        loop
        autoplay    
        className="w-40 md:w-56"
      />
    </div>
  );
}
