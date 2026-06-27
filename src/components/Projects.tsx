import { useState } from 'react';
import { Container, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      id: 'petsApp',
      image: '/images/projects/PetApp.png',
    },
    {
      id: 'restaurant',
      image: '/images/projects/restaurant.png',
    },
    {
      id: 'gaming',
      image: '/images/projects/gamingwebsite.png',
    },
    {
      id: 'weatherApp',
      image: '/images/projects/weather.png',
    },
    {
      id: 'movieAppJavascript',
      image: '/images/projects/movieapp1.png',
    },
    {
      id: 'movieAppReact',
      image: '/images/projects/movieapp2.png',
    },
  ];

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const goToPrevious = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length,
    );
  };

  return (
    <section id="projects" className="page-section section-centered section-py">
      <Container>
        <Title>{t('projects.title')}</Title>

        <div
          className="projects-carousel"
          aria-label={t('projects.title')}
          style={{ position: 'relative', overflow: 'visible' }}
        >
          <button
            type="button"
            className="carousel-nav carousel-nav-prev"
            onClick={goToPrevious}
            aria-label={t('projects.previous')}
          >
            {'<'}
          </button>

          <div className="projects-viewport">
            <div
              className="projects-track"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {projects.map((project) => (
                <div key={project.id} className="project-slide">
                  <div className="project-card">
                    <img
                      src={project.image}
                      alt={t(`projects.${project.id}.title`)}
                      className="project-image"
                    />

                    <h3>{t(`projects.${project.id}.title`)}</h3>

                    <p>{t(`projects.${project.id}.description`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="carousel-nav carousel-nav-next"
            onClick={goToNext}
            aria-label={t('projects.next')}
          >
            {'>'}
          </button>
        </div>

        <div
          className="carousel-mobile-controls"
          aria-label={t('projects.mobileNavigation')}
        >
          <button
            type="button"
            className="carousel-mobile-nav"
            onClick={goToPrevious}
            aria-label={t('projects.previous')}
          >
            ‹
          </button>

          <button
            type="button"
            className="carousel-mobile-nav"
            onClick={goToNext}
            aria-label={t('projects.next')}
          >
            ›
          </button>
        </div>

        <div className="carousel-dots" role="tablist">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={t(`projects.${project.id}.title`)}
              className={`carousel-dot ${
                activeIndex === index ? 'is-active' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
