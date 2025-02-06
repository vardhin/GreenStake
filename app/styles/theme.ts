import { StyleSheet, Dimensions } from 'react-native';
import { createContext, useContext } from 'react';

const { width } = Dimensions.get('window');
const scale = width / 375; // Base scale for iPhone 8

export const lightTheme = {
  colors: {
    // Professional eco-friendly color palette
    primary: '#2E7D32', // Rich forest green
    primaryDark: '#1B5E20', // Deep forest green
    primaryLight: '#4CAF50', // Fresh leaf green
    secondary: '#37474F', // Blue-grey
    secondaryDark: '#263238', // Dark blue-grey
    secondaryLight: '#546E7A', // Light blue-grey
    background: '#FAFAFA', // Clean white background
    surface: '#FFFFFF',
    surfaceVariant: '#F1F8E9', // Light green tint
    border: '#C8E6C9', // Soft green border
    text: {
      primary: '#1C2121', // Near black with slight green undertone
      secondary: '#546E7A', // Blue-grey for secondary text
      disabled: '#B0BEC5', // Light blue-grey
      inverse: '#FFFFFF',
    },
    status: {
      error: '#C62828', // Darker red for better contrast
      success: '#2E7D32', // Matching primary green
      warning: '#F57F17', // Warm amber
      info: '#0277BD', // Ocean blue
    },
    // Additional colors for navigation bar
    navigation: {
      active: '#2E7D32', // Primary green
      inactive: '#78909C', // Muted blue-grey
      background: '#FFFFFF', // Clean white
      border: '#E0E0E0', // Light border
    }
  },
  spacing: {
    xxs: Math.round(4 * scale),
    xs: Math.round(8 * scale),
    sm: Math.round(12 * scale),
    md: Math.round(16 * scale),
    lg: Math.round(24 * scale),
    xl: Math.round(32 * scale),
    xxl: Math.round(48 * scale),
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
      fontSize: Math.round(32 * scale),
      fontWeight: '700',
      lineHeight: Math.round(40 * scale),
      letterSpacing: -0.5,
    },
    h2: {
      fontSize: Math.round(24 * scale),
      fontWeight: '700',
      lineHeight: Math.round(32 * scale),
      letterSpacing: 0,
    },
    h3: {
      fontSize: Math.round(20 * scale),
      fontWeight: '600',
      lineHeight: Math.round(28 * scale),
      letterSpacing: 0.15,
    },
    subtitle1: {
      fontSize: Math.round(18 * scale),
      fontWeight: '600',
      lineHeight: Math.round(24 * scale),
      letterSpacing: 0.15,
    },
    subtitle2: {
      fontSize: Math.round(16 * scale),
      fontWeight: '500',
      lineHeight: Math.round(22 * scale),
      letterSpacing: 0.1,
    },
    body1: {
      fontSize: Math.round(16 * scale),
      fontWeight: '400',
      lineHeight: Math.round(24 * scale),
      letterSpacing: 0.5,
    },
    body2: {
      fontSize: Math.round(14 * scale),
      fontWeight: '400',
      lineHeight: Math.round(20 * scale),
      letterSpacing: 0.25,
    },
    caption: {
      fontSize: Math.round(12 * scale),
      fontWeight: '400',
      lineHeight: Math.round(16 * scale),
      letterSpacing: 0.4,
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
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    medium: {
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.23,
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

export const darkTheme = {
  colors: {
    primary: '#4CAF50',
    primaryDark: '#2E7D32',
    primaryLight: '#81C784',
    secondary: '#546E7A',
    secondaryDark: '#37474F',
    secondaryLight: '#78909C',
    background: '#121212',
    surface: '#1E1E1E',
    surfaceVariant: '#1B2816',
    border: '#2E3B2E',
    text: {
      primary: '#FFFFFF',
      secondary: '#B0BEC5',
      disabled: '#78909C',
      inverse: '#1C2121',
    },
    status: {
      error: '#C62828',
      success: '#2E7D32',
      warning: '#F57F17',
      info: '#0277BD',
    },
    navigation: {
      active: '#4CAF50',
      inactive: '#78909C',
      background: '#1E1E1E',
      border: '#2E3B2E',
    }
  },
  spacing: {
    xxs: Math.round(4 * scale),
    xs: Math.round(8 * scale),
    sm: Math.round(12 * scale),
    md: Math.round(16 * scale),
    lg: Math.round(24 * scale),
    xl: Math.round(32 * scale),
    xxl: Math.round(48 * scale),
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
      fontSize: Math.round(32 * scale),
      fontWeight: '700',
      lineHeight: Math.round(40 * scale),
      letterSpacing: -0.5,
    },
    h2: {
      fontSize: Math.round(24 * scale),
      fontWeight: '700',
      lineHeight: Math.round(32 * scale),
      letterSpacing: 0,
    },
    h3: {
      fontSize: Math.round(20 * scale),
      fontWeight: '600',
      lineHeight: Math.round(28 * scale),
      letterSpacing: 0.15,
    },
    subtitle1: {
      fontSize: Math.round(18 * scale),
      fontWeight: '600',
      lineHeight: Math.round(24 * scale),
      letterSpacing: 0.15,
    },
    subtitle2: {
      fontSize: Math.round(16 * scale),
      fontWeight: '500',
      lineHeight: Math.round(22 * scale),
      letterSpacing: 0.1,
    },
    body1: {
      fontSize: Math.round(16 * scale),
      fontWeight: '400',
      lineHeight: Math.round(24 * scale),
      letterSpacing: 0.5,
    },
    body2: {
      fontSize: Math.round(14 * scale),
      fontWeight: '400',
      lineHeight: Math.round(20 * scale),
      letterSpacing: 0.25,
    },
    caption: {
      fontSize: Math.round(12 * scale),
      fontWeight: '400',
      lineHeight: Math.round(16 * scale),
      letterSpacing: 0.4,
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
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    medium: {
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.23,
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

// Create a type for our theme
export type Theme = typeof lightTheme;

// Create a context to manage the theme
export const ThemeContext = createContext<Theme>(lightTheme);

export const commonStyles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    paddingHorizontal: lightTheme.spacing.lg,
    paddingVertical: lightTheme.spacing.md,
    backgroundColor: lightTheme.colors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: lightTheme.colors.background,
  },
  scrollView: {
    flexGrow: 1,
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
    gap: lightTheme.spacing.md,
  },

  // Margins
  marginHorizontal: {
    marginHorizontal: lightTheme.spacing.md,
  },
  marginVertical: {
    marginVertical: lightTheme.spacing.md,
  },
  marginTop: {
    marginTop: lightTheme.spacing.md,
  },
  marginBottom: {
    marginBottom: lightTheme.spacing.md,
  },
  marginLeft: {
    marginLeft: lightTheme.spacing.md,
  },
  marginRight: {
    marginRight: lightTheme.spacing.md,
  },

  // Padding
  paddingHorizontal: {
    paddingHorizontal: lightTheme.spacing.md,
  },
  paddingVertical: {
    paddingVertical: lightTheme.spacing.md,
  },
  paddingTop: {
    paddingTop: lightTheme.spacing.md,
  },
  paddingBottom: {
    paddingBottom: lightTheme.spacing.md,
  },
  paddingLeft: {
    paddingLeft: lightTheme.spacing.md,
  },
  paddingRight: {
    paddingRight: lightTheme.spacing.md,
  },

  // Typography
  h1: {
    ...lightTheme.typography.h1,
    color: lightTheme.colors.text.primary,
    marginBottom: lightTheme.spacing.md,
  },
  h2: {
    ...lightTheme.typography.h2,
    color: lightTheme.colors.text.primary,
    marginBottom: lightTheme.spacing.sm,
  },
  h3: {
    ...lightTheme.typography.h3,
    color: lightTheme.colors.text.primary,
    marginBottom: lightTheme.spacing.sm,
  },
  subtitle1: {
    ...lightTheme.typography.subtitle1,
    color: lightTheme.colors.text.primary,
    marginBottom: lightTheme.spacing.xs,
  },
  subtitle2: {
    ...lightTheme.typography.subtitle2,
    color: lightTheme.colors.text.primary,
    marginBottom: lightTheme.spacing.xs,
  },
  body1: {
    ...lightTheme.typography.body1,
    color: lightTheme.colors.text.primary,
  },
  body2: {
    ...lightTheme.typography.body2,
    color: lightTheme.colors.text.primary,
  },
  caption: {
    ...lightTheme.typography.caption,
    color: lightTheme.colors.text.secondary,
  },

  // Components
  card: {
    backgroundColor: lightTheme.colors.surface,
    borderRadius: lightTheme.borderRadius.lg,
    padding: lightTheme.spacing.lg,
    marginVertical: lightTheme.spacing.sm,
    ...lightTheme.elevation.small,
  },
  cardVariant: {
    backgroundColor: lightTheme.colors.surfaceVariant,
    borderRadius: lightTheme.borderRadius.lg,
    padding: lightTheme.spacing.lg,
    marginVertical: lightTheme.spacing.sm,
    ...lightTheme.elevation.small,
  },
  button: {
    backgroundColor: lightTheme.colors.primary,
    borderRadius: lightTheme.borderRadius.md,
    paddingVertical: lightTheme.spacing.sm,
    paddingHorizontal: lightTheme.spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: Math.round(48 * scale),
    ...lightTheme.elevation.small,
  },
  buttonText: {
    color: lightTheme.colors.text.inverse,
    ...lightTheme.typography.subtitle2,
    textAlign: 'center',
  },
  input: {
    backgroundColor: lightTheme.colors.surface,
    borderRadius: lightTheme.borderRadius.md,
    paddingVertical: lightTheme.spacing.sm,
    paddingHorizontal: lightTheme.spacing.md,
    ...lightTheme.typography.body1,
    color: lightTheme.colors.text.primary,
    borderWidth: 1,
    borderColor: lightTheme.colors.border,
    minHeight: Math.round(48 * scale),
  },
  inputLabel: {
    ...lightTheme.typography.body2,
    color: lightTheme.colors.text.secondary,
    marginBottom: lightTheme.spacing.xs,
  },
  
  // Utility
  shadow: lightTheme.elevation.small,
  shadowMedium: lightTheme.elevation.medium,
  shadowLarge: lightTheme.elevation.large,
  rounded: {
    borderRadius: lightTheme.borderRadius.round,
  },
  divider: {
    height: 1,
    backgroundColor: lightTheme.colors.border,
    marginVertical: lightTheme.spacing.md,
  },
  flexGrow: {
    flexGrow: 1,
  },
  fullWidth: {
    width: '100%',
  },
}); 