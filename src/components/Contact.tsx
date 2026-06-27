import { Anchor, Title, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      className="page-section contact-section section-centered section-py"
    >
      <div className="contact-content">
        <Title>{t('contacts.title')}</Title>

        <div className="contact-card-wrapper">
          <div className="contact-card">
            <div className="contact-fields">
              <div className="contact-field">
                <span className="contact-label-group">
                  <span className="contact-field-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" />
                    </svg>
                  </span>
                  <span className="contact-label">Tel</span>
                </span>
                <Anchor
                  href="tel:+46700000000"
                  className="contact-link"
                  underline="never"
                >
                  070-8400323
                </Anchor>
              </div>
              <div className="contact-field">
                <span className="contact-label-group">
                  <span className="contact-field-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                    </svg>
                  </span>
                  <Text>{t('contacts.email')}</Text>
                </span>
                <Anchor
                  href="mailto:dinmail@example.com"
                  className="contact-link"
                  underline="never"
                >
                  therese.lagerhall.dev@outlook.com
                </Anchor>
              </div>
            </div>

            <div className="contact-socials">
              <Anchor
                href="https://www.linkedin.com/in/therese-lagerhäll-b13743307/"
                target="_blank"
                rel="noreferrer"
                className="contact-chip"
                underline="never"
              >
                <span
                  className="contact-chip-icon contact-chip-icon-linkedin"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 10.29H5.65V18H8.34V10.29ZM6.99 6C6.13 6 5.43 6.7 5.43 7.56C5.43 8.42 6.13 9.13 6.99 9.13C7.85 9.13 8.56 8.42 8.56 7.56C8.56 6.7 7.85 6 6.99 6ZM18.34 13.58C18.34 11.34 17.86 9.62 15.24 9.62C13.98 9.62 13.13 10.31 12.79 10.96H12.75V10.29H10.16V18H12.86V14.19C12.86 13.19 13.05 12.22 14.29 12.22C15.51 12.22 15.53 13.36 15.53 14.25V18H18.34V13.58Z" />
                  </svg>
                </span>
                LinkedIn
              </Anchor>
              <Anchor
                href="https://github.com/Thela1989"
                target="_blank"
                rel="noreferrer"
                className="contact-chip"
                underline="never"
              >
                <span className="contact-chip-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.58 2 12.23C2 16.75 4.87 20.58 8.84 21.93C9.34 22.03 9.52 21.71 9.52 21.43C9.52 21.18 9.51 20.34 9.5 19.45C6.73 20.07 6.14 18.24 6.14 18.24C5.68 17.04 5.03 16.72 5.03 16.72C4.12 16.08 5.1 16.1 5.1 16.1C6.11 16.17 6.64 17.17 6.64 17.17C7.54 18.76 8.97 18.3 9.54 18.02C9.64 17.35 9.89 16.9 10.16 16.65C7.95 16.39 5.62 15.51 5.62 11.6C5.62 10.49 6 9.58 6.65 8.87C6.55 8.61 6.2 7.56 6.75 6.13C6.75 6.13 7.59 5.85 9.5 7.18C10.3 6.95 11.16 6.83 12 6.83C12.84 6.83 13.7 6.95 14.5 7.18C16.41 5.85 17.25 6.13 17.25 6.13C17.8 7.56 17.45 8.61 17.35 8.87C18 9.58 18.38 10.49 18.38 11.6C18.38 15.52 16.04 16.39 13.82 16.65C14.16 16.96 14.46 17.58 14.46 18.54C14.46 19.91 14.45 21.01 14.45 21.43C14.45 21.71 14.63 22.03 15.14 21.93C19.11 20.58 22 16.75 22 12.23C22 6.58 17.52 2 12 2Z" />
                  </svg>
                </span>
                GitHub
              </Anchor>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
