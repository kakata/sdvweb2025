import React from 'react';
import { SectionId } from '../types';
import { VACCINE_SCHEDULE } from '../constants';
import { Syringe } from 'lucide-react';

export const VaccineSchedule: React.FC = () => {
  return (
    <section id={SectionId.VACCINES} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Esquema Nacional de Vacunación</h2>
          <div className="w-24 h-1 bg-[#EF4444] mx-auto"></div>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Guía rápida de inmunización recomendada para niños y adolescentes en la República Dominicana.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#EF4444] text-white">
                  <th className="p-4 md:p-6 text-lg font-semibold border-b border-red-500 w-1/3">Edad</th>
                  <th className="p-4 md:p-6 text-lg font-semibold border-b border-red-500">Vacunas</th>
                </tr>
              </thead>
              <tbody>
                {VACCINE_SCHEDULE.map((item, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-red-50/30'} hover:bg-red-50 transition-colors duration-150`}
                  >
                    <td className="p-4 md:p-6 border-b border-slate-100 font-medium text-[#1A1A1A] flex items-center gap-2">
                      <Syringe size={16} className="text-[#EF4444]" />
                      {item.age}
                    </td>
                    <td className="p-4 md:p-6 border-b border-slate-100 text-slate-600">
                      <div className="flex flex-wrap gap-2">
                        {item.vaccines.map((v, i) => (
                          <span key={i} className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                            {v}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-yellow-50 text-yellow-800 text-sm border-t border-yellow-100">
            <strong>Nota:</strong> Este esquema está sujeto a actualizaciones por el Ministerio de Salud Pública. Consulte siempre a su pediatra.
          </div>
        </div>
      </div>
    </section>
  );
};