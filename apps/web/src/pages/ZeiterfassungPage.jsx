export default function ZeiterfassungPage() {
  return (
    <section className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold">Zeiterfassung</h1>
          <p className="text-slate-500">Erfasse und verwalte deine Arbeitszeiten.</p>
        </div>
        <div className="space-x-2">
          <button className="rounded-lg border bg-white px-4 py-2">Export</button>
          <button className="rounded-lg bg-slate-900 px-4 py-2 text-white">Manuell erfassen</button>
        </div>
      </div>
      <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 p-10 text-center text-white">
        <p>Bereit zum Starten</p>
        <p className="text-6xl font-bold">00:00:00</p>
        <button className="mt-6 rounded-full bg-white px-8 py-2 font-medium text-indigo-700">Starten</button>
      </div>
      <div className="rounded-2xl border bg-white p-6">
        <h2 className="mb-4 text-xl font-semibold">Einträge</h2>
        <table className="w-full text-left text-sm">
          <thead className="text-slate-500">
            <tr><th>Datum</th><th>Zeit</th><th>Projekt</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr className="border-t"><td>17.02.2026</td><td>07:00 - 17:00</td><td>Testprojekt Tauli</td><td><span className="rounded bg-slate-100 px-2 py-1">Bearbeitet</span></td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
