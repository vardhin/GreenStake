import { View, Text, TextInput, Pressable, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { theme, commonStyles } from '../styles/theme';

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

  return (
    <View style={[commonStyles.container, commonStyles.gap]}>
      <Text style={styles.balance}>Balance: ${userBalance}</Text>
      
      {!selectedProject ? (
        <FlatList
          data={MOCK_PROJECTS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              style={commonStyles.cardVariant}
              onPress={() => setSelectedProject(item)}>
              <Text style={commonStyles.title}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>Price per credit: ${item.creditPrice}</Text>
              <Text style={styles.available}>Available credits: {item.availableCredits}</Text>
            </Pressable>
          )}
        />
      ) : (
        <View style={commonStyles.card}>
          <Pressable
            style={styles.backButton}
            onPress={() => setSelectedProject(null)}>
            <FontAwesome name="arrow-left" size={24} color={theme.colors.text.primary} />
          </Pressable>
          
          <Text style={commonStyles.title}>{selectedProject.name}</Text>
          <View style={styles.inputContainer}>
            <Text style={commonStyles.label}>Investment Amount ($)</Text>
            <TextInput
              style={commonStyles.input}
              keyboardType="numeric"
              value={investmentAmount}
              onChangeText={setInvestmentAmount}
              placeholder="Enter amount"
            />
          </View>
          
          <Text style={styles.calculatedCredits}>
            Credits to receive: {calculateCredits(investmentAmount)}
          </Text>
          
          <Pressable
            style={commonStyles.button}
            onPress={handlePurchase}>
            <Text style={commonStyles.buttonText}>Purchase Credits</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

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
