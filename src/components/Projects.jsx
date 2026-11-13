import { useState, useRef } from 'react'
import { projects, socialLinks } from '../data/portfolioData'
import VideoModal from './VideoModal'

const previews = import.meta.glob('../assets/projects/*-preview.mp4', {
  eager: true,
  import: 'default',
})

function extractYouTubeId(url) {
  if (!url) return null
  const regExp =
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([a-zA-Z0-9_-]{11})/
  const match = url.match(regExp)
  return match ? match[1] : null
}

function GitHubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  )
}

function ExternalLinkIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function ProjectCard({ project, aosDelay, onPlayVideo }) {
  const hoverVideoRef = useRef(null)
  const youtubeId = extractYouTubeId(project.video)
  const hasVideo = Boolean(youtubeId)
  const previewClip = previews[`../assets/projects/${project.id}-preview.mp4`]

  const handleMouseEnter = () => {
    if (window.matchMedia('(hover: hover)').matches && hoverVideoRef.current) {
      hoverVideoRef.current.play().catch(() => {})
      hoverVideoRef.current.style.opacity = '1'
    }
  }

  const handleMouseLeave = () => {
    if (hoverVideoRef.current) {
      hoverVideoRef.current.pause()
      hoverVideoRef.current.currentTime = 0
      hoverVideoRef.current.style.opacity = '0'
    }
  }

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`p-[1px] rounded-2xl transition-all duration-300 ${
        project.isFlagship
          ? 'bg-gradient-to-r from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500 hover:via-white/20 hover:to-red-500/50 shadow-[0_0_30px_rgba(255,42,42,0.15)]'
          : 'bg-white/10 hover:border-white/20'
      }`}
    >
      <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/90 border border-white/5 flex flex-col justify-between h-full">
        <div
          className={
            hasVideo
              ? 'flex flex-col md:flex-row gap-6 md:gap-8 items-start justify-between'
              : 'flex flex-col'
          }
        >
          {/* Text Content */}
          <div className={hasVideo ? 'w-full md:w-[58%]' : 'w-full'}>
            {/* Optional Badge */}
            {project.badge && (
              <span className="inline-block text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full uppercase tracking-widest text-xs font-mono font-bold mb-4">
                {project.badge}
              </span>
            )}

            {/* Header: Number & Title */}
            <div className="flex items-baseline space-x-4">
              <span className="text-4xl md:text-5xl font-black text-white/10 font-serif italic select-none">
                {project.number}
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-white/60 mt-3 text-sm md:text-base leading-relaxed">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {project.techTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3 py-1 bg-white/5 border border-white/10 text-xs font-bold text-white/80 hover:text-red-400 hover:border-red-500/30 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-wider inline-flex items-center space-x-2 transition-all"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}

              {project.links?.demo && project.links.demo.trim() !== '' ? (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#ff2a2a] hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider inline-flex items-center space-x-1.5 transition-all shadow-md"
                >
                  <span>Live Demo</span>
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span
                  className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/40 cursor-not-allowed text-xs font-bold uppercase tracking-wider inline-flex items-center space-x-1.5 select-none"
                  title="Demo coming soon"
                >
                  <span>Demo Coming Soon</span>
                </span>
              )}
            </div>
          </div>

          {/* Video Window on the Right (if project has a video) */}
          {hasVideo && (
            <div className="w-full md:w-[42%] mt-6 md:mt-0">
              <button
                type="button"
                aria-label={`Play ${project.title} explanation video`}
                onClick={() => onPlayVideo(project)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="aspect-video w-full rounded-xl overflow-hidden border border-white/15 relative group cursor-pointer hover:border-red-500/50 transition-all duration-300 block bg-black shadow-lg"
              >
                {/* YouTube Thumbnail */}
                <img
                  src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
                  alt={`${project.title} demo video thumbnail`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />

                {/* Optional Hover Video Clip */}
                {previewClip && (
                  <video
                    ref={hoverVideoRef}
                    src={previewClip}
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 pointer-events-none"
                  />
                )}

                {/* Bottom Overlay with Play Icon & Label */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#ff2a2a] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 fill-white ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Watch explanation
                    </span>
                  </div>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden [background-image:linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [background-size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-mono uppercase tracking-widest mb-4">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Work that speaks for itself
          </h2>
          <p className="text-white/60 text-sm md:text-base mt-4 leading-relaxed">
            Real-world web applications and machine learning projects built with modern architectures.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              aosDelay={(index + 1) * 100}
              onPlayVideo={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Explore All Repositories Link */}
        {socialLinks.github && (
          <div className="mt-16 text-center" data-aos="fade-up">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm transition-all hover:scale-105 hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(255,42,42,0.2)]"
            >
              <GitHubIcon className="w-5 h-5" />
              <span>Explore All My Repositories</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {selectedProject && (
        <VideoModal
          url={selectedProject.video}
          title={selectedProject.title}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Projects
