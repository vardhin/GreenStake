import { View, Text, TextInput, Pressable, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';

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
    balance: {
      ...theme.typography.h2,
      color: theme.colors.text.primary,
      padding: theme.spacing.md,
    },
    description: {
      ...theme.typography.body1,
      color: theme.colors.text.primary,
      marginBottom: theme.spacing.sm,
    },
    price: {
      ...theme.typography.subtitle1,
      color: theme.colors.text.primary,
      fontWeight: '600',
    },
    available: {
      ...theme.typography.body2,
      color: theme.colors.text.secondary,
    },
    backButton: {
      position: 'absolute',
      top: theme.spacing.md,
      left: theme.spacing.md,
      zIndex: 1,
    },
    inputContainer: {
      marginBottom: theme.spacing.lg,
    },
    calculatedCredits: {
      ...theme.typography.h3,
      color: theme.colors.text.primary,
      textAlign: 'center',
      marginVertical: theme.spacing.lg,
    },
  });

  return (
    <ThemedView style={{ flex: 1, padding: theme.spacing.lg }}>
      {!selectedProject ? (
        <FlatList
          data={MOCK_PROJECTS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              style={{
                backgroundColor: theme.colors.surface,
                borderRadius: theme.borderRadius.lg,
                padding: theme.spacing.lg,
                marginVertical: theme.spacing.sm,
                ...theme.elevation.small,
              }}
              onPress={() => setSelectedProject(item)}>
              <ThemedText type="title">{item.name}</ThemedText>
              <ThemedText style={styles.description}>{item.description}</ThemedText>
              <ThemedText style={styles.price}>
                Price per credit: ${item.creditPrice}
              </ThemedText>
              <ThemedText style={styles.available}>
                Available: {item.availableCredits} credits
              </ThemedText>
            </Pressable>
          )}
        />
      ) : (
        <ThemedView style={{
          backgroundColor: theme.colors.surface,
          borderRadius: theme.borderRadius.lg,
          padding: theme.spacing.lg,
          ...theme.elevation.small,
        }}>
          <Pressable
            style={styles.backButton}
            onPress={() => setSelectedProject(null)}>
            <FontAwesome name="arrow-left" size={24} color={theme.colors.text.primary} />
          </Pressable>
          
          <ThemedText type="title">{selectedProject.name}</ThemedText>
          <View style={styles.inputContainer}>
            <ThemedText type="subtitle">Investment Amount ($)</ThemedText>
            <TextInput
              style={{
                backgroundColor: theme.colors.surface,
                borderRadius: theme.borderRadius.md,
                padding: theme.spacing.md,
                color: theme.colors.text.primary,
                borderWidth: 1,
                borderColor: theme.colors.border,
              }}
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
            style={{
              backgroundColor: theme.colors.primary,
              borderRadius: theme.borderRadius.md,
              padding: theme.spacing.md,
              alignItems: 'center',
              ...theme.elevation.small,
            }}
            onPress={handlePurchase}>
            <ThemedText style={{ color: theme.colors.text.inverse }}>
              Purchase Credits
            </ThemedText>
          </Pressable>
        </ThemedView>
      )}
    </ThemedView>
  );
} 
