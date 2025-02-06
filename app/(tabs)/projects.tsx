import { View, FlatList } from 'react-native';
import { useTheme, createCommonStyles } from '../styles/theme';
import { ThemedText } from '../../components/ThemedText';

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
  const commonStyles = createCommonStyles(theme);

  return (
    <View style={commonStyles.container}>
      <ThemedText style={commonStyles.h1}>My Carbon Credits</ThemedText>
      <FlatList
        data={MOCK_PURCHASED_CREDITS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={commonStyles.cardVariant}>
            <ThemedText style={commonStyles.h2}>{item.projectName}</ThemedText>
            <ThemedText style={commonStyles.subtitle1}>Credits: {item.credits}</ThemedText>
            <ThemedText style={commonStyles.subtitle1}>Investment: ${item.totalInvestment}</ThemedText>
            <ThemedText style={commonStyles.body2}>Purchased: {item.purchaseDate}</ThemedText>
          </View>
        )}
      />
    </View>
  );
} 