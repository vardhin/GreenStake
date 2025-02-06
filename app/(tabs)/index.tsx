import { ScrollView, Pressable, View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { theme, commonStyles } from '../styles/theme';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.scrollView}>
      <View style={commonStyles.container}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={commonStyles.header}>Welcome to GreenStake</Text>
          <Text style={styles.subtitle}>
            Trade carbon credits and make a positive impact on our planet
          </Text>
        </View>

        {/* Quick Actions */}
        <View style={[commonStyles.row, styles.actionContainer]}>
          <Pressable 
            style={styles.actionButton}
            onPress={() => router.push('/trade')}
          >
            <FontAwesome name="exchange" size={24} color={theme.colors.primary} />
            <Text style={styles.actionText}>Trade Credits</Text>
          </Pressable>
          <Pressable 
            style={styles.actionButton}
            onPress={() => router.push('/projects')}
          >
            <FontAwesome name="leaf" size={24} color={theme.colors.primary} />
            <Text style={styles.actionText}>View Projects</Text>
          </Pressable>
          <Pressable 
            style={styles.actionButton}
            onPress={() => router.push('/stats')}
          >
            <FontAwesome name="line-chart" size={24} color={theme.colors.primary} />
            <Text style={styles.actionText}>Market Stats</Text>
          </Pressable>
        </View>

        {/* Market Overview */}
        <View style={commonStyles.cardVariant}>
          <Text style={commonStyles.title}>Market Overview</Text>
          <Text style={commonStyles.body}>Current Carbon Credit Price: $25/ton</Text>
          <Text style={commonStyles.body}>Available Credits: 1,500</Text>
        </View>

        {/* Featured Projects */}
        <View style={commonStyles.cardVariant}>
          <Text style={commonStyles.title}>Featured Projects</Text>
          <Text style={commonStyles.body}>Rainforest Conservation - Brazil</Text>
          <Text style={commonStyles.body}>Wind Farm Development - Texas</Text>
          <Text style={commonStyles.body}>Solar Energy Initiative - India</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  heroSection: {
    ...commonStyles.cardVariant,
    alignItems: 'center',
  },
  subtitle: {
    ...theme.typography.subtitle,
    textAlign: 'center',
    marginTop: theme.spacing.sm,
    color: theme.colors.text,
  },
  actionContainer: {
    justifyContent: 'space-around',
  },
  actionButton: {
    ...commonStyles.centerContent,
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
    color: theme.colors.text,
    fontWeight: '600',
  },
});
