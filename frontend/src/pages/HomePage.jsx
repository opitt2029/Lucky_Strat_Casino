import { Link } from 'react-router-dom';
import { Gamepad2, ShieldCheck, Trophy } from 'lucide-react';
import { StatCard } from '../components/StatCard';

const stats = [
  { label: '平台定位', value: '模擬幣', description: '不接觸真實金錢交易，專注娛樂體驗與會員互動。' },
  { label: '前端狀態', value: 'Base', description: '已建立路由、狀態管理、API client 與 Tailwind 樣式基底。' },
  { label: '主要入口', value: '5 pages', description: '首頁、遊戲大廳、錢包、排行榜、後台管理。' },
];

export function HomePage() {
  return (
    <section className="space-y-10">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">Frontend Base</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
            Lucky Star Casino 前端開發基底
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            這裡是模擬幣娛樂平台的使用者介面入口。下一步可以依照會員、錢包、遊戲、排行榜與後台模組逐步串接後端 API。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/lobby" className="rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-brand-100">
              進入遊戲大廳
            </Link>
            <Link to="/ranking" className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              查看排行榜
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-500/20 to-slate-900 p-6 shadow-2xl shadow-black/30">
          <div className="grid gap-4">
            <Feature icon={<Gamepad2 />} title="遊戲模組" text="預留 slot、card、dice 等遊戲卡片區塊。" />
            <Feature icon={<ShieldCheck />} title="會員驗證" text="之後可串接 Gateway 與 Member Service。" />
            <Feature icon={<Trophy />} title="排行展示" text="預留排行榜與玩家成績查詢頁面。" />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
      </div>
    </section>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="rounded-3xl bg-white/10 p-5">
      <div className="text-brand-500">{icon}</div>
      <h2 className="mt-3 text-lg font-bold text-white">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}
