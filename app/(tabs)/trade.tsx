import { View, Text, TextInput, Pressable, FlatList, StyleSheet } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme, createCommonStyles } from '../hooks/useTheme';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';

// You'll want to move these types to a separate types file later
type Project = {
  id: string;
  name: string;
  description: string;
  creditPrice: number; // Price per credit
  availableCredits: number;
};

// Mock data - move to a separate file later
const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Amazon Rainforest Conservation',
    description: 'Protecting rainforest areas in Brazil',
    creditPrice: 25, // $25 per credit
    availableCredits: 1000,
  },
  {
    id: '2',
    name: 'Wind Farm Project',
    description: 'Clean energy generation in Texas',
    creditPrice: 20,
    availableCredits: 2000,
  },
  // Add more projects as needed
];

export default function TradeScreen() {
  const theme = useTheme();
  const commonStyles = createCommonStyles(theme);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [userBalance, setUserBalance] = useState(10000); // Mock initial balance

  const calculateCredits = (amount: string) => {
    if (!selectedProject || !amount) return 0;
    return Math.floor(Number(amount) / selectedProject.creditPrice);
  };

  const handlePurchase = () => {
    if (!selectedProject || !investmentAmount) return;
    
    const amount = Number(investmentAmount);
    if (amount > userBalance) {
      alert('Insufficient balance');
      return;
    }

    const creditsToReceive = calculateCredits(investmentAmount);
    if (creditsToReceive > selectedProject.availableCredits) {
      alert('Not enough credits available');
      return;
    }

    // Update balance
    setUserBalance(prev => prev - amount);
    // Here you would typically call an API to update the user's credits
    // and update the project's available credits
    
    alert(`Successfully purchased ${creditsToReceive} credits!`);
    setInvestmentAmount('');
    setSelectedProject(null);
  };

  const styles = StyleSheet.create({
    backButton: {
      position: 'absolute',
      top: theme.spacing.md,
      left: theme.spacing.md,
      zIndex: 1,
    },
    calculatedCredits: {
      ...theme.typography.h3,
      textAlign: 'center',
      marginVertical: theme.spacing.lg,
    },
    input: {
      ...commonStyles.input,
      width: '100%',
    },
    purchaseButton: {
      ...commonStyles.button,
      marginTop: theme.spacing.lg,
    },
    purchaseButtonText: {
      ...commonStyles.buttonText,
    },
  });

  return (
    <ThemedView style={commonStyles.container}>
      {!selectedProject ? (
        <FlatList
          data={MOCK_PROJECTS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              style={commonStyles.card}
              onPress={() => setSelectedProject(item)}>
              <ThemedText style={commonStyles.h2}>{item.name}</ThemedText>
              <ThemedText style={commonStyles.body1}>{item.description}</ThemedText>
              <ThemedText style={commonStyles.subtitle1}>
                Price per credit: ${item.creditPrice}
              </ThemedText>
              <ThemedText style={commonStyles.body2}>
                Available: {item.availableCredits} credits
              </ThemedText>
            </Pressable>
          )}
        />
      ) : (
        <ThemedView style={commonStyles.card}>
          <Pressable
            style={styles.backButton}
            onPress={() => setSelectedProject(null)}>
            <FontAwesome name="arrow-left" size={24} color={theme.colors.text.primary} />
          </Pressable>
          
          <ThemedText style={commonStyles.h2}>{selectedProject.name}</ThemedText>
          <View style={commonStyles.gap}>
            <ThemedText style={commonStyles.inputLabel}>Investment Amount ($)</ThemedText>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={investmentAmount}
              onChangeText={setInvestmentAmount}
              placeholder="Enter amount"
              placeholderTextColor={theme.colors.text.secondary}
            />
          </View>
          
          <ThemedText style={styles.calculatedCredits}>
            Credits to receive: {calculateCredits(investmentAmount)}
          </ThemedText>
          
          <Pressable
            style={styles.purchaseButton}
            onPress={handlePurchase}>
            <ThemedText style={styles.purchaseButtonText}>
              Purchase Credits
            </ThemedText>
          </Pressable>
        </ThemedView>
      )}
    </ThemedView>
  );
} 
