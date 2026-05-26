export function GameCard({ title, category, description, status }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-slate-900 p-5 transition hover:-translate-y-1 hover:border-brand-500/60">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">{category}</p>
          <h3 className="mt-2 text-xl font-bold text-white">{title}</h3>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">{status}</span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-400">{description}</p>
    </article>
  );
}
