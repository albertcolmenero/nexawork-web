"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Quote, Star, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#efede1]/20 via-white to-[#076062]/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#076062]/5 to-transparent"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Image
                src="/nexasinfondo.png"
                alt="Nexawork Logo"
                width={300}
                height={120}
                className="mx-auto mb-8"
                priority
              />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              No odias tu trabajo.{" "}
              <span className="text-gradient">
                Simplemente te conformaste
              </span>{" "}
              con uno que no encaja contigo.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-light text-[#47888a] font-serif">
                Reencamina tu vida profesional
              </h2>
              <h2 className="text-2xl md:text-3xl font-light text-[#47888a] font-serif">
                Recupera la ilusión profesional
              </h2>
              <h2 className="text-2xl md:text-3xl font-light text-[#47888a] font-serif">
                Revitaliza tu vida profesional
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8"
            >
              <div className="aspect-video bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <div className="text-white text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-white ml-1"></div>
                  </div>
                  <p className="text-lg">Video de presentación próximamente</p>
                </div>
              </div>
              
              <p className="text-xl md:text-2xl font-serif text-[#333333] leading-relaxed">
                Yo también estuve ahí: con un buen sueldo, responsabilidades y cero ilusión.
                <br />
                Por eso hoy acompaño a personas como tú a descubrir en qué son realmente buenas
                y a reinventarse hacia una profesión digital que sí les represente.
                <br />
                <strong>Sin humo. Con cabeza. Y desde lo que ya tienen dentro.</strong>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button size="lg" className="text-lg px-12 py-6 rounded-full shadow-xl transform hover:scale-105">
                👉 QUIERO EXPLORAR MI PROFESIÓN IDEAL
                <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Identification Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {[
                "Tienes trabajo… pero no tienes energía.",
                "No odias tu vida, pero sabes que no es la que quieres.",
                "Has pensado en cambiar… pero no sabes ni por dónde empezar.",
                "Y cada vez que lo piensas, te asusta cagarla y arrepentirte.",
                "Mientras tanto, se te está yendo el tiempo en algo que ya no te representa."
              ].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg"
                >
                  <CheckCircle className="w-8 h-8 text-[#076062] flex-shrink-0 mt-1" />
                  <p className="text-xl text-[#333333] leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-16 bg-white rounded-2xl p-8 shadow-xl"
            >
              <p className="text-2xl font-serif text-[#333333] mb-4">Y lo entiendo.</p>
              <p className="text-3xl font-bold text-gradient">
                Porque no te falta motivación… te falta dirección.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Paradigm Shift Section */}
      <section className="py-20 bg-gradient-to-r from-[#076062] to-[#47888a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-12"
            >
              Tu problema no es la falta de opciones.{" "}
              <span className="text-[#efede1]">Es no saber cuál encaja contigo.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12"
            >
              <p className="text-xl leading-relaxed mb-6">
                Hoy hay miles de profesiones digitales. Muchas son reales, viables y bien pagadas.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                Pero si eliges desde el miedo, desde el agobio o copiando al de al lado… vas a acabar igual de perdido.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                No se trata de inventarte. Ni de empezar de cero.
              </p>
              <p className="text-xl leading-relaxed font-bold">
                Se trata de redescubrir lo que ya tienes: tus habilidades naturales, tu forma de trabajar,
                y el estilo de vida que realmente quieres.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl font-serif text-[#efede1] italic"
            >
              No hay una única profesión ideal. Hay una que es ideal para ti.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#333333]">
                No soy coach.{" "}
                <span className="text-gradient">Soy alguien que lo ha vivido por dentro.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-subtle rounded-2xl p-8 mb-12"
            >
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Durante más de 10 años lideré equipos en una gran empresa.
                </p>
                <p>
                  Entrevisté a cientos de personas. Acompañé a muchos a crecer, a reinventarse, a ascender.
                </p>
                <p>
                  Y lo hice con una obsesión: <strong>ver más allá del currículum.</strong>
                </p>
                <p className="text-xl font-bold text-[#076062]">
                  Hasta que un día… me tocó hacerlo conmigo.
                </p>
                <p className="text-xl font-serif italic">
                  Esto no es solo teoría. Es lo que ya he hecho con cientos de personas… y lo que ahora hago contigo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#333333]">
                Esto no va de cambiar de trabajo.{" "}
                <span className="text-gradient">Va de construir una profesión que sí te encaje.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 mb-12"
            >
              {[
                "Te ayudo a descubrir tus habilidades naturales",
                "Te acompaño a redefinir el estilo de vida que realmente quieres",
                "Juntos trazamos un plan claro y realista para dejar tu trabajo actual",
                "Exploramos profesiones digitales alineadas contigo",
                "Te doy feedback directo, estrategias prácticas y soporte real"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-lg"
                >
                  <CheckCircle className="w-8 h-8 text-[#076062] flex-shrink-0 mt-1" />
                  <p className="text-xl leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center bg-white rounded-2xl p-8 shadow-xl"
            >
              <p className="text-2xl font-serif text-[#333333] italic">
                Esto no es un curso. Es un acompañamiento para tomar acción… con cabeza.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#333333]">
                Historias reales de personas que decidieron{" "}
                <span className="text-gradient">dejar de aguantarse.</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  name: "Judith",
                  text: "Estaba perdida. Tenía trabajo, pero cero ilusión. Carlos me ayudó a entender qué se me daba bien… y eso lo cambió todo."
                },
                {
                  name: "Raúl",
                  text: "Yo no quería más cursos. Quería claridad. Y eso es lo que encontré."
                },
                {
                  name: "Lorena",
                  text: "Pensaba que para reinventarme tenía que dejarlo todo. Y no. Lo hice desde lo que ya era, y funcionó."
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-subtle rounded-2xl p-8 shadow-lg"
                >
                  <Quote className="w-8 h-8 text-[#076062] mb-4" />
                  <p className="text-lg leading-relaxed mb-6 font-serif italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="font-bold text-[#076062]">— {testimonial.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center text-2xl font-serif text-[#333333] italic"
            >
              Ellos también dudaron. Pero tomaron una decisión. Y eso lo cambió todo.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#076062] to-[#47888a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-8"
            >
              No te hace falta más tiempo.{" "}
              <span className="text-[#efede1]">Te hace falta una decisión.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12"
            >
              <p className="text-xl leading-relaxed mb-6">
                Cada semana trabajo con un número reducido de personas para poder acompañarlas de verdad.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                Este proceso no va de hacer más. Va de hacer mejor. Con estrategia, con claridad y con alguien que ya lo ha vivido.
              </p>
              <p className="text-xl leading-relaxed font-bold">
                Si esto te está resonando, no lo guardes para "otro momento". Escríbeme y lo hablamos sin compromiso.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-[#076062] hover:bg-[#efede1] text-xl px-12 py-6 rounded-full shadow-xl transform hover:scale-105 font-bold"
              >
                <MessageCircle className="mr-2" />
                👉 QUIERO REINVENTARME CON SENTIDO
                <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
