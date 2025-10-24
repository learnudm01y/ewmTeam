import { useLanguage } from '../context/LanguageContext';

export const useTranslation = () => {
  const { translations, isLoading } = useLanguage();
  return { translations, isLoading };
};
