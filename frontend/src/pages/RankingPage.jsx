const ranks = [
  { rank: 1, name: 'Demo Player A', score: 12800 },
  { rank: 2, name: 'Demo Player B', score: 9600 },
  { rank: 3, name: 'Demo Player C', score: 7200 },
];

export function RankingPage() {
  return (
    <section>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">Ranking</p>
      <h1 className="mt-3 text-3xl font-black text-white">排行榜</h1>
      <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
        <table className="w-full border-collapse bg-white/[0.04] text-left text-sm">
          <thead className="bg-white/10 text-slate-300">
            <tr>
              <th className="px-5 py-4">排名</th>
              <th className="px-5 py-4">玩家</th>
              <th className="px-5 py-4">分數</th>
            </tr>
          </thead>
          <tbody>
            {ranks.map((item) => (
              <tr key={item.rank} className="border-t border-white/10">
                <td className="px-5 py-4 font-bold text-brand-500">#{item.rank}</td>
                <td className="px-5 py-4 text-white">{item.name}</td>
                <td className="px-5 py-4 text-slate-300">{item.score.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
