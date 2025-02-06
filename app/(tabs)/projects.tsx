import { View, Text, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

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
      ...theme.typography.title,
      color: theme.colors.text.primary,
      marginBottom: theme.spacing.sm,
    },
    details: {
      ...theme.typography.subtitle,
      color: theme.colors.primary,
    },
    date: {
      ...theme.typography.body,
      color: theme.colors.text.secondary,
      marginTop: theme.spacing.sm,
    },
  });

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1, padding: theme.spacing.lg }}>
      <Text style={{ ...theme.typography.h1, color: theme.colors.text.primary }}>My Carbon Credits</Text>
      <FlatList
        data={MOCK_PURCHASED_CREDITS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{
            backgroundColor: theme.colors.surfaceVariant,
            borderRadius: theme.borderRadius.lg,
            padding: theme.spacing.lg,
            marginVertical: theme.spacing.sm,
            ...theme.elevation.small,
          }}>
            <Text style={styles.projectName}>{item.projectName}</Text>
            <Text style={styles.details}>Credits: {item.credits}</Text>
            <Text style={styles.details}>Investment: ${item.totalInvestment}</Text>
            <Text style={styles.date}>Purchased: {item.purchaseDate}</Text>
          </View>
        )}
      />
    </View>
  );
} 