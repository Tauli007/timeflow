const projects = [
  { name: 'Test 2', customer: '-', status: 'Aktiv', hours: '4.0h' },
  { name: 'Testprojekt Tauli', customer: 'Flughafen Zürich AG', status: 'Aktiv', hours: '5.0h' }
];

export default function ProjektePage() {
  return (
    <section className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold">Projekte</h1>
          <p className="text-slate-500">Verwalte Projekte und tracke Zeiten.</p>
        </div>
        <button className="rounded-lg bg-slate-900 px-4 py-2 text-white">Neues Projekt</button>
      </div>
      <div className="inline-flex rounded-lg border bg-white p-1 text-sm">
        {['Aktiv', 'Abgeschlossen', 'Archiv', 'Alle'].map((tab, i) => (
          <button key={tab} className={`rounded px-3 py-1 ${i === 0 ? 'bg-slate-100 font-semibold' : ''}`}>{tab}</button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name} className="rounded-2xl border bg-white p-5">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-slate-500">{project.customer}</p>
            <span className="mt-2 inline-block rounded bg-emerald-100 px-2 py-1 text-xs text-emerald-700">{project.status}</span>
            <p className="mt-4 text-right font-semibold">{project.hours}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
