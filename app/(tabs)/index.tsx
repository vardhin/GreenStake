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
            CarbonTrade
          </ThemedText>
          <HelloWave />
        </View>
        
        <ThemedText 
          variant="secondary" 
          size="lg" 
          style={{ marginTop: spacing.sm }}
        >
          Your trusted platform for carbon credit trading and climate impact
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText size="xl" weight="semibold">
          Market Overview
        </ThemedText>
        
        <ThemedView variant="secondary" style={styles.card}>
          <ThemedText weight="semibold">Carbon Credit Price</ThemedText>
          <ThemedText variant="secondary">
            Current market price: $25.50 per credit
            Daily trading volume: 150,000 credits
          </ThemedText>
        </ThemedView>

        <ThemedView variant="secondary" style={styles.card}>
          <ThemedText weight="semibold">Available Projects</ThemedText>
          <ThemedText variant="secondary">
            Browse verified carbon reduction projects across reforestation,
            renewable energy, and sustainable agriculture sectors.
          </ThemedText>
        </ThemedView>

        <ThemedView variant="secondary" style={styles.card}>
          <ThemedText weight="semibold">Impact Statistics</ThemedText>
          <View style={styles.typographyDemo}>
            <ThemedText size="sm">🌳 2M+ Trees Planted</ThemedText>
            <ThemedText size="sm">⚡ 500K MWh Clean Energy Generated</ThemedText>
            <ThemedText size="sm">🌍 1M+ Tons CO₂ Offset</ThemedText>
            <ThemedText size="sm">👥 10K+ Active Traders</ThemedText>
          </View>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText size="xl" weight="semibold">
          Quick Links
        </ThemedText>
        
        <View style={styles.links}>
          <ExternalLink href="/marketplace">
            <ThemedText style={styles.link} variant="primary">
              💹 Trading Dashboard
            </ThemedText>
          </ExternalLink>
          
          <ExternalLink href="/projects">
            <ThemedText style={styles.link} variant="primary">
              🌱 Browse Projects
            </ThemedText>
          </ExternalLink>
          
          <ExternalLink href="/learn">
            <ThemedText style={styles.link} variant="primary">
              📚 Carbon Credit Guide
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