import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { masterApi } from '../services';

const COLORS = ['#6366f1', '#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#6b7280', '#78716c'];

export default function DashboardPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    masterApi
      .dashboard()
      .then(({ data: res }) => setData(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-slate-500">Loading dashboard...</div>;
  }

  const chartData = (data?.byStatus || []).map((s) => ({
    name: s.status.replace(/_/g, ' '),
    value: Number(s.count),
  }));

  const kpis = [
    { label: 'Total Assets', value: data?.totalAssets || 0, color: 'text-slate-900 bg-slate-50' },
    { label: 'Available Assets', value: data?.assetsAvailable || 0, color: 'text-indigo-600 bg-indigo-50/50' },
    { label: 'Allocated Assets', value: data?.assetsAllocated || 0, color: 'text-sky-600 bg-sky-50/50' },
    { label: 'Active Bookings', value: data?.activeBookings || 0, color: 'text-emerald-600 bg-emerald-50/50' },
    { label: 'Repairs (Today)', value: data?.maintenanceToday || 0, color: 'text-amber-600 bg-amber-50/50' },
    { label: 'Pending Transfers', value: data?.pendingTransfers || 0, color: 'text-purple-600 bg-purple-50/50' },
    { label: 'Upcoming Returns', value: data?.upcomingReturns || 0, color: 'text-blue-600 bg-blue-50/50' },
    { label: 'Overdue Returns ⚠️', value: data?.overdueReturns || 0, color: 'text-red-700 bg-red-50 border border-red-200' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500">Overview of your asset portfolio</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className={`rounded-xl border border-slate-200 p-5 shadow-sm ${kpi.color}`}>
            <p className="text-sm font-medium opacity-80">{kpi.label}</p>
            <p className="mt-2 text-3xl font-bold">{kpi.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold text-slate-900">Assets by Status</h3>
          {chartData.length ? (
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label>
                  {chartData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-sm text-slate-500">No asset data yet</p>
          )}
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold text-slate-900">Quick Actions</h3>
          <div className="space-y-3">
            <a
              href="/assets"
              className="block rounded-lg border border-slate-200 px-4 py-3 text-sm hover:bg-slate-50"
            >
              View all assets →
            </a>
            <a
              href="/requests"
              className="block rounded-lg border border-slate-200 px-4 py-3 text-sm hover:bg-slate-50"
            >
              Manage assignment requests →
            </a>
            <a
              href="/assignments"
              className="block rounded-lg border border-slate-200 px-4 py-3 text-sm hover:bg-slate-50"
            >
              View active assignments →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
