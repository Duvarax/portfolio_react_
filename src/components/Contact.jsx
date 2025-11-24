import React, { useState } from 'react'
import { Mail, User, MessageSquare, Send } from 'lucide-react';
import Button from './Button';
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:min-w-5xl mx-auto ">
      <h2 className="text-3xl font-bold text-white mb-2 text-center">Contactame</h2>
      <p className='opacity-50 text-center mb-8'>Puedes contactarme a través del formulario o directamente por correo</p>

      <form onSubmit={handleSubmit} className="bg-[rgba(0,0,49,0.55)] border border-[rgb(0,195,255)]/20 backdrop-blur-md rounded-xl p-8 space-y-6">
        
        {/* Nombre */}
        <div>
          <label className="flex items-center gap-2 text-white mb-2">
            <User size={18} className="text-[rgb(0,195,255)]" />
            Nombre
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
            className="w-full bg-black/30 border border-[rgb(0,195,255)]/20 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-[rgb(0,195,255)]/50 transition duration-300"
          />
        </div>

        {/* Email */}
        <div>
          <label className="flex items-center gap-2 text-white mb-2">
            <Mail size={18} className="text-[rgb(0,195,255)]" />
            Correo
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="tu@email.com"
            className="w-full bg-black/30 border border-[rgb(0,195,255)]/20 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-[rgb(0,195,255)]/50 transition duration-300"
          />
        </div>

        {/* Mensaje */}
        <div>
          <label className="flex items-center gap-2 text-white mb-2">
            <MessageSquare size={18} className="text-[rgb(0,195,255)]" />
            Mensaje
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tu mensaje..."
            rows="5"
            className="w-full bg-black/30 border border-[rgb(0,195,255)]/20 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-[rgb(0,195,255)]/50 transition duration-300 resize-none"
          />
        </div>

        {/* Botón */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[rgb(0,195,255)]/20 hover:bg-[rgb(0,195,255)]/30 border border-[rgb(0,195,255)]/50 text-[rgb(0,195,255)] py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition duration-300 disabled:opacity-50"
        >
          <Send size={18} />
          {loading ? 'Enviando...' : 'Enviar Mensaje'}
        </button>

        {/* Mensaje de éxito */}
        {success && (
          <div className="bg-green-500/20 border border-green-500/50 text-green-300 p-4 rounded-lg text-center">
            ¡Mensaje enviado correctamente!
          </div>
        )}
      </form>
      <div>
       
      </div>
    </div>
  )
}

export default Contact