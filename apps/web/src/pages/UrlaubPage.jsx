import KpiCard from '../components/KpiCard';

export default function UrlaubPage() {
  return (
    <section className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold">Urlaub & Abwesenheit</h1>
          <p className="text-slate-500">Verwalte deine Urlaubsanträge</p>
        </div>
        <button className="rounded-lg bg-slate-900 px-4 py-2 text-white">Neuer Antrag</button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <KpiCard title="Resturlaub" value="25 Tage" />
        <KpiCard title="Genommen" value="0 Tage" />
        <KpiCard title="Ausstehend" value="11 Tage" subtitle="1 Antrag" />
      </div>
      <div className="rounded-2xl border bg-white p-6">
        <h2 className="text-xl font-semibold">Kalender</h2>
        <div className="mt-4 grid grid-cols-7 gap-2 text-center text-sm text-slate-500">
          {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((d) => <div key={d}>{d}</div>)}
          {Array.from({ length: 35 }).map((_, idx) => <div key={idx} className="h-20 rounded border bg-slate-50" />)}
        </div>
      </div>
    </section>
  );
}
