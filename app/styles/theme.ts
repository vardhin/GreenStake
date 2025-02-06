import { StyleSheet } from 'react-native';

export const theme = {
  colors: {
    primary: '#2E7D32',
    primaryDark: '#1B5E20',
    primaryLight: '#A5D6A7',
    background: '#F1F8E9',
    surface: '#FFFFFF',
    surfaceVariant: '#C8E6C9',
    text: '#1B5E20',
    textSecondary: '#558B2F',
    error: '#B71C1C',
    success: '#2E7D32',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
  },
  typography: {
    header: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
    },
    subtitle: {
      fontSize: 16,
      fontWeight: '500',
    },
    body: {
      fontSize: 14,
    },
    caption: {
      fontSize: 12,
    },
  },
  elevation: {
    small: {
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    medium: {
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.15,
      shadowRadius: 6,
    },
  },
};

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
    gap: theme.spacing.lg,
  },
  header: {
    ...theme.typography.header,
    color: theme.colors.text,
  },
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
  },
  buttonText: {
    color: theme.colors.surface,
    ...theme.typography.subtitle,
    fontWeight: '600',
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text,
  },
  label: {
    ...theme.typography.body,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 