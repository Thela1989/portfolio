import { Title, Flex } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const skills = [
    { name: 'React', icon: '/icons/react-svgrepo-com.svg' },
    { name: 'TypeScript', icon: '/icons/typescript-official-svgrepo-com.svg' },
    { name: 'JavaScript', icon: '/icons/javascript-svgrepo-com.svg' },
    { name: 'Git', icon: '/icons/git-svgrepo-com.svg' },
    { name: 'SQL', icon: '/icons/sql-svgrepo-com.svg' },
    { name: 'Node.js', icon: '/icons/node-svgrepo-com.svg' },
    { name: 'Vite', icon: '/icons/Vitejs-logo.svg.png' },
    { name: 'React Query', icon: '/icons/react-query-icon.svg' },
    { name: 'HTML', icon: '/icons/html-5-svgrepo-com.svg' },
    { name: 'CSS', icon: '/icons/css3-svgrepo-com.svg' },
  ];

  return (
    <Flex w="100%" justify="center" align="center">
      <section
        id="about"
        className="page-section about-section section-centered section-py"
      >
        <div className="hero-content content-stack">
          <Title order={1}>{t('about.title')}</Title>
          <div className="hero-card-wrapper">
            <div className="hero-card">{t('about.text')}</div>
          </div>
          <Title order={1}>{t('skills.title')}</Title>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-pill">
                <img
                  className={`skill-icon ${skill.name === 'Git' ? 'skill-icon-git' : ''}`}
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Flex>
  );
}
