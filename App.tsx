import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="bg-primary min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <Team />
          <TechStack />
          <Projects />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
