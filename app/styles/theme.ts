import { StyleSheet } from 'react-native';

export const theme = {
  colors: {
    primary: '#2E7D32',
    primaryDark: '#1B5E20',
    primaryLight: '#A5D6A7',
    secondary: '#558B2F',
    secondaryDark: '#33691E',
    secondaryLight: '#C5E1A5',
    background: '#F1F8E9',
    surface: '#FFFFFF',
    surfaceVariant: '#C8E6C9',
    text: {
      primary: '#1B5E20',
      secondary: '#558B2F',
      disabled: '#9E9E9E',
      inverse: '#FFFFFF',
    },
    status: {
      error: '#B71C1C',
      success: '#2E7D32',
      warning: '#F57F17',
      info: '#0288D1',
    },
  },
  spacing: {
    xxs: 2,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    round: 999,
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 'bold',
      lineHeight: 40,
    },
    h2: {
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 32,
    },
    h3: {
      fontSize: 20,
      fontWeight: '600',
      lineHeight: 28,
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: '600',
      lineHeight: 24,
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 22,
    },
    body1: {
      fontSize: 16,
      lineHeight: 24,
    },
    body2: {
      fontSize: 14,
      lineHeight: 20,
    },
    caption: {
      fontSize: 12,
      lineHeight: 16,
    },
  },
  elevation: {
    none: {
      elevation: 0,
      shadowColor: 'transparent',
    },
    small: {
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.15,
      shadowRadius: 2,
    },
    medium: {
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    large: {
      elevation: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 8,
    },
  },
};

export const commonStyles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  gap: {
    gap: theme.spacing.md,
  },

  // Typography
  h1: {
    ...theme.typography.h1,
    color: theme.colors.text.primary,
  },
  h2: {
    ...theme.typography.h2,
    color: theme.colors.text.primary,
  },
  h3: {
    ...theme.typography.h3,
    color: theme.colors.text.primary,
  },
  subtitle1: {
    ...theme.typography.subtitle1,
    color: theme.colors.text.primary,
  },
  subtitle2: {
    ...theme.typography.subtitle2,
    color: theme.colors.text.primary,
  },
  body1: {
    ...theme.typography.body1,
    color: theme.colors.text.primary,
  },
  body2: {
    ...theme.typography.body2,
    color: theme.colors.text.primary,
  },
  caption: {
    ...theme.typography.caption,
    color: theme.colors.text.secondary,
  },

  // Components
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    ...theme.elevation.small,
  },
  cardVariant: {
    backgroundColor: theme.colors.surfaceVariant,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    ...theme.elevation.small,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
    ...theme.elevation.small,
  },
  buttonText: {
    color: theme.colors.text.inverse,
    ...theme.typography.subtitle2,
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    ...theme.typography.body1,
    color: theme.colors.text.primary,
    borderWidth: 1,
    borderColor: theme.colors.surfaceVariant,
  },
  inputLabel: {
    ...theme.typography.body2,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.xs,
  },
  
  // Utility
  shadow: theme.elevation.small,
  shadowMedium: theme.elevation.medium,
  shadowLarge: theme.elevation.large,
  rounded: {
    borderRadius: theme.borderRadius.round,
  },
  padding: {
    padding: theme.spacing.md,
  },
  margin: {
    margin: theme.spacing.md,
  },
}); 