import { AppShell, Flex } from '@mantine/core';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <AppShell
      padding={0}
      header={{ height: { base: 72, sm: 80 } }}
      style={{ backgroundColor: 'black' }}
    >
      {/* HEADER */}
      <AppShell.Header
        withBorder={false}
        style={{ borderBottom: 'none', boxShadow: 'none' }}
      >
        <Navbar />
      </AppShell.Header>

      {/* MAIN */}
      <AppShell.Main>
        <Flex
          direction="column"
          align="center"
          justify="start"
          gap={0}
          w="100%"
        >
          <Hero />
          <About />
          <Projects />
          <Contact />
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
