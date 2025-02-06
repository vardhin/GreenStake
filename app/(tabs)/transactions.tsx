import { View, ScrollView, StyleSheet, Platform, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useTheme } from '@/hooks/useTheme';
import Slider from '@react-native-community/slider';
import { useState } from 'react';

// Sample transaction data - you can replace this with your actual data source
const transactions = [
  { type: 'Carbon Credit Purchase', credits: 10, amount: 50.00 },
  { type: 'Carbon Credit Purchase', credits: 15, amount: 75.00 },
  { type: 'Carbon Credit Purchase', credits: 5, amount: 25.00 },
  { type: 'Carbon Credit Sale', credits: 3, amount: 15.00 },
  { type: 'Carbon Credit Sale', credits: 7, amount: 35.00 },
  { type: 'Carbon Credit Sale', credits: 4, amount: 20.00 },
  { type: 'Earnings', credits: 5, amount: 25.00 },
];

export default function TransactionsScreen() {
  const { spacing } = useTheme();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [searchQuery, setSearchQuery] = useState('');
  const [minAmount, setMinAmount] = useState(0);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: Platform.OS === 'ios' ? 50 : 30,
      padding: 16,
    },
    transactionItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: isDark ? '#2D2D2D' : '#e0e0e0',
    },
    transactionType: {
      fontSize: 16,
      fontWeight: '500',
    },
    creditsText: {
      fontSize: 14,
      color: isDark ? '#999' : '#666',
      marginTop: 4,
    },
    amount: {
      fontSize: 16,
      fontWeight: '500',
    },
    searchBar: {
      height: 40,
      borderWidth: 1,
      borderColor: isDark ? '#2D2D2D' : '#e0e0e0',
      borderRadius: 8,
      paddingHorizontal: 12,
      marginBottom: 16,
      color: isDark ? 'white' : 'black',
    },
    filterContainer: {
      marginBottom: 16,
    },
    sliderLabel: {
      marginBottom: 8,
    },
  });

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAmount = transaction.amount >= minAmount;
    return matchesSearch && matchesAmount;
  });

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#151718' : 'white' }]}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search transactions..."
        placeholderTextColor={isDark ? '#666' : '#999'}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      
      <View style={styles.filterContainer}>
        <ThemedText style={styles.sliderLabel}>
          Minimum Amount: ${minAmount.toFixed(2)}
        </ThemedText>
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={0}
          maximumValue={100}
          value={minAmount}
          onValueChange={setMinAmount}
          minimumTrackTintColor={isDark ? '#4CAF50' : '#2E7D32'}
          maximumTrackTintColor={isDark ? '#2D2D2D' : '#e0e0e0'}
          thumbTintColor={isDark ? '#4CAF50' : '#2E7D32'}
        />
      </View>

      <ScrollView>
        {filteredTransactions.map((transaction, index) => (
          <View key={index} style={styles.transactionItem}>
            <View>
              <ThemedText style={styles.transactionType}>{transaction.type}</ThemedText>
              <ThemedText style={styles.creditsText}>For {transaction.credits} credits</ThemedText>
            </View>
            <ThemedText style={styles.amount}>${transaction.amount.toFixed(2)}</ThemedText>
          </View>
        ))}
      </ScrollView>
    </View>
  );
} 