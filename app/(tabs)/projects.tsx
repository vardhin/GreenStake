import { View, Text, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import { theme, commonStyles } from '../styles/theme';

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
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>My Carbon Credits</Text>
      <FlatList
        data={MOCK_PURCHASED_CREDITS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={commonStyles.cardVariant}>
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

const styles = StyleSheet.create({
  projectName: {
    ...theme.typography.title,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  details: {
    ...theme.typography.subtitle,
    color: theme.colors.primary,
  },
  date: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.sm,
  },
}); 