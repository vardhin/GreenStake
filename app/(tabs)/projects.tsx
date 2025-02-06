import { View, Text, StyleSheet, FlatList } from 'react-native';

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
    <View style={styles.container}>
      <Text style={styles.header}>My Carbon Credits</Text>
      <FlatList
        data={MOCK_PURCHASED_CREDITS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.projectName}>{item.projectName}</Text>
            <Text style={styles.credits}>Credits: {item.credits}</Text>
            <Text style={styles.investment}>Investment: ${item.totalInvestment}</Text>
            <Text style={styles.date}>Purchased: {item.purchaseDate}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F1F8E9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#C8E6C9',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 8,
  },
  credits: {
    fontSize: 16,
    color: '#2E7D32',
  },
  investment: {
    fontSize: 16,
    color: '#2E7D32',
  },
  date: {
    fontSize: 14,
    color: '#558B2F',
    marginTop: 8,
  },
}); 