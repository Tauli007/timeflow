export default function EinstellungenPage() {
  const tabs = ['Firma', 'Mitarbeiter', 'Teams', 'Feiertage', 'Module'];
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">Einstellungen</h1>
        <p className="text-slate-500">Verwalte Firmen- und Mitarbeitereinstellungen</p>
      </div>
      <div className="inline-flex rounded-lg border bg-white p-1 text-sm">
        {tabs.map((tab, i) => (
          <button key={tab} className={`rounded px-3 py-1 ${i === 0 ? 'bg-slate-100 font-semibold' : ''}`}>{tab}</button>
        ))}
      </div>
      <div className="rounded-2xl border bg-white p-6">
        <h2 className="text-xl font-semibold">Firmaeinstellungen</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <input className="rounded-lg border p-2" defaultValue="DT Planung GmbH" />
          <input className="rounded-lg border p-2" defaultValue="40 Wochenstunden" />
        </div>
        <button className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-white">Speichern</button>
      </div>
    </section>
  );
}
