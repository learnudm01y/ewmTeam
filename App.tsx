import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import { useTranslation } from './hooks/useTranslation';

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
  const { isLoading } = useTranslation();

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
