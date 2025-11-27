import React from 'react';
import { SectionId } from '../types';
import { History, Award, Users } from 'lucide-react';

export const Review: React.FC = () => {
  return (
    <section id={SectionId.REVIEW} className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Reseña Histórica</h2>
          <div className="w-24 h-1 bg-[#EF4444] mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 text-lg text-slate-700 leading-relaxed text-justify">

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#EF4444] rounded-xl flex items-center justify-center text-white shadow-lg hidden md:flex">
              <History size={24} />
            </div>
            <p className="mb-6">
              La <span className="font-semibold text-[#EF4444]">Sociedad Dominicana de Vacunología (SDV)</span> fue fundada el 19 de mayo de 2008 por un grupo de médicos interesados en proteger la salud mediante acciones de prevención primaria de las enfermedades infecciosas prevenibles por vacunación.
            </p>
            <p>
              Estos profesionales buscaban contribuir a aumentar la esperanza de calidad de vida de los ciudadanos dominicanos, especialmente de nuestros niños que son el futuro, además de los adolescentes, mujeres embarazadas, personas con enfermedades crónicas, poblaciones de riesgo por edad y a toda persona que se beneficie a través de la inmunización.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <Award className="text-[#EF4444]" size={24} />
                Nuestro Propósito
              </h3>
              <p className="text-base text-slate-600">
                La Sociedad Dominicana de Vacunología (SDV) a través de la vacunación y la promoción de la salud busca evitar las muertes innecesarias y prevenibles, disminuir las consultas médicas, emergencias, hospitalizaciones y todas las secuelas con los altos gastos que conllevan.
              </p>
              <div className="mt-4 p-4 bg-red-50 rounded-lg text-sm text-[#EF4444] italic border-l-4 border-[#EF4444]">
                "Una simple vacuna puede cambiar el curso de nuestras vidas y la de nuestros seres queridos."
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center">
              <p className="mb-4 text-base text-slate-600">
                La SDV nace de la importancia de la prevención, utilizando las vacunas cómo método de seguridad ante enfermedades que ya no deberían estar afectando nuestro país. Al enfermarnos y requerir asistencia médica por no vacunarnos nos exponemos a posibles consecuencias que pueden llegar hasta la muerte. El propósito es que seamos <strong>proactivos y no reactivos</strong>.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <p className="mb-6">
              Desde hace más de una década, nuestra sociedad se ha comprometido en difundir a la comunidad médica los avances científicos en el área, realizando más de 40 conversatorios de vacunas, varios Cursos Internacionales de Vacunas siendo el primero en el marco del Congreso Latinoamericano de Infectología Pediátrica en el año 2011 y el último desarrollado junto con el Congreso Nacional de Pediatría de 2018, también Congreso Centroamericano y del Caribe de Pediatría.
            </p>
            <p>
              La SDV se enfoca en estar en la vanguardia revisando permanentemente criterios médicos, clínicos, epidemiológicos y de análisis costo-beneficio para emitir juicios que puedan ser útiles para un uso racional de las vacunas. Constantemente promueve los programas de vacunación recomendados por las autoridades sanitarias y académicas nacionales e internacionales para apoyar las coberturas y lograr sensibilización de la importancia de esta importante herramienta de salud.
            </p>
          </div>

          <div className="bg-[#1A1A1A] text-white p-8 rounded-2xl shadow-lg border-t-4 border-[#EF4444]">
            <div className="flex items-center gap-3 mb-6">
              <Users size={28} className="text-[#EF4444]" />
              <h3 className="text-2xl font-bold">Junta Directiva Actual</h3>
            </div>
            <p className="mb-4 opacity-90">
              En la actualidad su directiva está conformada por un equipo de profesionales comprometidos con la salud pública:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 mt-2 bg-red-400 rounded-full flex-shrink-0"></span>
                <span><strong>Dr. Marcos Díaz Guillén</strong> (Presidente)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 mt-2 bg-red-400 rounded-full flex-shrink-0"></span>
                <span><strong>Dr. Félix Martínez Doñé</strong> (Vicepresidente)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 mt-2 bg-red-400 rounded-full flex-shrink-0"></span>
                <span><strong>Dra. Brunilda Rodríguez Domínguez</strong> (Secretaria)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 mt-2 bg-red-400 rounded-full flex-shrink-0"></span>
                <span><strong>Dr. José Brea del Castillo</strong> (Tesorero)</span>
              </li>
              <li className="flex items-start gap-2 col-span-2">
                <span className="w-2 h-2 mt-2 bg-red-400 rounded-full flex-shrink-0"></span>
                <span><strong>Vocales:</strong> Dr. Jorge Vargas, Dr. Manuel E. Colomé y Dr. César Atiles López.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};