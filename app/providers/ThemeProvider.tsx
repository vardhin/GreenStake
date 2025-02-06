import { PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeContext, lightTheme, darkTheme } from '../styles/theme';

export function ThemeProvider({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
} 