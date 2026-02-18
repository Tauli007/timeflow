import KpiCard from '../components/KpiCard';

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-slate-500">Überblick über Zeiten, Anträge und Budgetrisiken.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <KpiCard title="Stunden diese Woche" value="18.0h" />
        <KpiCard title="Stunden im Monat" value="76.5h" />
        <KpiCard title="Offene Anträge" value="3" />
        <KpiCard title="Budget-Risiken" value="1" subtitle="Projekt Alpha" />
      </div>
    </section>
  );
}
