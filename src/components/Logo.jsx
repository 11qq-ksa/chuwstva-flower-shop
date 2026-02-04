import { Link } from 'react-router-dom';

/**
 * LOGO COMPONENT
 * 
 * Uses logo1.svg for the header.
 * Color matches the brand (#6B7E50).
 */

function Logo({ showTagline = false, className = '' }) {
  return (
    <Link to="/" className={`block ${className}`}>
      {/* Logo SVG */}
      <img 
        src="/logo1.svg" 
        alt="Чувства в цветах"
        className="h-8 md:h-10 w-auto"
        style={{ filter: 'invert(42%) sepia(11%) saturate(1032%) hue-rotate(62deg) brightness(96%) contrast(89%)' }}
      />
      
      {/* Optional Tagline */}
      {showTagline && (
        <span className="block mt-1 text-xs tracking-[0.3em] uppercase text-gray-500 font-sans">
          Северск
        </span>
      )}
    </Link>
  );
}

export default Logo;
