import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
      className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            Get In{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Touch
            </span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-sm sm:text-base"
            style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
          >
            Have a project in mind? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          {/* Contact Info */}
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div
              className="p-6 rounded-2xl h-full"
              style={{
                background: darkMode
                  ? 'linear-gradient(to bottom right, #1f2937, #111827)'
                  : 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
                borderColor: darkMode ? '#374151' : '#e5e7eb',
              }}
              data-aos="fade-right"
            >
              <h3
                className="text-xl font-bold mb-6"
                style={{ color: darkMode ? 'white' : '#1f2937' }}
              >
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                      Email
                    </p>
                    <a
                      href="mailto:crizyra@example.com"
                      className="hover:text-orange-500 transition-colors"
                      style={{ color: darkMode ? 'white' : '#1f2937' }}
                    >
                      crizyramadayag73@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                      Phone
                    </p>
                    <a
                      href="tel:+639930682247"
                      className="hover:text-orange-500 transition-colors"
                      style={{ color: darkMode ? 'white' : '#1f2937' }}
                    >
                      +63 993 0682 247
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                      Location
                    </p>
                    <p style={{ color: darkMode ? 'white' : '#1f2937' }}>Jaro, Iloilo City, Philippines</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-semibold mb-4" style={{ color: darkMode ? 'white' : '#1f2937' }}>
                  Connect with me
                </h4>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-orange-500"
                    style={{ backgroundColor: darkMode ? '#374151' : '#e5e7eb', color: darkMode ? 'white' : '#374151' }}
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-orange-500"
                    style={{ backgroundColor: darkMode ? '#374151' : '#e5e7eb', color: darkMode ? 'white' : '#374151' }}
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-orange-500"
                    style={{ backgroundColor: darkMode ? '#374151' : '#e5e7eb', color: darkMode ? 'white' : '#374151' }}
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 px-4">
            <div
              className="p-6 rounded-2xl"
              style={{
                background: darkMode
                  ? 'linear-gradient(to bottom right, #1f2937, #111827)'
                  : 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
                borderColor: darkMode ? '#374151' : '#e5e7eb',
              }}
              data-aos="fade-left"
            >
              <form
                action="https://formspree.io/f/your-form-id"
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                    style={{ color: darkMode ? '#d1d5db' : '#374151' }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    style={{
                      backgroundColor: darkMode ? '#1f2937' : 'white',
                      borderColor: darkMode ? '#374151' : '#e5e7eb',
                      color: darkMode ? 'white' : '#1f2937',
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                    style={{ color: darkMode ? '#d1d5db' : '#374151' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    style={{
                      backgroundColor: darkMode ? '#1f2937' : 'white',
                      borderColor: darkMode ? '#374151' : '#e5e7eb',
                      color: darkMode ? 'white' : '#1f2937',
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                    style={{ color: darkMode ? '#d1d5db' : '#374151' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                    style={{
                      backgroundColor: darkMode ? '#1f2937' : 'white',
                      borderColor: darkMode ? '#374151' : '#e5e7eb',
                      color: darkMode ? 'white' : '#1f2937',
                    }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all hover:shadow-lg hover:shadow-orange-500/25"
                  style={{
                    background: 'linear-gradient(to right, #f97316, #f59e0b)',
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;