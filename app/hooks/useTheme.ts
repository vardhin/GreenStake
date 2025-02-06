import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext, Theme } from '../styles/theme';

export function useTheme(): Theme {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
}

export const createCommonStyles = (theme: Theme) => StyleSheet.create({
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
    padding: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
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
    color: theme.colors.text.primary,
    borderWidth: 1,
    borderColor: theme.colors.border,
    ...theme.typography.body1,
  },

  // Utility
  marginBottom: {
    marginBottom: theme.spacing.md,
  },
  marginTop: {
    marginTop: theme.spacing.md,
  },
  padding: {
    padding: theme.spacing.md,
  },
  shadow: theme.elevation.small,
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.md,
  },
}); 