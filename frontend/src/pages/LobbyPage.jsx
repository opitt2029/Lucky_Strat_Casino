import { GameCard } from '../components/GameCard';

const games = [
  { title: 'Lucky Slot', category: 'Slot', status: '規劃中', description: '老虎機遊戲入口，未來由 Game Service 產生遊戲結果。' },
  { title: 'Star Dice', category: 'Dice', status: '規劃中', description: '骰子類遊戲入口，適合先做最小可用玩法。' },
  { title: 'Blackjack Lite', category: 'Card', status: '規劃中', description: '簡化版卡牌遊戲，可作為前後端互動練習。' },
];

export function LobbyPage() {
  return (
    <section>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">Game Lobby</p>
        <h1 className="mt-3 text-3xl font-black text-white">遊戲大廳</h1>
        <p className="mt-3 max-w-2xl text-slate-400">目前先建立靜態 UI。等後端 Game Service 完成後，可改由 API 載入遊戲清單。</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {games.map((game) => <GameCard key={game.title} {...game} />)}
      </div>
    </section>
  );
}
