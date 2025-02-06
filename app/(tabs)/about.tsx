import { ScrollView, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useTheme } from '@/hooks/useTheme';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Platform } from 'react-native';

export default function AboutScreen() {
  const { spacing } = useTheme();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: Platform.OS === 'ios' ? 50 : 30,
    },
    content: {
      padding: 16,
      gap: 24,
    },
    section: {
      gap: 12,
    },
    title: {
      marginBottom: 8,
    },
    paragraph: {
      lineHeight: 24,
    },
  });

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#151718' : 'white' }]}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <ThemedText size="xl" weight="bold" style={styles.title}>
            About GreenStake
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            GreenStake is a pioneering platform that connects businesses and individuals with verified carbon credit projects worldwide. Our mission is to make carbon offsetting accessible, transparent, and effective.
          </ThemedText>
        </View>

        <View style={styles.section}>
          <ThemedText size="lg" weight="bold">
            Our Process
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            1. Measure: We help you calculate your carbon footprint using industry-standard methodologies.
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            2. Offset: Purchase carbon credits from verified projects that reduce or remove greenhouse gases.
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            3. Track: Monitor your impact and receive regular updates about the projects you support.
          </ThemedText>
        </View>

        <View style={styles.section}>
          <ThemedText size="lg" weight="bold">
            Our Impact
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            Through our platform, we've helped offset millions of tons of CO2 emissions and supported numerous environmental projects worldwide, from reforestation initiatives to renewable energy developments.
          </ThemedText>
        </View>

        <View style={styles.section}>
          <ThemedText size="lg" weight="bold">
            Verification Process
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            All carbon credit projects on GreenStake are thoroughly vetted and verified by leading international standards such as Verra, Gold Standard, and American Carbon Registry. This ensures that your investment truly makes a difference in fighting climate change.
          </ThemedText>
        </View>
      </ScrollView>
    </View>
  );
} 