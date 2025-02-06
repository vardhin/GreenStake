import { View, type ViewProps } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export function ThemedView({ 
  style, 
  lightColor, 
  darkColor, 
  variant = 'primary',
  ...otherProps 
}: ThemedViewProps) {
  const { colors } = useTheme();
  
  const getBackgroundColor = () => {
    if (lightColor || darkColor) {
      return useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    }
    
    switch (variant) {
      case 'secondary':
        return colors.backgroundSecondary;
      case 'tertiary':
        return colors.backgroundTertiary;
      default:
        return colors.background;
    }
  };

  return (
    <View 
      style={[
        { backgroundColor: getBackgroundColor() },
        style
      ]} 
      {...otherProps} 
    />
  );
}
