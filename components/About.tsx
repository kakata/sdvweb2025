import React from 'react';
import { SectionId } from '../types';
import { ShieldCheck, Target, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Quiénes Somos</h2>
          <div className="w-24 h-1 bg-[#EF4444] mx-auto"></div>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            La Sociedad Dominicana de Vacunología (SDV) es una entidad científica sin fines de lucro dedicada a promover la vacunación como herramienta fundamental de salud pública.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-slate-100 group hover:border-[#EF4444]/20">
            <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center text-[#EF4444] mb-6 group-hover:bg-[#EF4444] group-hover:text-white transition-colors">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Misión</h3>
            <p className="text-slate-600">
              Fomentar la educación continua sobre vacunas, apoyar la investigación científica y asesorar en políticas de inmunización para el bienestar de la población dominicana.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-slate-100 group hover:border-[#EF4444]/20">
            <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center text-[#EF4444] mb-6 group-hover:bg-[#EF4444] group-hover:text-white transition-colors">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Visión</h3>
            <p className="text-slate-600">
              Ser la entidad de referencia nacional e internacional en materia de vacunología, liderando la lucha contra las enfermedades prevenibles por vacunación.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-slate-100 group hover:border-[#EF4444]/20">
            <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center text-[#EF4444] mb-6 group-hover:bg-[#EF4444] group-hover:text-white transition-colors">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Valores</h3>
            <p className="text-slate-600">
              Ética, compromiso científico, responsabilidad social, transparencia y trabajo en equipo para garantizar la salud de nuestra comunidad.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};