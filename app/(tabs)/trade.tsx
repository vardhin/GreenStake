import { StyleSheet, View, Text, TextInput, Pressable, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

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
    <View style={styles.container}>
      <Text style={styles.balance}>Balance: ${userBalance}</Text>
      
      {!selectedProject ? (
        <FlatList
          data={MOCK_PROJECTS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              style={styles.card}
              onPress={() => setSelectedProject(item)}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>Price per credit: ${item.creditPrice}</Text>
              <Text style={styles.available}>Available credits: {item.availableCredits}</Text>
            </Pressable>
          )}
        />
      ) : (
        <View style={styles.card}>
          <Pressable
            style={styles.backButton}
            onPress={() => setSelectedProject(null)}>
            <FontAwesome name="arrow-left" size={24} color="#1B5E20" />
          </Pressable>
          
          <Text style={styles.title}>{selectedProject.name}</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Investment Amount ($)</Text>
            <TextInput
              style={styles.input}
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
            style={[styles.button, styles.buyButton]}
            onPress={handlePurchase}>
            <Text style={styles.buttonText}>Purchase Credits</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F1F8E9',
  },
  card: {
    backgroundColor: '#C8E6C9',
    padding: 20,
    borderRadius: 15,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#1B5E20',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buyButton: {
    backgroundColor: '#2E7D32',
  },
  sellButton: {
    backgroundColor: '#558B2F',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  balance: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B5E20',
    padding: 16,
  },
  description: {
    fontSize: 14,
    color: '#1B5E20',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: '#1B5E20',
    fontWeight: '600',
  },
  available: {
    fontSize: 14,
    color: '#558B2F',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  calculatedCredits: {
    fontSize: 18,
    color: '#1B5E20',
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: '600',
  },
}); 
