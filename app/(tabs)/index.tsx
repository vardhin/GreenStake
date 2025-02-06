import { StyleSheet, ScrollView, Pressable, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.title}>Welcome to GreenStake</Text>
          <Text style={styles.subtitle}>
            Trade carbon credits and make a positive impact on our planet
          </Text>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionContainer}>
          <Pressable 
            style={styles.actionButton}
            onPress={() => navigation.navigate('Trade')}
          >
            <FontAwesome 
              name="exchange" 
              size={24} 
              color="#2E7D32"
              accessibilityLabel="Trade Credits"
            />
            <Text style={styles.actionText}>Trade Credits</Text>
          </Pressable>
          <Pressable 
            style={styles.actionButton}
            onPress={() => navigation.navigate('Projects')}
          >
            <FontAwesome name="leaf" size={24} color="#2E7D32" />
            <Text style={styles.actionText}>View Projects</Text>
          </Pressable>
          <Pressable 
            style={styles.actionButton}
            onPress={() => navigation.navigate('Stats')}
          >
            <FontAwesome name="line-chart" size={24} color="#2E7D32" />
            <Text style={styles.actionText}>Market Stats</Text>
          </Pressable>
        </View>

        {/* Market Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Market Overview</Text>
          <Text>Current Carbon Credit Price: $25/ton</Text>
          <Text>Available Credits: 1,500</Text>
        </View>

        {/* Featured Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Projects</Text>
          <Text>Rainforest Conservation - Brazil</Text>
          <Text>Wind Farm Development - Texas</Text>
          <Text>Solar Energy Initiative - India</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F1F8E9',
  },
  heroSection: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#C8E6C9',
    borderRadius: 15,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#1B5E20',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  actionButton: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    width: '30%',
    backgroundColor: '#A5D6A7',
    elevation: 3,
  },
  actionText: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
    color: '#1B5E20',
    fontWeight: '600',
  },
  section: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#C8E6C9',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    marginBottom: 10,
    fontSize: 18,
    color: '#1B5E20',
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1B5E20',
  },
});
