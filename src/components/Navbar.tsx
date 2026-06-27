import { Anchor } from '@mantine/core';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar-shell" aria-label="Main navigation">
      {/* Hamburger button – only visible on mobile */}
      <button
        className="hamburger-btn"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
        <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
        <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
      </button>

      {/* Overlay */}
      {menuOpen && <div className="mobile-menu-overlay" onClick={closeMenu} />}

      {/* Drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'is-open' : ''}`}>
        <Anchor
          href="#home"
          c="white"
          fw={500}
          fz="lg"
          underline="never"
          className="navbar-link link-underline"
          onClick={closeMenu}
        >
          <span className="drawer-link-inner">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
              <polyline points="9 21 9 12 15 12 15 21" />
            </svg>
            {t('nav.home')}
          </span>
        </Anchor>
        <Anchor
          href="#about"
          c="white"
          fw={500}
          fz="lg"
          underline="never"
          className="navbar-link link-underline"
          onClick={closeMenu}
        >
          <span className="drawer-link-inner">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
            {t('nav.about')}
          </span>
        </Anchor>
        <Anchor
          href="#projects"
          c="white"
          fw={500}
          fz="lg"
          underline="never"
          className="navbar-link link-underline"
          onClick={closeMenu}
        >
          <span className="drawer-link-inner">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            {t('nav.projects')}
          </span>
        </Anchor>
        <Anchor
          href="#contact"
          c="white"
          fw={500}
          fz="lg"
          underline="never"
          className="navbar-link link-underline"
          onClick={closeMenu}
        >
          <span className="drawer-link-inner">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="2,4 12,13 22,4" />
            </svg>
            {t('nav.contact')}
          </span>
        </Anchor>
      </div>

      {/* Desktop links */}
      <div className="navbar-links desktop-only">
        <Anchor
          href="#home"
          c="white"
          fw={500}
          fz="lg"
          underline="never"
          className="navbar-link link-underline"
        >
          {t('nav.home')}
        </Anchor>
        <Anchor
          href="#about"
          c="white"
          fw={500}
          fz="lg"
          underline="never"
          className="navbar-link link-underline"
        >
          {t('nav.about')}
        </Anchor>
        <Anchor
          href="#projects"
          c="white"
          fw={500}
          fz="lg"
          underline="never"
          className="navbar-link link-underline"
        >
          {t('nav.projects')}
        </Anchor>
        <Anchor
          href="#contact"
          c="white"
          fw={500}
          fz="lg"
          underline="never"
          className="navbar-link link-underline"
        >
          {t('nav.contact')}
        </Anchor>
      </div>

      <LanguageSwitcher />
    </nav>
  );
}

export default Navbar;
