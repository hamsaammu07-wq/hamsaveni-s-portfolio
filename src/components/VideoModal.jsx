import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function extractYouTubeId(url) {
  if (!url) return null
  const regExp =
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([a-zA-Z0-9_-]{11})/
  const match = url.match(regExp)
  return match ? match[1] : null
}

function VideoModal({ url, title, onClose }) {
  const closeBtnRef = useRef(null)
  const isShorts = Boolean(url && url.includes('/shorts/'))
  const videoId = extractYouTubeId(url)

  useEffect(() => {
    // Lock scroll on mount
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Move keyboard focus to close button
    closeBtnRef.current?.focus()

    // Handle Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  if (!url) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black ${
            isShorts ? 'max-w-sm aspect-[9/16]' : 'max-w-5xl aspect-video'
          }`}
        >
          {/* Close ✕ Button */}
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* YouTube Player Iframe */}
          {videoId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/60 p-6 text-center">
              Unable to load video preview.
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default VideoModal
