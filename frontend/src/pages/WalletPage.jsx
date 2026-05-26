import { useSelector } from 'react-redux';

export function WalletPage() {
  const { balance, currencyName } = useSelector((state) => state.wallet);

  return (
    <section className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">Wallet</p>
      <h1 className="mt-3 text-3xl font-black text-white">模擬幣錢包</h1>
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <p className="text-sm text-slate-400">目前餘額</p>
        <p className="mt-3 text-5xl font-black text-white">{balance.toLocaleString()}</p>
        <p className="mt-2 text-slate-400">{currencyName}</p>
        <p className="mt-6 text-sm leading-6 text-slate-400">
          這個頁面之後會串接 Wallet Service，顯示加幣、扣幣與交易紀錄。此平台定位為模擬幣娛樂，不處理真實金錢。
        </p>
      </div>
    </section>
  );
}
