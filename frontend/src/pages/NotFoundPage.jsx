import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-slate-100">
      <section className="max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">404</p>
        <h1 className="mt-3 text-3xl font-black text-white">找不到頁面</h1>
        <p className="mt-4 text-slate-400">請確認網址是否正確，或回到首頁重新操作。</p>
        <Link className="mt-6 inline-flex rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-slate-950" to="/">
          回首頁
        </Link>
      </section>
    </main>
  );
}
