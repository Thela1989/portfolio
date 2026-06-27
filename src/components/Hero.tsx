import { Title, Text, Flex } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const cvFile =
    i18n.language === 'sv' ? '/cv-frontend-sv.pdf' : '/cv-frontend-en.pdf';

  return (
    <Flex w="100%" justify="center" align="center">
      <section
        id="home"
        className="page-section hero-section section-centered section-py"
      >
        <div className="hero-content content-stack">
          <img
            src="/images/profile1.png"
            alt="Therese Lagerhäll"
            className="profile-image"
          />

          <Title order={1}>{t('hero.title')}</Title>

          <div className="hero-card-wrapper">
            <div className="hero-card">
              <Text size="lg" className="Header-text">
                {t('hero.text')}
              </Text>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <a href={cvFile} className="downloads-cv" download>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ marginRight: '8px', verticalAlign: 'middle' }}
              >
                <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-7 4v-2h14v2H5z" />
              </svg>
              {t('hero.downloadCv')}
            </a>
            <a href="#contact" className="downloads-cv">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ marginRight: '8px', verticalAlign: 'middle' }}
              >
                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" />
              </svg>
              {t('hero.contact')}
            </a>
          </div>
        </div>
      </section>
    </Flex>
  );
}
