const fs = require('fs');
const content = `import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField, Noise } from '@react-three/postprocessing'
import { Experience } from './components/canvas/Experience'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './styles/globals.css'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.reveal-text', 
        { y: 150, opacity: 0, rotateX: -20 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.4, stagger: 0.15, ease: 'power4.out' }
      )
      gsap.fromTo('.fade-in',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.5, ease: 'power3.out' }
      )
      gsap.fromTo('.service-card',
        { y: 80, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.2, ease: 'back.out(1.2)' }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#FAFAFA] text-slate-900 overflow-x-hidden antialiased selection:bg-[#FF3E00] selection:text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 7.5], fov: 40 }} dpr={[1, 1.5]}>
          <color attach="background" args={['#F5F5F7']} />
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
          <spotLight position={[-10, 10, -10]} intensity={3} color="#FF3E00" />
          <spotLight position={[10, -10, 10]} intensity={2.5} color="#0055FF" />
          <ScrollControls pages={3.5} damping={0.2} distance={1.2}>
            <Experience />
          </ScrollControls>
          <EffectComposer disableNormalPass>
            <Bloom luminanceThreshold={1} mipmapBlur intensity={0.8} />
            <Noise opacity={0.035} />
            <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
          </EffectComposer>
        </Canvas>
      </div>

      <div className="relative z-10 w-full">
        <Header />
        
        <main className="w-full">
          <section className="min-h-[110vh] flex items-center pb-24 px-8 md:px-16 container mx-auto relative pointer-events-none">
            <div className="max-w-5xl space-y-6 font-serif pointer-events-auto mt-20">
              <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-light tracking-tight leading-[1.05] overflow-hidden">
                <span className="block reveal-text text-slate-900">Il suffit de...</span>
              </h1>
              <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-light tracking-tight leading-[1.05] overflow-hidden">
                <span className="block reveal-text text-transparent bg-clip-text bg-gradient-to-r from-[#FF3E00] to-[#FF8C00]">croire que chacun</span>
              </h2>
              <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-light tracking-tight leading-[1.05] overflow-hidden">
                <span className="block reveal-text text-slate-400">peut agir.</span>
              </h2>
              <div className="pt-16 text-xl md:text-2xl font-sans max-w-2xl text-slate-600 font-light overflow-hidden">
                <p className="fade-in leading-relaxed">
                  Nous accompagnons et soutenons les initiatives favorisant le vivre-ensemble et la participation citoyenne.
                </p>
                <div className="mt-12 fade-in pointer-events-auto">
                    <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-[#FF3E00] hover:scale-105 transition-all duration-300 shadow-xl shadow-slate-900/20">
                        Découvrir notre vision
                    </button>
                </div>
              </div>
            </div>
          </section>

          <section className="min-h-screen bg-white/70 backdrop-blur-3xl py-40 px-8 md:px-16 border-y border-slate-200 font-sans relative">
            <div className="container mx-auto">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-[#FF3E00] mb-20 px-6 border-l-2 border-[#FF3E00]">Nos Services</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                <div className="service-card group bg-white p-12 rounded-3xl shadow-lg border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF3E00] to-[#FF8C00] rounded-2xl mb-8 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-orange-500/30">
                     <span className="text-3xl text-white">✦</span>
                  </div>
                  <h4 className="text-3xl font-serif font-medium mb-6 text-slate-900">Accompagnement</h4>
                  <p className="text-slate-600 leading-relaxed font-light mb-8">
                    Renforcer les compétences des acteurs associatifs. Assurer la pérennité et la viabilité des projets. 
                    Favoriser l’autonomie des porteurs.
                  </p>
                  <p className="text-sm font-bold tracking-widest font-mono text-slate-400 group-hover:text-[#FF3E00] transition-colors">→ 70 € / HEURE</p>
                </div>

                <div className="service-card group bg-white p-12 rounded-3xl shadow-lg border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0055FF] to-[#00A3FF] rounded-2xl mb-8 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-blue-500/30">
                     <span className="text-3xl text-white">●</span>
                  </div>
                  <h4 className="text-3xl font-serif font-medium mb-6 text-slate-900">Ateliers</h4>
                  <p className="text-slate-600 leading-relaxed font-light mb-8">
                    Professionnaliser les pratiques. Renforcer les dynamiques collectives par l’échange et l\'intelligence collective des membres.
                  </p>
                  <p className="text-sm font-bold tracking-widest font-mono text-slate-400 group-hover:text-[#0055FF] transition-colors">→ 50 € / 3H — 100 € / 6H</p>
                </div>
                
                <div className="service-card group bg-white p-12 rounded-3xl shadow-lg border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8A2BE2] to-[#FF00FF] rounded-2xl mb-8 flex items-center justify-center transform group-hover:-rotate-12 transition-transform duration-500 shadow-lg shadow-purple-500/30">
                     <span className="text-3xl text-white">▲</span>
                  </div>
                  <h4 className="text-3xl font-serif font-medium mb-6 text-slate-900">Réseaux</h4>
                  <p className="text-slate-600 leading-relaxed font-light mb-8">
                    Structurer et animer, faciliter la circulation de l’information. 
                    Coordonner les actions collectives pour un impact décuplé.
                  </p>
                  <p className="text-sm font-bold tracking-widest font-mono text-slate-400 group-hover:text-[#8A2BE2] transition-colors">→ 70 € / HEURE</p>
                </div>
              </div>
            </div>
          </section>

          <section className="min-h-screen py-40 flex items-center justify-center relative overflow-hidden">
             <div className="max-w-4xl text-center space-y-16 font-serif px-8">
                 <h3 className="text-5xl md:text-7xl font-light italic text-slate-900 drop-shadow-sm">
                     Il suffit d’imaginer.
                 </h3>
                 <p className="text-2xl md:text-4xl font-sans font-light text-slate-600 leading-relaxed max-w-3xl mx-auto">
                     La <strong className="font-semibold text-slate-900">créativité</strong>, l’<strong className="font-semibold text-slate-900">art</strong> et la <strong className="font-semibold text-slate-900">culture</strong> sont des leviers pour construire ensemble un monde plus ouvert, vibrant et plus humain.
                 </p>
             </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}

export default App
`
fs.writeFileSync('website/src/App.tsx', content);
