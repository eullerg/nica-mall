'use client';
import { SendHorizonal } from 'lucide-react';
import { useState } from 'react';

export default function ChatComposer({ onSend }: { onSend: (msg: string) => void }) {
  const [value, setValue] = useState('');

  const send = () => {
    if (!value.trim()) return;
    onSend(value.trim());
    setValue('');
  };

  return (
    <div className="flex items-center gap-2 p-4 bg-white/5 backdrop-blur-xs rounded-xl">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Pergunte algo à assistente..."
        className="flex-1 bg-transparent outline-none placeholder:text-brand-100/60"
      />
      <button onClick={send} aria-label="Enviar" className="p-2 rounded-lg bg-brand-500 hover:bg-brand-400 transition">
        <SendHorizonal size={18} />
      </button>
    </div>
  );
}
