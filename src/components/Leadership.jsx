import { leadershipList } from '../data/portfolioData'

function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="relative flex flex-col md:flex-row items-center mb-12 md:mb-16 last:mb-0 w-full">
      {/* Red Glowing Dot on Timeline */}
      <div className="w-4 h-4 rounded-full bg-[#ff2a2a] border-4 border-black shadow-[0_0_12px_#ff2a2a] absolute left-4 md:left-1/2 -translate-x-1/2 z-20" />

      {/* Even index: Card on LEFT, spacer on RIGHT */}
      {isEven ? (
        <>
          <div
            data-aos="fade-right"
            className="w-full pl-12 md:pl-0 md:w-[45%] md:text-right"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-all shadow-lg">
              {item.badge && (
                <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-mono font-semibold uppercase tracking-widest inline-block mb-3">
                  {item.badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-white hover:text-red-500 transition-colors">
                {item.title}
              </h3>
              <p className="font-mono uppercase text-xs tracking-wider text-red-400 mt-1 mb-3">
                {item.role}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
          <div className="hidden md:block md:w-[10%]" />
          <div className="hidden md:block md:w-[45%]" />
        </>
      ) : (
        /* Odd index: Spacer on LEFT, card on RIGHT */
        <>
          <div className="hidden md:block md:w-[45%]" />
          <div className="hidden md:block md:w-[10%]" />
          <div
            data-aos="fade-left"
            className="w-full pl-12 md:pl-0 md:w-[45%] md:text-left"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-all shadow-lg">
              {item.badge && (
                <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-mono font-semibold uppercase tracking-widest inline-block mb-3">
                  {item.badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-white hover:text-red-500 transition-colors">
                {item.title}
              </h3>
              <p className="font-mono uppercase text-xs tracking-wider text-red-400 mt-1 mb-3">
                {item.role}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

function Leadership() {
  if (!leadershipList || leadershipList.length === 0) return null

  return (
    <section
      id="leadership"
      className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden [background-image:linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [background-size:80px_80px]"
    >
      {/* Torn-paper divider at the top from red section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180 -translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 fill-[#ff2a2a]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Centred Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-mono uppercase tracking-widest mb-4">
            Activities
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Leadership & Engagement
          </h2>
          <p className="text-white/60 text-sm md:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Initiatives, continuous learning, and active participation in developer communities.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical 2px Gradient Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10 z-0" />

          {/* Timeline Items */}
          <div className="relative z-10">
            {leadershipList.map((item, index) => (
              <LeadershipItem
                key={`${item.title}-${index}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leadership
