"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-white overflow-hidden"
               style={{ paddingBottom: "100px" }}>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="max-w-5xl mx-auto"
               style={{
                 backgroundImage: "url('/19.png')",
                 backgroundPosition: "right -50px bottom -80px",
                 backgroundSize: "400px auto",
                 backgroundRepeat: "no-repeat"
               }}>
            <div>
              {/* Centered Logo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                className="h-20 flex items-center justify-center overflow-hidden mb-6"
                >
                  <Image
                    src="/nexasinfondo.png"
                    alt="Nexawork Logo"
                  width={400}
                  height={160}
                    priority
                  />
                </motion.div>
                
              {/* Hero Text Content - Left Aligned */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-[#323232] leading-tight text-left max-w-5xl"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                >
                  Cómo dejar de sentirte perdido
                  en tu trabajo y diseñar un plan{" "}
                  <span className="text-[#468586]">real</span>{" "}
                  para entrar al mundo
                  <br />
                  <span className="text-[#468586]">digital en 90 días</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-[#323232] leading-relaxed text-left max-w-5xl mt-6"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                >
                  Sin dejar tu empleo ni dar <strong>saltos al vacío</strong>. Con un <strong>método probado</strong>{" "}
                <br />para descubrir tus <strong>habilidades</strong> y usarlas en tu favor.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 text-left"
                >
                <a href="https://wa.me/34653634942" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="bg-[#468586] hover:bg-[#1d5f61] text-white text-lg px-8 py-4 rounded-full shadow-xl transform hover:scale-105 font-bold"
                    style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                  >
                    QUIERO DESCUBRIR MI CAMINO DIGITAL
                    <ArrowRight className="ml-2" />
                  </Button>
                </a>
                </motion.div>
              </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden"
               style={{
                 backgroundColor: "#f8f9fa",
                 minHeight: "400px",
               }}>
        <div className="container mx-auto ">
          <div className="max-w-5xl mx-auto px-4"
               style={{
                 backgroundImage: "url('/22.png')",
                 backgroundPosition: "right -50px center",
                 backgroundSize: "500px auto",
                 backgroundRepeat: "no-repeat",
                 paddingTop: "200px",
                 paddingBottom: "200px"
               }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <p className="text-2xl md:text-3xl leading-relaxed mb-12 text-left"
                 style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                En solo <span className="text-[#468586] font-bold">unas semanas</span> empezarás a ver con <span className="text-[#468586] font-bold">claridad</span> qué <span className="text-[#468586] font-bold">profesiones digitales encajan contigo</span> y cómo puedes <span className="text-[#468586] font-bold">iniciar</span> tu transición <span className="text-[#468586] font-bold">sin dejarlo todo de golpe</span>.
              </p>

              <div className="text-center">
                <a href="https://wa.me/34653634942" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-[#468586] hover:bg-[#1d5f61] text-white text-xl px-12 py-4 rounded-full shadow-xl transform hover:scale-105 font-bold uppercase"
                    style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                  >
                    VER CÓMO FUNCIONA
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perfect Timing Section */}
      <section style={{ backgroundColor: "#468586", paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto"
               style={{
                 backgroundImage: "url('/23.png')",
                 backgroundPosition: "right -50px bottom -80px",
                 backgroundSize: "500px auto",
                 backgroundRepeat: "no-repeat"
               }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-12 text-white"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                Estás en el momento indicado si...
              </h2>
            </motion.div>

              <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {[
                "Sientes que estás perdiendo tiempo en un trabajo que no te llena.",
                "Tienes miedo de mirar atrás en 5 años y seguir en el mismo sitio.",
                "Te comparas con quienes ya encontraron su camino y te sientes atrás.",
                "Hablas mucho de cambiar, pero no sabes por dónde empezar.",
                "Sabes que tienes potencial, pero no logras enfocarlo."
              ].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 flex-shrink-0 mt-1">
                    <Image
                      src="/21.png"
                      alt="Icon"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xl text-white leading-relaxed"
                     style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                    {text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perfect Timing Section - White */}
      <section style={{ backgroundColor: "#ffffff", paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto"
               style={{
                 backgroundImage: "url('/22.png')",
                 backgroundPosition: "right -50px bottom -80px",
                 backgroundSize: "500px auto",
                 backgroundRepeat: "no-repeat"
               }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-12 text-[#323232]"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                Lo que <span className="text-[#468586]">realmente</span> quieres conseguir
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {[
                "Tener claridad sobre qué camino seguir.",
                "Sentir motivación al levantarte cada día.",
                "Ganar libertad de horarios, ubicación y decisiones.",
                "Hacer algo que te represente y te dé orgullo.",
                "Usar tu talento para aportar valor y sentirte reconocido."
              ].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 flex-shrink-0 mt-1"
                       style={{
                         backgroundImage: "url('/20.png')",
                         backgroundSize: "contain",
                         backgroundPosition: "center top -5px",
                         backgroundRepeat: "no-repeat",
                         overflow: "hidden"
                       }}>
                  </div>
                  <p className="text-xl text-[#323232] leading-relaxed"
                     style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                    {text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section style={{ backgroundColor: "#f8f9fa", paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-[#323232]"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                Un proceso claro en <span className="text-[#468586]">3 pasos</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: "/24.png",
                  title: "INTEGRACIÓN",
                  text: "Identificamos tus habilidades naturales, valores y motivaciones",
                  boldWords: ["habilidades"]
                },
                {
                  icon: "/25.png",
                  title: "ANÁLISIS",
                  text: "Diseñamos tu visión de vida y exploramos opciones digitales reales.",
                  boldWords: ["visión", "reales"]
                },
                {
                  icon: "/26.png",
                  title: "DESARROLLO",
                  text: "Creamos tu plan de transición: claro, accionable y adaptado a ti.",
                  boldWords: ["plan", "de", "transición"]
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-[#468586] p-8 rounded-none text-white text-center"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                >
                  <div className="w-16 h-16 mx-auto mb-6"
                       style={{
                         backgroundImage: `url('${step.icon}')`,
                         backgroundSize: "contain",
                         backgroundPosition: "center",
                         backgroundRepeat: "no-repeat"
                       }}>
                </div>
                  <h3 className="text-2xl font-black mb-4 uppercase">{step.title}</h3>
                  <p className="text-lg leading-relaxed">
                    {step.text.split(' ').map((word, wordIndex) => {
                      const isBold = step.boldWords.some(boldWord =>
                        word.toLowerCase().includes(boldWord.toLowerCase())
                      );
                      return isBold ? (
                        <span key={wordIndex} className="font-bold">{word} </span>
                      ) : (
                        <span key={wordIndex}>{word} </span>
                      );
                    })}
                  </p>
              </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <p className="text-xl text-[#323232] italic max-w-4xl mx-auto"
                 style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                Este no es un curso. Es un acompañamiento práctico para que tengas dirección real.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white" style={{ backgroundColor: "#ffffff", paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-[#323232]"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                Lo que dicen quienes ya pasaron por <span className="text-[#468586]">aquí</span>
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
                  <Quote className="w-8 h-8 text-[#1d5f61] mb-4" />
                  <p className="text-lg leading-relaxed mb-6 font-medium italic"
                     style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="font-bold text-[#1d5f61]"
                          style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>— {testimonial.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center text-2xl font-medium text-[#323232] italic"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            >
              Ellos también dudaron. Pero tomaron una decisión. Y eso lo cambió todo.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Hero Replica Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-white overflow-hidden"
               style={{ backgroundColor: "#ffffff", paddingBottom: "100px" }}>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="max-w-5xl mx-auto"
               style={{
                 
               }}>
            <div className="text-center">
              {/* Centered Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="h-20 flex items-center justify-center overflow-hidden mb-8 mx-auto"
              >
                <Image
                  src="/nexasinfondo.png"
                  alt="Nexawork Logo"
                  width={400}
                  height={160}
                  priority
                />
              </motion.div>

              {/* Hero Text Content - Center Aligned */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-[#323232] leading-tight text-center max-w-5xl mx-auto"
                style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
              >
                No necesitas más tiempo.
                <br />
                <span className="text-[#468586]">Necesitas más claridad.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-[#323232] leading-relaxed text-center max-w-4xl mx-auto mt-8"
                style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
              >
                Seguir esperando &ldquo;<span className="text-[#468586]">al momento perfecto</span>&rdquo; solo alarga tu <span className="text-[#468586]">vacío</span>.
                <br />
                La <span className="text-[#468586]">decisión</span> de empezar es la que <span className="text-[#468586]">cambia todo</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-10 text-center"
              >
                <a href="https://wa.me/34653634942" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-[#468586] hover:bg-[#1d5f61] text-white text-lg px-12 py-4 rounded-full shadow-xl transform hover:scale-105 font-bold uppercase"
                    style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                  >
                    QUIERO CLARIDAD AHORA
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Identification Section */}
      {/* <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
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
                  <CheckCircle className="w-8 h-8 text-[#1d5f61] flex-shrink-0 mt-1" />
                  <p className="text-xl text-[#323232] leading-relaxed"
                     style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>{text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-16 bg-white rounded-2xl p-8 shadow-xl"
            >
              <p className="text-2xl font-thin text-[#323232] mb-4"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>Y lo entiendo.</p>
              <p className="text-3xl font-black text-[#1d5f61]"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                Porque no te falta motivación… te falta dirección.
              </p>
            </motion.div>
          </div>
        </div>
      </section>*/}

      {/* Paradigm Shift Section */}
      {/* <section className="py-20 bg-gradient-to-r from-[#1d5f61] to-[#468586]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-black mb-12"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            >
              Tu problema no es la falta de opciones.{" "}
              <span className="text-[#f7f8f8]">Es no saber cuál encaja contigo.</span>
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
              className="text-3xl font-thin text-[#f7f8f8] italic"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            >
              No hay una única profesión ideal. Hay una que es ideal para ti.
            </motion.p>
          </div>
        </div>
      </section>*/}

      {/* Authority Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-[#323232]"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                No soy coach.{" "}
                <span className="text-[#468586]">Soy alguien que lo ha vivido por dentro.</span>
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
                <p className="text-xl font-bold text-[#1d5f61]"
                    style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                  Hasta que un día… me tocó hacerlo conmigo.
                </p>
                <p className="text-xl font-thin italic text-[#abc2c2]"
                    style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                  Esto no es solo teoría. Es lo que ya he hecho con cientos de personas… y lo que ahora hago contigo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>*/}

      {/* Benefits Section */}
      {/* <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-[#323232]"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                Esto no va de cambiar de trabajo.{" "}
                <span className="text-[#468586]">Va de construir una profesión que sí te encaje.</span>
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
                  <CheckCircle className="w-8 h-8 text-[#1d5f61] flex-shrink-0 mt-1" />
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
              <p className="text-2xl font-thin text-[#323232] italic"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                Esto no es un curso. Es un acompañamiento para tomar acción… con cabeza.
              </p>
            </motion.div>
          </div>
        </div>
      </section>*/}

      

      {/* Final CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-[#1d5f61] to-[#468586]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-black mb-8"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            >
              No te hace falta más tiempo.{" "}
              <span className="text-[#f7f8f8]">Te hace falta una decisión.</span>
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
                Si esto te está resonando, no lo guardes para &ldquo;otro momento&rdquo;. Escríbeme y lo hablamos sin compromiso.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-[#1d5f61] hover:bg-[#f7f8f8] text-xl px-12 py-6 rounded-full shadow-xl transform hover:scale-105 font-bold"
                style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
              >
                <MessageCircle className="mr-2" />
                👉 QUIERO REINVENTARME CON SENTIDO
                <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
