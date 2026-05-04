const fs = require('fs');

const content = `import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import './styles/globals.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Sequence (Initial Load)
      const tl = gsap.timeline()
      
      tl.fromTo('.hero-text span', 
        { y: 150, opacity: 0, rotateX: -60, z: -200 },
        { y: 0, opacity: 1, rotateX: 0, z: 0, duration: 1.6, stagger: 0.15, ease: 'power4.out' }
      )
      .fromTo('.hero-sub',
        { y: 50, opacity: 0, rotateX: 20 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, ease: 'power3.out' },
        "-=1"
      )

      // 2. 3D Scroll Animations for Sections
      const sections = gsap.utils.toArray('.scroll-section') as HTMLElement[]
      
      sections.forEach((section, i) => {
        // Perspective container for true 3D
        gsap.set(section, { perspective: 1500 })
        
        const card = section.querySelector('.content-card')
        const bg = section.querySelector('.bg-element')
        
        // Background Parallax
        if (bg) {
          gsap.fromTo(bg,
            { y: '-20%' },
            { 
              y: '20%', 
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
              }
            }
          )
        }

        // 3D Content Reveal
        if (card) {
          // Alternating 3D rotations based on odd/even sections
          const rotY = i % 2 === 0 ? 15 : -15
          
          gsap.fromTo(card,
            { 
              opacity: 0, 
              y: 150, 
              z: -300, 
              rotateX: 25,
              rotateY: rotY
            },
            {
              opacity: 1,
              y: 0,
              z: 0,
              rotateX: 0,
              rotateY: 0,
              duration: 1.5,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'center center',
                toggleActions: 'play reverse play reverse'
              }
            }
          )
        }
      })

      // 3. Manifesto 3D Scale and Floating
      const manifesto = document.querySelector('.manifesto-content')
      if (manifesto) {
        gsap.set(manifesto.parentElement, { perspective: 2000 })
        
        gsap.fromTo(manifesto,
          { scale: 0.8, opacity: 0, rotateX: -30, y: 100 },
          {
            scale: 1,
            opacity: 1,
            rotateX: 0,
            y: 0,
            duration: 2,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: manifesto,
              start: 'top 85%',
              end: 'center center',
              scrub: 1 // Link to scroll for smooth continuous 3D effect
            }
          }
        )
      }

    }, containerRef)
    
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#FAFAFA] text-slate-900 overflow-hidden antialiased selection:bg-[#FF3E00] selection:text-white">
      
      <Header />
      
      <main className="w-full">
        
        {/* SECTION 1: HERO */}
        <section className="min-h-screen flex items-center justify-center pb-24 px-8 md:px-16 container mx-auto relative align-middle" style={{ perspective: 1000 }}>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FF3E00]/5 to-[#0055FF]/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
          <div className="max-w-5xl w-full space-y-8 font-serif text-center mt-32 relative z-10" style={{ transformStyle: 'preserve-3d' }}>
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-light tracking-tight leading-[1.05] overflow-visible">
              <span className="inline-block hero-text text-slate-900 origin-bottom">Il suffit de...</span>
            </h1>
            <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-light tracking-tight leading-[1.05] overflow-visible">
              <span className="inline-block hero-text text-transparent bg-clip-text bg-gradient-to-r from-[#FF3E00] to-[#FF8C00] origin-bottom">croire que chacun</span>
            </h2>
            <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-light tracking-tight leading-[1.05] overflow-visible">
              <span className="inline-block hero-text text-slate-400 origin-bottom">peut agir.</span>
            </h2>
            <div className="pt-16 text-xl md:text-2xl font-sans max-w-2xl mx-auto text-slate-600 font-light hero-sub">
              Nous accompagnons et soutenons les initiatives favorisant le vivre-ensemble et la participation citoyenne.
            </div>
          </div>
        </section>

        {/* SECTION 2: ACCOMPAGNER */}
        <section className="scroll-section min-h-screen flex items-center py-32 px-8 md:px-16 relative font-sans overflow-hidden">
          {/* Parallax Background Shape */}
          <div className="bg-element absolute top-1/4 right-0 w-[600px] h-[800px] bg-gradient-to-l from-[#FF3E00]/10 to-transparent blur-[100px] -z-10 rounded-full"></div>
          
          <div className="container mx-auto">
            <div className="content-card max-w-2xl space-y-8 bg-white/70 p-16 rounded-[2.5rem] backdrop-blur-xl border border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transform-gpu relative z-10 before:absolute before:inset-0 before:ring-1 before:ring-slate-900/10 before:rounded-[2.5rem] before:-z-10">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-[#FF3E00] border-l-2 border-[#FF3E00] pl-4">Le Sens de L'Action</h3>
              <h2 className="text-5xl md:text-6xl font-serif text-slate-900 leading-tight">Accompagner <br/>les initiatives.</h2>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                Nous sommes un réseau de bâtisseurs et d'acteurs de terrains. Nous mettons nos compétences au service de projets qui favorisent le vivre-ensemble et l'engagement citoyen.
              </p>
              <button className="mt-8 px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-[#FF3E00] hover:scale-105 transition-all duration-300 shadow-xl shadow-slate-900/20">
                Découvrir l'accompagnement
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 3: STRUCTURER */}
        <section className="scroll-section min-h-screen flex items-center justify-end py-32 px-8 md:px-16 relative font-sans overflow-hidden">
          {/* Parallax Background Shape */}
          <div className="bg-element absolute top-1/3 left-0 w-[600px] h-[800px] bg-gradient-to-r from-[#0055FF]/10 to-transparent blur-[100px] -z-10 rounded-full"></div>

          <div className="container mx-auto flex justify-end">
            <div className="content-card max-w-2xl space-y-8 bg-white/70 p-16 rounded-[2.5rem] backdrop-blur-xl border border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transform-gpu relative z-10 before:absolute before:inset-0 before:ring-1 before:ring-slate-900/10 before:rounded-[2.5rem] before:-z-10">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-[#0055FF] border-l-2 border-[#0055FF] pl-4">L'Intelligence Collective</h3>
              <h2 className="text-5xl md:text-6xl font-serif text-slate-900 leading-tight">Structurer <br/>le réseau.</h2>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                L'échange et la professionnalisation sont au cœur de nos ateliers. En favorisant la circulation de l'information, nous multiplions l'impact décuplé des associations partenaires.
              </p>
              <button className="mt-8 px-8 py-4 bg-[#0055FF] text-white rounded-full font-medium hover:bg-blue-600 hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-500/20">
                Rejoindre nos ateliers
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 4: MANIFESTO */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-transparent to-white/90 backdrop-blur-md pt-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-gradient-to-b from-[#FF3E00]/5 to-[#0055FF]/5 blur-[120px] -z-10"></div>
          
          <div className="manifesto-content max-w-5xl text-center space-y-16 font-serif px-8 relative z-20 transform-gpu">
            <h3 className="text-5xl md:text-8xl font-light italic text-slate-900 tracking-tight">
              La force de l'art.
            </h3>
            <p className="text-3xl md:text-4xl font-sans font-light text-slate-600 leading-relaxed max-w-4xl mx-auto">
              La <strong className="font-semibold text-slate-900">créativité</strong>, l’<strong className="font-semibold text-slate-900">art</strong> et la <strong className="font-semibold text-slate-900">culture</strong> sont les liens qui tissent notre réseau. 
              <br/><br/>
              Ensemble, nous construisons un monde plus ouvert, vibrant et profondément connecté.
            </p>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  )
}

export default App
`;

fs.writeFileSync('/Users/salemlahmer/ilsuffitdelast/website/src/App.tsx', content, 'utf8');
console.log('App.tsx updated successfully.');
