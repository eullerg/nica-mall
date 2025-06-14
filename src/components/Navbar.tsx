'use client';

import { useState } from 'react';
import { Menu, X, Mail, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onHome: () => void;
}

export default function Navbar({ onHome }: NavbarProps) {
  /* ── tema ───────────────────────────────────────────── */
  const [dark, setDark] = useState<boolean>(
    () => typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  // aplica / remove a classe "dark" na <html>
  const toggleTheme = () => {
    setDark(prev => {
      const next = !prev;
      if (next) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
      return next;
    });
  };

  /* ── menu mobile ────────────────────────────────────── */
  const [open, setOpen] = useState(false);

  /* ── estilos que mudam c/ tema ─────────────────────── */
  const navBg = dark ? 'bg-slate-900/95 border-slate-700' : 'bg-white/80 border-slate-200/70';
  const linkClr = dark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-brand-600';
  const iconClr = dark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100';

  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur-md border-b ${navBg}`}>
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-8">

        {/* ─ Logo ─ */}
        <button
          onClick={onHome}
          className="text-2xl font-bold bg-gradient-to-r from-brand-500 to-brand-300 bg-clip-text text-transparent">
          NicaMall
        </button>

        {/* ─ Links (desktop) ─ */}
        <nav className="hidden items-center gap-8 text-base font-medium md:flex">

          {/* Contato + tooltip */}
          <div className="relative group">
            <span className={`flex items-center gap-2 cursor-default ${linkClr}`}>
              <Mail size={18} /> Contato
            </span>
            <div
              className="pointer-events-none absolute left-1/2 top-full mt-3 w-max -translate-x-1/2
                         rounded-lg bg-slate-700/90 px-4 py-3 text-sm text-slate-200 shadow-lg opacity-0
                         backdrop-blur-sm transition-all duration-200 group-hover:opacity-100">
              Fale com a gente:<br />
              <span className="font-semibold text-brand-300">suporte@nicamall.com</span>
            </div>
          </div>

          {/* Toggle tema */}
          <button
            onClick={toggleTheme}
            aria-label="Alternar modo claro/escuro"
            className={`rounded-full p-2 transition-colors ${iconClr}`}>
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* ─ Botão hamburguer (mobile) ─ */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className={`rounded-full p-2 md:hidden transition-colors ${iconClr}`}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ─ Drawer mobile ─ */}
      {open && (
        <nav className={`md:hidden ${navBg} animate-accordion-down`}>
          <ul className="space-y-2 px-4 py-4">
            <li className={`${linkClr} flex items-center gap-2 py-2`}>
              <Mail size={18} /> suporte@nicamall.com
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className={`flex items-center gap-2 py-2 transition-colors ${linkClr}`}>
                {dark ? <Sun size={18} /> : <Moon size={18} />}
                {dark ? 'Modo claro' : 'Modo escuro'}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

