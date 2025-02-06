import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const scale = width / 375; // Base scale for iPhone 8

export const theme = {
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

export const commonStyles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
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
    gap: theme.spacing.md,
  },

  // Margins
  marginHorizontal: {
    marginHorizontal: theme.spacing.md,
  },
  marginVertical: {
    marginVertical: theme.spacing.md,
  },
  marginTop: {
    marginTop: theme.spacing.md,
  },
  marginBottom: {
    marginBottom: theme.spacing.md,
  },
  marginLeft: {
    marginLeft: theme.spacing.md,
  },
  marginRight: {
    marginRight: theme.spacing.md,
  },

  // Padding
  paddingHorizontal: {
    paddingHorizontal: theme.spacing.md,
  },
  paddingVertical: {
    paddingVertical: theme.spacing.md,
  },
  paddingTop: {
    paddingTop: theme.spacing.md,
  },
  paddingBottom: {
    paddingBottom: theme.spacing.md,
  },
  paddingLeft: {
    paddingLeft: theme.spacing.md,
  },
  paddingRight: {
    paddingRight: theme.spacing.md,
  },

  // Typography
  h1: {
    ...theme.typography.h1,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
  },
  h2: {
    ...theme.typography.h2,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.sm,
  },
  h3: {
    ...theme.typography.h3,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.sm,
  },
  subtitle1: {
    ...theme.typography.subtitle1,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  subtitle2: {
    ...theme.typography.subtitle2,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
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
    padding: theme.spacing.lg,
    marginVertical: theme.spacing.sm,
    ...theme.elevation.small,
  },
  cardVariant: {
    backgroundColor: theme.colors.surfaceVariant,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginVertical: theme.spacing.sm,
    ...theme.elevation.small,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: Math.round(48 * scale),
    ...theme.elevation.small,
  },
  buttonText: {
    color: theme.colors.text.inverse,
    ...theme.typography.subtitle2,
    textAlign: 'center',
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    ...theme.typography.body1,
    color: theme.colors.text.primary,
    borderWidth: 1,
    borderColor: theme.colors.border,
    minHeight: Math.round(48 * scale),
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
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.md,
  },
  flexGrow: {
    flexGrow: 1,
  },
  fullWidth: {
    width: '100%',
  },
}); 