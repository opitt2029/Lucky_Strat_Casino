import { NavLink } from 'react-router-dom';
import { Coins } from 'lucide-react';

const navItems = [
  { to: '/', label: '首頁', end: true },
  { to: '/lobby', label: '遊戲大廳' },
  { to: '/wallet', label: '錢包' },
  { to: '/ranking', label: '排行榜' },
  { to: '/admin', label: '後台' },
];

export function AppHeader() {
  return (
    <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500 text-slate-950 shadow-lg shadow-brand-500/20">
            <Coins size={22} />
          </span>
          <div>
            <p className="text-lg font-bold tracking-wide">Lucky Star Casino</p>
            <p className="text-xs text-slate-400">模擬幣娛樂平台</p>
          </div>
        </NavLink>

        <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                [
                  'rounded-full px-4 py-2 text-sm font-medium transition',
                  isActive
                    ? 'bg-brand-500 text-slate-950'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
