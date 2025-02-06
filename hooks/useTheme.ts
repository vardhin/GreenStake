import { useColorScheme } from '@/hooks/useColorScheme';
import { colors, spacing, typography, radius } from '@/constants/theme';

export function useTheme() {
  const colorScheme = useColorScheme() ?? 'light';
  
  return {
    colors: colors[colorScheme],
    spacing,
    typography,
    radius,
    colorScheme
  };
} 