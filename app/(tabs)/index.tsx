import { ScrollView, Pressable, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTheme, createCommonStyles } from '../hooks/useTheme';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';

export default function HomeScreen() {
  const router = useRouter();
  const theme = useTheme();
  const commonStyles = createCommonStyles(theme);
  
  const styles = StyleSheet.create({
    actionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginVertical: theme.spacing.lg,
    },
    actionButton: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.md,
      width: '30%',
      backgroundColor: theme.colors.surface,
      ...theme.elevation.small,
    },
  });

  return (
    <ThemedView style={commonStyles.container}>
      <ScrollView style={commonStyles.scrollView}>
        {/* Hero Section */}
        <View style={commonStyles.cardVariant}>
          <ThemedText style={commonStyles.h1}>Welcome to GreenStake</ThemedText>
          <ThemedText style={commonStyles.subtitle1}>
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
            <ThemedText style={commonStyles.caption}>Trade Credits</ThemedText>
          </Pressable>
          <Pressable 
            style={styles.actionButton}
            onPress={() => router.push('/projects')}
          >
            <FontAwesome name="leaf" size={24} color={theme.colors.primary} />
            <ThemedText style={commonStyles.caption}>View Projects</ThemedText>
          </Pressable>
          <Pressable 
            style={styles.actionButton}
            onPress={() => router.push('/stats')}
          >
            <FontAwesome name="line-chart" size={24} color={theme.colors.primary} />
            <ThemedText style={commonStyles.caption}>Market Stats</ThemedText>
          </Pressable>
        </View>

        {/* Market Overview */}
        <View style={commonStyles.card}>
          <ThemedText style={commonStyles.h2}>Market Overview</ThemedText>
          <ThemedText style={commonStyles.body1}>Current Carbon Credit Price: $25/ton</ThemedText>
          <ThemedText style={commonStyles.body1}>Available Credits: 1,500</ThemedText>
        </View>

        {/* Featured Projects */}
        <View style={commonStyles.card}>
          <ThemedText style={commonStyles.h2}>Featured Projects</ThemedText>
          <ThemedText style={commonStyles.body1}>Rainforest Conservation - Brazil</ThemedText>
          <ThemedText style={commonStyles.body1}>Wind Farm Development - Texas</ThemedText>
          <ThemedText style={commonStyles.body1}>Solar Energy Initiative - India</ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
