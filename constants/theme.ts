export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48
};

export const typography = {
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    display: 32
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75
  },
  weights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700'
  }
};

export const colors = {
  light: {
    // Primary colors
    primary: '#0a7ea4',
    primaryLight: '#a1cedc',
    primaryDark: '#065c78',
    
    // Background colors
    background: '#ffffff',
    backgroundSecondary: '#f5f5f5',
    backgroundTertiary: '#e5e5e5',
    
    // Text colors
    text: '#11181C',
    textSecondary: '#687076',
    textTertiary: '#889096',
    
    // UI colors
    border: '#e2e8f0',
    divider: '#f0f0f0',
    
    // Status colors
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  },
  dark: {
    // Primary colors
    primary: '#3b9dc2',
    primaryLight: '#1d3d47',
    primaryDark: '#a1cedc',
    
    // Background colors
    background: '#151718',
    backgroundSecondary: '#1c1e1f',
    backgroundTertiary: '#232526',
    
    // Text colors
    text: '#ECEDEE',
    textSecondary: '#9BA1A6',
    textTertiary: '#787E83',
    
    // UI colors
    border: '#2d3235',
    divider: '#2a2d2e',
    
    // Status colors
    success: '#059669',
    warning: '#d97706',
    error: '#dc2626',
    info: '#2563eb'
  }
};

export const radius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  round: 9999
};

export type ThemeColors = typeof colors.light; 