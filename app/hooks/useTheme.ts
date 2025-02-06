import { useContext } from 'react';
import { ThemeContext } from '../styles/theme';

export { createCommonStyles } from '../styles/theme';

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
}; 