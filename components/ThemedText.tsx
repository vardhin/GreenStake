import { Text, type TextProps, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xxl' | 'display';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  variant = 'primary',
  size = 'base',
  weight = 'regular',
  ...rest
}: ThemedTextProps) {
  const { colors, typography } = useTheme();
  
  const getTextColor = () => {
    if (lightColor || darkColor) {
      return useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    }
    
    switch (variant) {
      case 'secondary':
        return colors.textSecondary;
      case 'tertiary':
        return colors.textTertiary;
      default:
        return colors.text;
    }
  };

  return (
    <Text
      style={[
        {
          color: getTextColor(),
          fontSize: typography.sizes[size],
          fontWeight: typography.weights[weight],
          lineHeight: typography.sizes[size] * typography.lineHeights.normal,
        },
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
