'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function TallerPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    privacyPolicy: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState<typeof videoTestimonials[0] | null>(null)

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

  const openVideoModal = (video: typeof videoTestimonials[0]) => {
    setCurrentVideo(video)
    setIsModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsModalOpen(false)
    setCurrentVideo(null)
  }

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeVideoModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey)
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  const videoTestimonials = [
    {
      id: 1,
      name: "Eloi",
      role: "",
      youtubeId: "4h5BEJ9XhjE", // Mock YouTube ID - replace with real one
      thumbnail: "/1.png", // Local image from public folder
      duration: ""
    },
    {
      id: 2,
      name: "Marta",
      role: "",
      youtubeId: "f4wrCuGjrNg", // Mock YouTube ID - replace with real one
      thumbnail: "/4.png", // Local image from public folder
      duration: ""
    },
    {
      id: 3,
      name: "Palote",
      role: "",
      youtubeId: "JOcZ_Na-x50", // Mock YouTube ID - replace with real one
      thumbnail: "/5.png", // Local image from public folder
      duration: ""
    },
    {
      id: 4,
      name: "Judith",
      role: "",
      youtubeId: "0IaBZAt_xIs", // Mock YouTube ID - replace with real one
      thumbnail: "/3.png", // Local image from public folder
      duration: ""
    },
    {
      id: 5,
      name: "Javi",
      role: "",
      youtubeId: "NvuDZrbXCpU", // Mock YouTube ID - replace with real one
      thumbnail: "/2.png", // Local image from public folder
      duration: ""
    }
  ]



  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
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
            Te hemos enviado los detalles del taller a tu email. Revisa tu bandeja de entrada y también la carpeta de spam.
          </p>
          <p className="text-sm text-gray-500">
            En 2 horas tendrás claridad total sobre tu camino digital y un plan para los próximos 90 días.
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">


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
            Cómo dejar de sentirte perdido en tu trabajo y diseñar en 2 horas tu hoja de ruta para entrar al mundo digital en solo 90 días
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 mb-12 bg-[#076062] text-white p-8 rounded-2xl"
          >
            <p className="text-xl md:text-2xl font-semibold text-center">
              Sin tener que dejar tu empleo ni dar saltos al vacío.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-center">
              Sin necesidad de saber a qué te quieres dedicar.
            </p>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              ¿Qué conseguirás en este taller?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-[#076062] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">
                Sistema probado
              </h3>
              <p className="text-gray-700">
                Desbloquearás el sistema probado para identificar tus habilidades y crear tu plan de transición profesional al mundo digital
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-[#076062] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">
                Método IAD
              </h3>
              <p className="text-gray-700">
                Aplicarás el Método "Integración, Análisis, Desarrollo" con el que identificarás tus habilidades OCULTAS (las que te harán ganar MUCHO dinero)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-[#076062] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">
                Hoja de ruta clara
              </h3>
              <p className="text-gray-700">
                Entenderás que PASOS debes dar para cambiar tu vida laboral y vivir del digital en 90 días
              </p>
            </motion.div>
          </div>
        </motion.section>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-[#333333] mb-6 text-center">
              Inscríbete GRATIS al taller de 2 horas
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
                {isSubmitting ? 'Enviando...' : 'RESERVAR MI PLAZA'}
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              100% gratuito. Sin spam. Puedes darte de baja cuando quieras.
            </p>
          </motion.div>

          {/* Hero Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <Image
              src="/test-express-hero.png"
              alt="Taller Digital - Diseña tu hoja de ruta en 2 horas"
              width={375}
              height={500}
              className="max-w-md h-auto rounded-2xl "
              priority
              unoptimized
            />
          </motion.div>
        </div>

        {/* About Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-12 text-center">
            Soy Carlos Camino 
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Aunque la mayoría me conoce más por mi primer apellido, García, mi segundo es Camino. En gallego se escribe Camiño, que es de donde viene mi familia.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Pasé 14 años en Decathlon, de vendedor a directivo, liderando equipos de más de 100 personas y gestionando proyectos de hasta 20 millones de euros. En esos años descubrí mi verdadera pasión: la selección de talento, conocer a las personas y acompañar tanto su desarrollo personal como el mío propio.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Y por eso creé Nexawork: para ayudar a personas que se sienten atrapadas en trabajos que no les llenan a descubrir sus talentos naturales y transformarlos en profesiones digitales reales, alineadas con lo que quieren y con el estilo de vida que buscan.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                No vendo humo ni promesas fáciles. He creado un programa estructurado, probado y diseñado para que en cuestión de semanas tengas claridad absoluta sobre quién eres, qué se te da bien y en qué profesión digital puedes reinventarte.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Si quieres dar el paso, aquí vas a encontrar las herramientas, el acompañamiento y la experiencia para dejar de conformarte con un trabajo que no encaja contigo y empezar a construir una vida profesional que sí lo haga.
              </p>
            </div>
            
            {/* Right Column - Image */}
            <div className="flex justify-center">
              <Image
                src="/carloscamino.JPG"
                alt="Carlos García Camiño - Fundador de Nexawork"
                width={400}
                height={500}
                className="w-full max-w-sm h-auto rounded-2xl shadow-lg"
                priority
                unoptimized
              />
            </div>
          </div>
        </motion.section>

        {/* Video Testimonials Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-12">
            Lo que dicen nuestros usuarios
          </h2>
          
          <div className="grid grid-cols-5 gap-4 lg:gap-6">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl  overflow-hidden cursor-pointer group"
                onClick={() => openVideoModal(video)}
              >
                {/* Video Thumbnail */}
                <div className="relative bg-gray-200">
                  <Image
                    src={video.thumbnail}
                    alt={`Testimonio de ${video.name}`}
                    width={400}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Play Button Overlay*/}
                  <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                    <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-0 h-0 border-l-[12px] border-l-[#076062] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                   
                  
                </div>
                
                
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Video Modal */}
        {isModalOpen && currentVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-75 transition-colors"
              >
                ✕
              </button>
              
              {/* YouTube Video */}
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1&modestbranding=1&rel=0&showinfo=0`}
                  title={`Testimonio de ${currentVideo.name}`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Video Info */}
              <div className="p-6">
                <h3 className="font-semibold text-[#333333] text-xl mb-2">
                  {currentVideo.name}
                </h3>
                <p className="text-[#076062]">
                  {currentVideo.role}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-[#076062] text-white rounded-2xl p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para diseñar tu hoja de ruta digital en 2 horas?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Cientos de personas ya han transformado su vida laboral. Tú puedes ser la siguiente.
          </p>
          <button
            onClick={() => document.getElementById('fullName')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#076062] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            RESERVAR MI PLAZA
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
