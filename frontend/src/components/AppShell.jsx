import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { lazy, Suspense, useEffect, useState } from 'react'
import ErrorBoundary from './ErrorBoundary'
import { logoutMember } from '../store/slices/authSlice'
import { clearNotifications } from '../store/slices/gameSlice'
import { fetchRanks } from '../store/slices/rankSlice'
import { fetchWallet } from '../store/slices/walletSlice'
import { getBackgroundStyle } from '../theme/backgroundTheme'

const navItems = [
  { to: '/', label: '首頁' },
  { to: '/games', label: '遊戲大全' },
  { to: '/shop', label: '賭場商城' },
  { to: '/rank', label: '排行榜' },
  { to: '/transactions', label: '交易紀錄' },
  { to: '/profile', label: '會員中心' },
]

const RealtimeBridge = lazy(() => import('./RealtimeBridge'))

export default function AppShell({ children }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [noticeOpen, setNoticeOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const player = useSelector((state) => state.auth.player)
  const balance = useSelector((state) => state.wallet.balance)
  const notifications = useSelector((state) => state.game.notifications)

  useEffect(() => {
    dispatch(fetchWallet())
    dispatch(fetchRanks())
  }, [dispatch])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    dispatch(logoutMember()).finally(() => navigate('/member'))
  }

  return (
    <div className="theme-background min-h-screen text-zinc-50" style={getBackgroundStyle('app')}>
      <ErrorBoundary>
        <Suspense fallback={null}>
          <RealtimeBridge />
        </Suspense>
      </ErrorBoundary>

      <header
        className={[
          'sticky top-0 z-30 border-b backdrop-blur transition-all duration-500',
          isScrolled ? 'scrolled-header border-yellow-200/30 py-0' : 'border-yellow-200/15 bg-red-950/82',
        ].join(' ')}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="gold-muted text-xs uppercase tracking-[0.35em]">Lucky Star Casino</p>
              <h1 className="brand-title mt-1 text-2xl font-black tracking-tight">幸運星幣城</h1>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm sm:flex sm:items-center">
              <div className="gold-button rounded px-4 py-2">
                <span className="block text-[11px] font-bold uppercase text-red-950/70">玩家</span>
                <span className="font-black">{player?.nickname || player?.username || 'Demo Player'}</span>
              </div>
              <div className="luxury-panel-soft rounded px-4 py-2">
                <span className="gold-muted block text-[11px] font-bold uppercase">籌碼</span>
                <span className="font-black">{balance.toLocaleString()}</span>
              </div>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setNoticeOpen((open) => !open)}
                  className="red-gold-button relative grid h-full min-h-12 w-full place-items-center rounded px-4 py-2 transition sm:w-12"
                  aria-label="通知中心"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                    <path d="M13.7 21a2 2 0 0 1-3.4 0" />
                  </svg>
                  {notifications.length > 0 && (
                    <span className="absolute right-2 top-1 grid h-5 min-w-5 place-items-center rounded-full bg-yellow-200 px-1 text-[11px] font-black text-red-950">
                      {notifications.length}
                    </span>
                  )}
                </button>
                {noticeOpen && (
                  <div className="luxury-panel absolute right-0 top-14 z-40 w-80 rounded p-3 shadow-2xl">
                    <div className="flex items-center justify-between">
                      <p className="gold-text text-sm font-black">通知中心</p>
                      <button
                        type="button"
                        onClick={() => dispatch(clearNotifications())}
                        className="red-gold-button rounded px-2 py-1 text-xs font-bold"
                      >
                        清空
                      </button>
                    </div>
                    <div className="mt-3 grid max-h-80 gap-2 overflow-auto">
                      {notifications.length === 0 ? (
                        <p className="rounded bg-red-950/70 p-3 text-sm text-yellow-100/60">目前沒有新通知</p>
                      ) : (
                        notifications.map((item) => (
                          <div key={item.id || item.createdAt} className="rounded border border-yellow-200/15 bg-red-950/70 p-3">
                            <p className="text-sm font-black text-yellow-100">{item.title || '系統通知'}</p>
                            <p className="mt-1 text-xs leading-5 text-yellow-100/64">{item.message || '已收到新的即時事件'}</p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="red-gold-button rounded px-4 py-2 text-sm font-bold transition"
              >
                登出
              </button>
            </div>
          </div>

          <nav className="flex gap-2 overflow-x-auto pb-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  [
                    'shrink-0 rounded px-4 py-2 text-sm font-bold transition',
                    isActive
                      ? 'gold-button'
                      : 'border border-yellow-200/15 bg-red-950/70 text-yellow-100/72 hover:border-yellow-200/50 hover:text-yellow-100',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  )
}
