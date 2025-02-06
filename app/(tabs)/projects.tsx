import { View, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';

// Mock data - move to a separate file later
const MOCK_PURCHASED_CREDITS = [
  {
    id: '1',
    projectName: 'Amazon Rainforest Conservation',
    credits: 10,
    purchaseDate: '2024-03-20',
    totalInvestment: 250,
  },
  // Add more purchased credits as needed
];

export default function ProjectsScreen() {
  const theme = useTheme();
  
  const styles = StyleSheet.create({
    projectName: {
      ...theme.typography.h2,
      color: theme.colors.text.primary,
      marginBottom: theme.spacing.sm,
    },
    details: {
      ...theme.typography.subtitle1,
      color: theme.colors.primary,
    },
    date: {
      ...theme.typography.body2,
      color: theme.colors.text.secondary,
      marginTop: theme.spacing.sm,
    },
  });

  return (
    <ThemedView style={{ flex: 1, padding: theme.spacing.lg }}>
      <ThemedText type="title">My Carbon Credits</ThemedText>
      <FlatList
        data={MOCK_PURCHASED_CREDITS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ThemedView style={{
            backgroundColor: theme.colors.surfaceVariant,
            borderRadius: theme.borderRadius.lg,
            padding: theme.spacing.lg,
            marginVertical: theme.spacing.sm,
            ...theme.elevation.small,
          }}>
            <ThemedText style={styles.projectName}>{item.projectName}</ThemedText>
            <ThemedText style={styles.details}>Credits: {item.credits}</ThemedText>
            <ThemedText style={styles.details}>Investment: ${item.totalInvestment}</ThemedText>
            <ThemedText style={styles.date}>Purchased: {item.purchaseDate}</ThemedText>
          </ThemedView>
        )}
      />
    </ThemedView>
  );
} 