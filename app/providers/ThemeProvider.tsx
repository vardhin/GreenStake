import { PropsWithChildren, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeContext, lightTheme, darkTheme, Theme } from '../styles/theme';

export function ThemeProvider({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(() => 
    colorScheme === 'dark' ? darkTheme : lightTheme
  );

  useEffect(() => {
    setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
} 