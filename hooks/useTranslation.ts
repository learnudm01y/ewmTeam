
import { useLanguage } from '../context/LanguageContext.tsx';

export const useTranslation = () => {
  const { translations, isLoading } = useLanguage();
  return { translations, isLoading };
};