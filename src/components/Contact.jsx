import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  // Parallax background scroll effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')

    const form = formRef.current
    const firstName = form?.querySelector('#firstName')?.value?.trim() || ''
    const lastName = form?.querySelector('#lastName')?.value?.trim() || ''
    const email = form?.querySelector('#email')?.value?.trim() || ''
    const message = form?.querySelector('#message')?.value?.trim() || ''

    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const isConfigured = Boolean(
      emailjsConfig?.serviceId &&
        emailjsConfig?.templateId &&
        emailjsConfig?.publicKey &&
        emailjsConfig.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
        emailjsConfig.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
        emailjsConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'
    )

    if (!isConfigured) {
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
          `Portfolio message from ${firstName} ${lastName}`.trim()
        )}&body=${encodeURIComponent(
          `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
        )}`,
        '_blank'
      )
      setStatus('success')
      formRef.current?.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      )
      setStatus('success')
      formRef.current?.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex flex-col justify-end items-end pt-32 border-t border-gray-900"
    >
      {/* Giant Parallax "Contact" Word Behind */}
      <motion.div
        style={{ y }}
        className="absolute top-16 left-0 w-full pointer-events-none z-0 overflow-hidden"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5 whitespace-nowrap pl-6 md:pl-12"
          style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* Red Card in Front, aligned to the right */}
      <div
        data-aos="fade-up"
        className="relative z-10 bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 rounded-tl-3xl shadow-2xl"
      >
        {/* Header Row */}
        <div className="flex items-center justify-between pb-8 border-b border-white/20">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/80">
            Reach Me
          </span>
          {socialLinks?.instagram ? (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-white/30 text-white text-xs font-mono uppercase tracking-wider hover:bg-white hover:text-[#ff2a2a] transition-all"
            >
              DM on Instagram ↗
            </a>
          ) : (
            <a
              href={`mailto:${personalInfo.emails.primary}`}
              className="px-5 py-2 rounded-full border border-white/30 text-white text-xs font-mono uppercase tracking-wider hover:bg-white hover:text-[#ff2a2a] transition-all"
            >
              Email Directly ↗
            </a>
          )}
        </div>

        {/* Message Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-12 mt-10"
        >
          {/* Two-column layout on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {/* Left Column: Underline Inputs */}
            <div className="flex flex-col gap-8">
              <input
                id="firstName"
                name="first_name"
                required
                placeholder="First Name *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white focus:border-white focus:outline-none text-white transition-colors"
              />
              <input
                id="lastName"
                name="last_name"
                placeholder="Last Name"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white focus:border-white focus:outline-none text-white transition-colors"
              />
              <input
                id="email"
                name="user_email"
                type="email"
                required
                placeholder="Email Address *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white focus:border-white focus:outline-none text-white transition-colors"
              />
            </div>

            {/* Right Column: Textarea */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your Message *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white focus:border-white focus:outline-none text-white resize-none min-h-[120px] md:h-full transition-colors"
              />
            </div>
          </div>

          {/* Bottom Area */}
          <div className="flex flex-col gap-6 pt-4 border-t border-white/20">
            {/* Permission Checkbox */}
            <div className="flex items-center space-x-3 text-white/90">
              <input
                type="checkbox"
                id="consent"
                required
                defaultChecked
                className="w-4 h-4 rounded accent-black cursor-pointer"
              />
              <label
                htmlFor="consent"
                className="cursor-pointer select-none text-xs md:text-sm font-medium"
              >
                I agree that my submitted information may be used to respond to this inquiry.
              </label>
            </div>

            {/* Note & Urgent Mail Link */}
            <div className="space-y-1 text-xs md:text-sm text-white/80">
              <p>
                Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
              </p>
              <p>
                Need urgent response? Email me directly at{' '}
                <a
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="underline font-bold text-white hover:text-black transition-colors"
                >
                  {personalInfo.emails.primary}
                </a>
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              {status === 'sending' && (
                <button
                  type="submit"
                  disabled
                  className="rounded-full border border-white/40 bg-white/20 text-white/70 px-8 py-4 font-bold flex items-center justify-center space-x-3 cursor-not-allowed text-sm uppercase tracking-wider"
                >
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  <span>Sending...</span>
                </button>
              )}

              {status === 'success' && (
                <button
                  type="button"
                  className="rounded-full border border-emerald-400 bg-emerald-600 text-white px-8 py-4 font-bold flex items-center justify-center space-x-2 text-sm uppercase tracking-wider shadow-lg"
                >
                  <span>Sent Successfully ✓</span>
                </button>
              )}

              {status === 'error' && (
                <button
                  type="submit"
                  className="rounded-full border border-red-950 bg-red-950 text-white px-8 py-4 font-bold flex items-center justify-center space-x-2 text-sm uppercase tracking-wider shadow-lg"
                >
                  <span>Failed — Try Again</span>
                </button>
              )}

              {status === 'idle' && (
                <button
                  type="submit"
                  className="group rounded-full border border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer text-sm uppercase tracking-wider"
                >
                  <span>Send Message</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                    &rarr;
                  </span>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
