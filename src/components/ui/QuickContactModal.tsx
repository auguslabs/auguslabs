import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface QuickContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string, subject: string) => void;
}

/**
 * Modal de Contacto Rápido
 * Permite a los usuarios dejar solo su email para ser contactados
 * Basado en mejores prácticas de UX: reducir fricción para usuarios que prefieren ser contactados
 */
export function QuickContactModal({ isOpen, onClose, onSubmit }: QuickContactModalProps) {
  const [email, setEmail] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Asegurar que el componente esté montado antes de usar portal
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Resetear formulario cuando se abre/cierra
  useEffect(() => {
    if (!isOpen) {
      setEmail('');
      setSelectedSubject('');
      setIsSubmitting(false);
    }
  }, [isOpen]);

  // Manejo de teclado y bloqueo de scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Opciones de asunto predefinidas
  const subjectOptions = [
    {
      id: 'learn-more',
      label: 'I want to learn more about your company',
      value: 'I want to learn more about your company',
    },
    {
      id: 'services',
      label: 'I want to know about your services',
      value: 'I want to know about your services',
    },
    {
      id: 'project',
      label: 'I have a project in mind',
      value: 'I have a project in mind',
    },
    {
      id: 'other',
      label: 'Other',
      value: 'Other',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      return;
    }

    if (!selectedSubject) {
      return;
    }

    setIsSubmitting(true);
    
    // Simular envío (aquí iría la lógica real)
    await new Promise(resolve => setTimeout(resolve, 500));
    
    onSubmit(email, selectedSubject);
    setIsSubmitting(false);
    onClose();
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  if (!isOpen || !mounted) {
    return null;
  }

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2 hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Contenido del modal */}
        <div className="mt-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#07549b' }}>
            Prefer to be contacted?
          </h2>
          <p className="text-gray-600 mb-6">
            Leave your email and we'll reach out to you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Campo de email */}
            <div>
              <label htmlFor="quick-email" className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="quick-email"
                value={email}
                onChange={handleEmailChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                style={{ color: '#07549b' }}
                autoFocus
              />
            </div>

            {/* Selección de asunto */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                What would you like to discuss? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {subjectOptions.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <input
                      type="radio"
                      name="subject"
                      value={option.value}
                      checked={selectedSubject === option.value}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                      className="mr-3 h-4 w-4"
                      style={{ accentColor: '#07549b' }}
                      required
                    />
                    <span className="text-sm text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              disabled={isSubmitting || !email.trim() || !selectedSubject}
              className="w-full font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: isSubmitting || !email.trim() || !selectedSubject ? '#9b4f07' : '#9b4f07',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting && email.trim() && selectedSubject) {
                  e.currentTarget.style.backgroundColor = '#8a4606';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting && email.trim() && selectedSubject) {
                  e.currentTarget.style.backgroundColor = '#9b4f07';
                }
              }}
            >
              {isSubmitting ? 'Sending...' : 'Contact Me'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
