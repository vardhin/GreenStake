import { StyleSheet, ScrollView, Pressable, useColorScheme } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        {/* Hero Section */}
        <ThemedView style={styles.heroSection}>
          <ThemedText type="title">Welcome to GreenStake</ThemedText>
          <ThemedText style={styles.subtitle}>
            Trade carbon credits and make a positive impact on our planet
          </ThemedText>
        </ThemedView>

        {/* Quick Actions */}
        <ThemedView style={styles.actionContainer}>
          <Pressable style={[styles.actionButton, { backgroundColor: Colors[colorScheme ?? 'light'].secondary }]}>
            <FontAwesome name="exchange" size={24} color={Colors[colorScheme ?? 'light'].tint} />
            <ThemedText style={styles.actionText}>Trade Credits</ThemedText>
          </Pressable>
          <Pressable style={[styles.actionButton, { backgroundColor: Colors[colorScheme ?? 'light'].secondary }]}>
            <FontAwesome name="leaf" size={24} color={Colors[colorScheme ?? 'light'].tint} />
            <ThemedText style={styles.actionText}>View Projects</ThemedText>
          </Pressable>
          <Pressable style={[styles.actionButton, { backgroundColor: Colors[colorScheme ?? 'light'].secondary }]}>
            <FontAwesome name="line-chart" size={24} color={Colors[colorScheme ?? 'light'].tint} />
            <ThemedText style={styles.actionText}>Market Stats</ThemedText>
          </Pressable>
        </ThemedView>

        {/* Market Overview */}
        <ThemedView style={[styles.section, { backgroundColor: Colors[colorScheme ?? 'light'].secondary }]}>
          <ThemedText type="title" style={styles.sectionTitle}>Market Overview</ThemedText>
          <ThemedText>Current Carbon Credit Price: $25/ton</ThemedText>
          <ThemedText>Available Credits: 1,500</ThemedText>
        </ThemedView>

        {/* Featured Projects */}
        <ThemedView style={[styles.section, { backgroundColor: Colors[colorScheme ?? 'light'].secondary }]}>
          <ThemedText type="title" style={styles.sectionTitle}>Featured Projects</ThemedText>
          <ThemedText>Rainforest Conservation - Brazil</ThemedText>
          <ThemedText>Wind Farm Development - Texas</ThemedText>
          <ThemedText>Solar Energy Initiative - India</ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heroSection: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  actionButton: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    width: '30%',
  },
  actionText: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
  },
  section: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    marginBottom: 10,
    fontSize: 18,
  },
});
