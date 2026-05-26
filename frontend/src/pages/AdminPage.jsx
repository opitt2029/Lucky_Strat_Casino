export function AdminPage() {
  return (
    <section className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">Admin</p>
      <h1 className="mt-3 text-3xl font-black text-white">後台管理入口</h1>
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <p className="leading-7 text-slate-300">
          這裡先作為後台管理頁面的佔位。後續可以拆成會員管理、遊戲管理、交易紀錄、系統設定等子路由。
        </p>
      </div>
    </section>
  );
}
