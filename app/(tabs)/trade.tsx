import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function TradeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Trade Carbon Credits</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Amount (tons)</Text>
          <TextInput 
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter amount"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, styles.buyButton]}>
            <Text style={styles.buttonText}>Buy Credits</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.sellButton]}>
            <Text style={styles.buttonText}>Sell Credits</Text>
          </Pressable>
        </View>
      </View>
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
}); 