import { View, ScrollView, StyleSheet, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useTheme } from '@/hooks/useTheme';

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
  });

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#151718' : 'white' }]}>
      <ScrollView>
        {transactions.map((transaction, index) => (
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