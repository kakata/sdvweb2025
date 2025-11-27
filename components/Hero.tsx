import React from 'react';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative bg-[#1A1A1A] text-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="/images/hero-bg.png"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Protegiendo el futuro de la <span className="text-[#EF4444]">República Dominicana</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
            Promovemos la vacunación como la herramienta más efectiva para la prevención de enfermedades y el bienestar de nuestra sociedad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`#${SectionId.VACCINES}`}
              className="bg-[#EF4444] hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-center shadow-lg hover:shadow-red-500/30"
            >
              Ver Esquema
            </a>
            <a
              href={`#${SectionId.ABOUT}`}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-center backdrop-blur-sm border border-white/20"
            >
              Conócenos
            </a>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-10">
          <img src="/images/hero-doctor.png" alt="Microscopio médico en laboratorio" className="rounded-xl shadow-2xl border-4 border-white/10" />
        </div>
      </div>
    </section>
  );
};