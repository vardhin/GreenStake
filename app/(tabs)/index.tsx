import { ScrollView, Pressable, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTheme } from '../hooks/useTheme';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';

export default function HomeScreen() {
  const router = useRouter();
  const theme = useTheme();
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    scrollView: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    heroSection: {
      backgroundColor: theme.colors.surfaceVariant,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing.lg,
      marginVertical: theme.spacing.sm,
      ...theme.elevation.small,
      alignItems: 'center',
    },
    subtitle: {
      fontSize: theme.typography.subtitle1.fontSize,
      fontWeight: theme.typography.subtitle1.fontWeight,
      textAlign: 'center',
      marginTop: theme.spacing.sm,
      color: theme.colors.text.primary,
    },
    actionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    actionButton: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.md,
      width: '30%',
      backgroundColor: theme.colors.primaryLight,
      ...theme.elevation.small,
    },
    actionText: {
      ...theme.typography.caption,
      marginTop: theme.spacing.sm,
      textAlign: 'center',
      color: theme.colors.text.primary,
      fontWeight: '600',
    },
  });

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1, padding: theme.spacing.lg }}>
          {/* Hero Section */}
          <View style={styles.heroSection}>
            <ThemedText type="title">Welcome to GreenStake</ThemedText>
            <ThemedText style={styles.subtitle}>
              Trade carbon credits and make a positive impact on our planet
            </ThemedText>
          </View>

          {/* Quick Actions */}
          <View style={styles.actionContainer}>
            <Pressable 
              style={styles.actionButton}
              onPress={() => router.push('/trade')}
            >
              <FontAwesome name="exchange" size={24} color={theme.colors.primary} />
              <ThemedText style={styles.actionText}>Trade Credits</ThemedText>
            </Pressable>
            <Pressable 
              style={styles.actionButton}
              onPress={() => router.push('/projects')}
            >
              <FontAwesome name="leaf" size={24} color={theme.colors.primary} />
              <ThemedText style={styles.actionText}>View Projects</ThemedText>
            </Pressable>
            <Pressable 
              style={styles.actionButton}
              onPress={() => router.push('/stats')}
            >
              <FontAwesome name="line-chart" size={24} color={theme.colors.primary} />
              <ThemedText style={styles.actionText}>Market Stats</ThemedText>
            </Pressable>
          </View>

          {/* Market Overview */}
          <View style={styles.heroSection}>
            <ThemedText type="title">Market Overview</ThemedText>
            <ThemedText>Current Carbon Credit Price: $25/ton</ThemedText>
            <ThemedText>Available Credits: 1,500</ThemedText>
          </View>

          {/* Featured Projects */}
          <View style={styles.heroSection}>
            <ThemedText type="title">Featured Projects</ThemedText>
            <ThemedText>Rainforest Conservation - Brazil</ThemedText>
            <ThemedText>Wind Farm Development - Texas</ThemedText>
            <ThemedText>Solar Energy Initiative - India</ThemedText>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
