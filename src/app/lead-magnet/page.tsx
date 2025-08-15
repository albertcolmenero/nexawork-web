'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Star, CheckCircle, Users, Target, Award } from 'lucide-react'
import Image from 'next/image'

export default function LeadMagnetPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    privacyPolicy: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const testimonials = [
    {
      name: "María González",
      role: "Ahora Consultora Digital",
      text: "Pensaba que no tenía habilidades especiales. El test me ayudó a descubrir talentos que ni sabía que tenía. Ahora trabajo en lo que me apasiona.",
      rating: 5
    },
    {
      name: "Carlos Ruiz",
      role: "Freelancer de Marketing",
      text: "En 3 minutos descubrí más sobre mis capacidades que en años de trabajo tradicional. Fue el punto de inflexión que necesitaba.",
      rating: 5
    },
    {
      name: "Ana Martín",
      role: "Diseñadora UX/UI",
      text: "El test reveló habilidades ocultas que tenía pero que nunca había valorado. Ahora tengo una carrera que realmente me llena.",
      rating: 5
    }
  ]

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Análisis Personalizado",
      description: "Cada resultado es único y está basado en tus respuestas específicas"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Miles de Casos de Éxito",
      description: "Más de 5,000 personas han encontrado su profesión ideal con nuestro método"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Método Probado",
      description: "Desarrollado por expertos en recursos humanos y psicología laboral"
    }
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#efede1] via-white to-[#efede1] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            ¡Gracias por registrarte!
          </h2>
          <p className="text-gray-600 mb-6">
            Te hemos enviado el test a tu email. Revisa tu bandeja de entrada y también la carpeta de spam.
          </p>
          <p className="text-sm text-gray-500">
            En menos de 3 minutos descubrirás qué profesión digital encaja contigo.
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#efede1] via-white to-[#efede1]">
      {/* Header with Logo */}
      <header className="w-full py-6 px-4">
        <div className="max-w-6xl mx-auto flex justify-center">
          <Image
            src="/nexasinfondo.png"
            alt="Nexawork Logo"
            width={400}
            height={200}
            className="h-20 w-auto"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] mb-8 leading-tight font-spartan"
          >
            Descubre qué profesión digital encaja contigo según tus habilidades reales y da el giro que necesitas en tu vida laboral.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[#076062] flex items-center justify-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-500" />
              Test exprés de 3 minutos
            </h2>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#076062] flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-yellow-500" />
              Creado específicamente para descubrir habilidades OCULTAS
            </h2>
          </motion.div>
        </section>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-[#333333] mb-6 text-center">
              Accede GRATIS a tu test personalizado
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#076062] focus:border-transparent transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Tu mejor email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#076062] focus:border-transparent transition-colors"
                  placeholder="tucorreo@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Tu mejor teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#076062] focus:border-transparent transition-colors"
                  placeholder="+34 600 000 000"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  name="privacyPolicy"
                  required
                  checked={formData.privacyPolicy}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-[#076062] bg-gray-100 border-gray-300 rounded focus:ring-[#076062] focus:ring-2"
                />
                <label htmlFor="privacyPolicy" className="text-sm text-gray-600">
                  Acepto la <a href="#" className="text-[#076062] underline">política de privacidad</a> *
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#076062] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#065a5c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'QUIERO MI TEST GRATUITO'}
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              100% gratuito. Sin spam. Puedes darte de baja cuando quieras.
            </p>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white rounded-xl shadow-lg">
                <div className="text-[#076062] flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#333333] mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* About Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-8">
            Sobre Nosotros
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Somos expertos en reinvención profesional con más de 10 años de experiencia ayudando a personas a descubrir sus verdaderas habilidades y encontrar su profesión digital ideal.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nuestro método único combina psicología laboral, análisis de habilidades y conocimiento profundo del mercado digital para ofrecerte resultados precisos y actionables. No se trata de cambiar por cambiar, sino de encontrar lo que realmente encaja contigo.
            </p>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-12">
            Lo que dicen nuestros usuarios
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-[#333333]">{testimonial.name}</p>
                  <p className="text-sm text-[#076062]">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-[#076062] text-white rounded-2xl p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para descubrir tu profesión digital ideal?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Miles de personas ya han transformado su vida laboral. Tú puedes ser la siguiente.
          </p>
          <button
            onClick={() => document.getElementById('fullName')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#076062] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            EMPEZAR MI TEST AHORA
          </button>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-[#333333] text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Nexawork. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
