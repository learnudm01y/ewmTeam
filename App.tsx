
import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Services } from './components/Services.tsx';
import { Team } from './components/Team.tsx';
import { TechStack } from './components/TechStack.tsx';
import { Projects } from './components/Projects.tsx';
import { Footer } from './components/Footer.tsx';
import { LanguageProvider, useLanguage } from './context/LanguageContext.tsx';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-primary flex items-center justify-center z-[100]">
      <div className="flex space-x-2 rtl:space-x-reverse">
        <div className="w-4 h-4 rounded-full bg-accent animate-pulse"></div>
        <div className="w-4 h-4 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-4 h-4 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
};

const AppContent: React.FC = () => {
  const { isLoading } = useLanguage();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
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
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;