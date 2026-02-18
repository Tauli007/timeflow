import { NavLink, Outlet } from 'react-router-dom';
import { Calendar, Clock3, FolderKanban, LayoutDashboard, Settings, Users } from 'lucide-react';

const links = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/zeiterfassung', label: 'Zeiterfassung', icon: Clock3 },
  { to: '/projekte', label: 'Projekte', icon: FolderKanban },
  { to: '/urlaub', label: 'Urlaub & Abwesenheit', icon: Calendar },
  { to: '/team', label: 'Team', icon: Users },
  { to: '/einstellungen', label: 'Einstellungen', icon: Settings }
];

export default function AppShell() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex min-h-screen">
        <aside className="w-64 border-r bg-white flex flex-col">
          <div className="p-6 text-2xl font-semibold text-indigo-600">TimeFlow</div>
          <nav className="space-y-1 px-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-100'}`
                }
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto border-t p-4 text-sm text-slate-600">Admin · admin@timeflow.local</div>
        </aside>
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
