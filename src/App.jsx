import { Shield, Trophy, Users, Zap, ChevronRight, Globe, Activity, Target } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function App() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-red-900/30">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-red-600" />
            <span className="text-2xl font-bold text-white">DOTA 2</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#heroes" className="text-gray-300 hover:text-red-500 transition-colors">Heroes</a>
            <a href="#features" className="text-gray-300 hover:text-red-500 transition-colors">Features</a>
            <a href="#download" className="text-gray-300 hover:text-red-500 transition-colors">Download</a>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Play Free Now
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80" 
            alt="Dota 2 Battle Scene" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto text-center py-32">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight"
          >
            Join The Battle
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl text-red-500 mb-8 font-bold"
          >
            Every day, millions of players worldwide enter the battle
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            The most-played game on Steam. Join the battle of Ancients, pick your hero from a roster of over 100 unique characters.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              Play Free Now
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all backdrop-blur-sm border border-white/20">
              Watch Gameplay
            </button>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" ref={ref} className="py-20 px-6 bg-gradient-to-b from-transparent to-red-950/10">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-white text-center mb-16">
            Why Play <span className="text-red-500">Dota 2?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-red-900/30 hover:border-red-600/50 transition-all transform hover:scale-105"
            >
              <div className="bg-red-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Community</h3>
              <p className="text-gray-400 leading-relaxed">
                Join millions of players worldwide in epic 5v5 battles. Make friends and forge alliances.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-red-900/30 hover:border-red-600/50 transition-all transform hover:scale-105"
            >
              <div className="bg-red-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Activity className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Deep Strategy</h3>
              <p className="text-gray-400 leading-relaxed">
                Master unique heroes, powerful items, and dynamic gameplay mechanics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-red-900/30 hover:border-red-600/50 transition-all transform hover:scale-105"
            >
              <div className="bg-red-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Competitive Scene</h3>
              <p className="text-gray-400 leading-relaxed">
                Compete in ranked matches and watch professional tournaments with massive prize pools.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-black text-white mb-6">
            Ready to <span className="text-red-500">Join?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Download now and start your journey in the world of Dota 2. Free to play, forever.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-red-600/50">
            Download on Steam
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-red-900/30 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="w-6 h-6 text-red-600" />
              <span className="text-xl font-bold text-white">DOTA 2</span>
            </div>
            <div className="flex gap-4">
              <Globe className="w-5 h-5 text-gray-500 hover:text-red-500 cursor-pointer transition-colors" />
              <Target className="w-5 h-5 text-gray-500 hover:text-red-500 cursor-pointer transition-colors" />
            </div>
            <div className="text-gray-500 text-sm">
              © 2024 Valve Corporation. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App