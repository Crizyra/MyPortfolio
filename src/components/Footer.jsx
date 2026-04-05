import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: darkMode ? '#0f172a' : '#f3f4f6',
        borderTop: darkMode ? '1px solid #1f2937' : '1px solid #e5e7eb',
      }}
      className="py-8 mt-auto"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-orange-500"
              style={{
                backgroundColor: darkMode ? '#1f2937' : '#e5e7eb',
                color: darkMode ? '#d1d5db' : '#4b5563',
              }}
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-orange-500"
              style={{
                backgroundColor: darkMode ? '#1f2937' : '#e5e7eb',
                color: darkMode ? '#d1d5db' : '#4b5563',
              }}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-orange-500"
              style={{
                backgroundColor: darkMode ? '#1f2937' : '#e5e7eb',
                color: darkMode ? '#d1d5db' : '#4b5563',
              }}
              aria-label="Twitter"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-orange-500"
              style={{
                backgroundColor: darkMode ? '#1f2937' : '#e5e7eb',
                color: darkMode ? '#d1d5db' : '#4b5563',
              }}
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p
            className="text-sm text-center"
            style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}
          >
            &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;