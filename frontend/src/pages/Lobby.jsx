import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AppShell from '../components/AppShell'
import BaccaratTable from '../components/BaccaratTable'
import LeaderboardPanel from '../components/LeaderboardPanel'
import MetricCard from '../components/MetricCard'
import SlotMachinePreview from '../components/SlotMachinePreview'
import { dailyCheckIn } from '../store/slices/walletSlice'

const games = [
  {
    to: '/game/slot',
    title: '老虎機',
    caption: '3x3 轉輪 / 100 起注',
    meta: '快速局',
  },
  {
    to: '/game/baccarat',
    title: '百家樂',
    caption: '莊 / 閒 / 和 三區下注',
    meta: '牌桌局',
  },
]

function GameCard({ game }) {
  return (
    <Link
      to={game.to}
      className="group grid min-h-44 content-between rounded border border-white/10 bg-zinc-900 p-5 transition hover:border-white hover:bg-white hover:text-zinc-950"
    >
      <div>
        <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">{game.meta}</p>
        <h3 className="mt-3 text-3xl font-black">{game.title}</h3>
        <p className="mt-3 text-sm font-bold text-zinc-400 group-hover:text-zinc-700">{game.caption}</p>
      </div>
      <span className="mt-6 text-sm font-black">進入遊戲</span>
    </Link>
  )
}

export default function Lobby() {
  const dispatch = useDispatch()
  const balance = useSelector((state) => state.wallet.balance)
  const checkIn = useSelector((state) => state.wallet.checkIn)
  const walletError = useSelector((state) => state.wallet.error)
  const ranks = useSelector((state) => state.rank.globalRank)

  const handleCheckIn = () => {
    dispatch(dailyCheckIn())
  }

  return (
    <AppShell>
      <section className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="flex min-h-[360px] flex-col justify-between rounded border border-white/10 bg-black p-6 sm:p-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-zinc-500">Game Lobby</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">
              選擇牌局，管理星幣與即時通知
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
              目前使用前端模擬服務保存資料，登入、簽到、下注、派彩與排行榜都會同步到 Redux 與 localStorage。
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleCheckIn}
              disabled={checkIn.loading}
              className="rounded border border-white/20 px-5 py-3 text-sm font-black text-white transition hover:bg-white hover:text-zinc-950"
            >
              {checkIn.loading ? '簽到中...' : '每日簽到'}
            </button>
            {checkIn.message && <p className="rounded bg-white px-4 py-3 text-sm font-black text-zinc-950">{checkIn.message}</p>}
            {walletError && <p className="rounded border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-200">{walletError}</p>}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <MetricCard label="目前星幣" value={balance.toLocaleString()} caption="walletSlice.balance" tone="light" />
          <MetricCard label="可進入遊戲" value="2" caption="老虎機 / 百家樂" />
          <MetricCard label="簽到獎勵" value={checkIn.reward ? checkIn.reward.toLocaleString() : 'Ready'} caption="每日一次" />
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        {games.map((game) => (
          <GameCard key={game.to} game={game} />
        ))}
      </section>

      <section className="mt-6 grid gap-4 xl:grid-cols-[1fr_1fr]">
        <SlotMachinePreview compact />
        <LeaderboardPanel rows={ranks} />
      </section>

      <section className="mt-6">
        <BaccaratTable />
      </section>
    </AppShell>
  )
}
