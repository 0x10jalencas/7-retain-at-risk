// DO NOT RENDER PII – use aggregate hooks only

import React from 'react';
import { useAnonymizedData } from '../context/AnonymizedDataContext';

// Reusable SDSU-palette risk badge
function RiskBadge({ level }) {
  const styles = {
    low:    { label: 'Low',    classes: 'bg-slate-100 text-slate-700'  },
    medium: { label: 'Medium', classes: 'bg-amber-100 text-amber-800' }, // Aztec Gold tone
    high:   { label: 'High',   classes: 'bg-rose-100  text-rose-800'  }, // Scarlet tint
  };
  const style = styles[level] || styles.low;
  return (
    <span aria-label={`${style.label} risk`}
          className={`inline-block px-2 py-1 rounded text-xs font-medium ${style.classes}`}
    >
      {style.label}
    </span>
  );
}

function RiskHeatmap() {
  const { residenceHallData } = useAnonymizedData();

  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-x-auto">
      {/* Header + legend */}
      <div className="p-6 border-b border-slate-200">
        <h3 className="text-2xl font-medium text-slate-900 mb-4">Residence Hall Risk Overview</h3>
        <div className="flex items-center gap-4 text-sm">
          <RiskBadge level="low" />
          <RiskBadge level="medium" />
          <RiskBadge level="high" />
        </div>
      </div>

      {/* Responsive risk table */}
      <div className="p-6">
        <table className="min-w-full divide-y divide-slate-200">
          <caption className="sr-only">Residence Hall Risk Overview</caption>
          <thead className="bg-slate-50">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-slate-700">Hall</th>
              <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-slate-700">Residents</th>
              <th scope="col" className="px-4 py-3 text-right text-sm font-medium text-slate-700">Risk&nbsp;%</th>
              <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-slate-700">Level</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {residenceHallData.map((hall, idx) => {
              const riskPct = Math.round(hall.riskLevel * 100);
              const level = riskPct >= 70 ? 'high' : riskPct >= 40 ? 'medium' : 'low';
              return (
                <tr key={hall.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 text-sm md:text-base font-medium text-slate-900 whitespace-nowrap">{hall.name}</td>
                  <td className="px-4 py-3 text-sm md:text-base text-slate-700 whitespace-nowrap">{hall.totalResidents}</td>
                  <td className="px-4 py-3 text-sm md:text-base text-slate-700 text-right whitespace-nowrap">{riskPct}%</td>
                  <td className="px-4 py-3 whitespace-nowrap"><RiskBadge level={level} /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RiskHeatmap;
