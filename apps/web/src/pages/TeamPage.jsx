import KpiCard from '../components/KpiCard';

export default function TeamPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">Team</h1>
        <p className="text-slate-500">Teamübersicht und Genehmigungen</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <KpiCard title="Mitarbeiter" value="2" />
        <KpiCard title="Offene Anträge" value="1" subtitle="Warten auf Genehmigung" />
        <KpiCard title="Aktive Zeiten" value="0" subtitle="Timer laufen" />
      </div>
      <div className="rounded-2xl border bg-white p-6">
        <h2 className="text-xl font-semibold">Anträge</h2>
        <table className="mt-4 w-full text-left">
          <thead><tr><th>Mitarbeiter</th><th>Art</th><th>Zeitraum</th><th>Status</th></tr></thead>
          <tbody><tr className="border-t"><td>Tauljand Dervishi</td><td>Urlaub</td><td>17. Aug. - 31. Aug.</td><td>Ausstehend</td></tr></tbody>
        </table>
      </div>
    </section>
  );
}
