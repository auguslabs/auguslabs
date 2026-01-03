import React, { useState } from 'react';
import { QuickContactModal } from './ui/QuickContactModal';

/**
 * Componente que maneja el botón y modal de contacto rápido
 * Se puede usar en cualquier página de Astro con client:load
 */
export function ContactQuickButton() {
  const [isQuickModalOpen, setIsQuickModalOpen] = useState(false);

  const handleQuickContactSubmit = (email: string, subject: string) => {
    // Aquí iría la lógica para enviar el contacto rápido
    console.log('Quick contact:', { email, subject });
    alert(`Thank you! We'll contact you at ${email} soon about: ${subject}`);
  };

  return (
    <>
      <QuickContactModal
        isOpen={isQuickModalOpen}
        onClose={() => setIsQuickModalOpen(false)}
        onSubmit={handleQuickContactSubmit}
      />
      <button
        onClick={() => setIsQuickModalOpen(true)}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors"
        style={{
          backgroundColor: '#07549b',
          color: 'white'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#064080';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#07549b';
        }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Quick Contact
      </button>
    </>
  );
}
