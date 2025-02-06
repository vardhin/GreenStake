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
            GreenStake
          </ThemedText>
          <HelloWave />
        </View>
        
        <ThemedText 
          variant="secondary" 
          size="lg" 
          style={{ marginTop: spacing.sm }}
        >
          Leading institutional-grade carbon credit exchange platform
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText size="xl" weight="semibold">
          Market Insights
        </ThemedText>
        
        <ThemedView variant="secondary" style={styles.card}>
          <ThemedText weight="semibold">Market Performance</ThemedText>
          <ThemedText variant="secondary">
            VCU Spot Price: $25.50/tCO₂e
            24h Volume: 150,000 VCUs
            7d Price Change: +2.3%
          </ThemedText>
        </ThemedView>

        <ThemedView variant="secondary" style={styles.card}>
          <ThemedText weight="semibold">Project Portfolio</ThemedText>
          <ThemedText variant="secondary">
            Access a diverse range of verified carbon projects meeting international standards.
            Featuring VERRA, Gold Standard, and ACR certified initiatives across multiple sectors.
          </ThemedText>
        </ThemedView>

        <ThemedView variant="secondary" style={styles.card}>
          <ThemedText weight="semibold">Platform Metrics</ThemedText>
          <View style={styles.typographyDemo}>
            <ThemedText size="sm">$2.5B+ Total Trading Volume</ThemedText>
            <ThemedText size="sm">15M+ Carbon Credits Traded</ThemedText>
            <ThemedText size="sm">500+ Verified Projects</ThemedText>
            <ThemedText size="sm">200+ Institutional Clients</ThemedText>
          </View>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText size="xl" weight="semibold">
          Platform Access
        </ThemedText>
        
        <View style={styles.links}>
          <ExternalLink href="/trading">
            <ThemedText style={styles.link} variant="primary">
              Trading Platform
            </ThemedText>
          </ExternalLink>
          
          <ExternalLink href="/portfolio">
            <ThemedText style={styles.link} variant="primary">
              Project Portfolio
            </ThemedText>
          </ExternalLink>
          
          <ExternalLink href="/insights">
            <ThemedText style={styles.link} variant="primary">
              Market Intelligence
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