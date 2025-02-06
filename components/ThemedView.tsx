import { View, ViewProps } from 'react-native';
import { useTheme } from '../app/hooks/useTheme';

export function ThemedView({ style, ...props }: ViewProps) {
  const theme = useTheme();
  
  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: theme.colors.background,
        },
        style,
      ]}
      {...props}
    />
  );
}
