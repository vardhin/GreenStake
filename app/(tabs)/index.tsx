import { ScrollView, StyleSheet, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ExternalLink } from '@/components/ExternalLink';
import { useTheme } from '@/hooks/useTheme';

export default function HomeScreen() {
  const { spacing, colors } = useTheme();

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <View style={styles.welcomeContainer}>
          <ThemedText size="display" weight="bold">
            Welcome
          </ThemedText>
          <HelloWave />
        </View>
        
        <ThemedText 
          variant="secondary" 
          size="lg" 
          style={{ marginTop: spacing.sm }}
        >
          Your new React Native app with standardized theming
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText size="xl" weight="semibold">
          Getting Started
        </ThemedText>
        
        <ThemedView variant="secondary" style={styles.card}>
          <ThemedText weight="semibold">Theme System</ThemedText>
          <ThemedText variant="secondary">
            This app uses a standardized theme system that automatically adapts to system preferences.
            Try switching your device's theme!
          </ThemedText>
        </ThemedView>

        <ThemedView variant="secondary" style={styles.card}>
          <ThemedText weight="semibold">Components</ThemedText>
          <ThemedText variant="secondary">
            Explore themed components like ThemedView and ThemedText with various variants and styles.
          </ThemedText>
        </ThemedView>

        <ThemedView variant="secondary" style={styles.card}>
          <ThemedText weight="semibold">Typography</ThemedText>
          <View style={styles.typographyDemo}>
            <ThemedText size="xs">Extra Small Text</ThemedText>
            <ThemedText size="sm">Small Text</ThemedText>
            <ThemedText size="base">Base Text</ThemedText>
            <ThemedText size="lg">Large Text</ThemedText>
            <ThemedText size="xl">Extra Large Text</ThemedText>
          </View>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText size="xl" weight="semibold">
          Resources
        </ThemedText>
        
        <View style={styles.links}>
          <ExternalLink href="https://docs.expo.dev">
            <ThemedText style={styles.link} variant="primary">
              📚 Expo Documentation
            </ThemedText>
          </ExternalLink>
          
          <ExternalLink href="https://reactnative.dev">
            <ThemedText style={styles.link} variant="primary">
              ⚛️ React Native Documentation
            </ThemedText>
          </ExternalLink>
          
          <ExternalLink href="https://github.com/expo/expo">
            <ThemedText style={styles.link} variant="primary">
              🐙 Expo GitHub Repository
            </ThemedText>
          </ExternalLink>
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 32,
    paddingTop: 64,
  },
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  section: {
    padding: 32,
    gap: 16,
  },
  card: {
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  typographyDemo: {
    gap: 8,
  },
  links: {
    gap: 12,
  },
  link: {
    fontSize: 16,
    fontWeight: '500',
  },
}); 