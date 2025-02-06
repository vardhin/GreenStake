import { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Platform, TextInput, Modal, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import Slider from '@react-native-community/slider';
import { useTheme } from '@/hooks/useTheme';
import { useColorScheme } from '@/hooks/useColorScheme';
import { api } from '../../services/api';

const FILTER_TABS = ['All', 'Favorites', 'Invested'];
const PROJECT_TYPES = ['Trees', 'Solar', 'Wind', 'Methane'];

interface Project {
  title: string;
  returns: string;
  investors: number;
  type: typeof PROJECT_TYPES[number];
}

interface Transaction {
  projectTitle: string;
  amount: number;
  date: Date;
  type: 'investment';
}

interface UserBalance {
  available: number;
  invested: number;
}

export default function ForYouScreen() {
  const { spacing } = useTheme();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [activeFilter, setActiveFilter] = useState(FILTER_TABS[0]);
  const [activeType, setActiveType] = useState<string | null>(null);
  const [returnExpectation, setReturnExpectation] = useState(1);
  const [favoriteProjects, setFavoriteProjects] = useState<string[]>([]);
  const [investedProjects, setInvestedProjects] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showInvestModal, setShowInvestModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [userBalance, setUserBalance] = useState<UserBalance>({
    available: 10000, // Example initial balance
    invested: 0,
  });
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load projects when component mounts
  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setIsLoading(true);
      const response = await api.getAvailableCredits();
      setProjects(response.data);
    } catch (err) {
      console.error('Failed to load projects:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredProjects = projects.filter(project => {
    if (searchQuery && !project.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    
    if (activeFilter === 'Favorites' && !favoriteProjects.includes(project.title)) return false;
    if (activeFilter === 'Invested' && !investedProjects.includes(project.title)) return false;
    
    if (activeType && project.type !== activeType) return false;
    
    const [minReturn] = project.returns.split('-').map(r => parseFloat(r));
    if (minReturn < returnExpectation) return false;
    
    return true;
  });

  const handleInvestment = () => {
    if (!selectedProject || !investmentAmount) return;
    
    const amount = parseFloat(investmentAmount);
    
    if (isNaN(amount) || amount <= 0) {
      Alert.alert('Invalid Amount', 'Please enter a valid investment amount');
      return;
    }
    
    if (amount > userBalance.available) {
      Alert.alert('Insufficient Funds', 'You do not have enough balance for this investment');
      return;
    }

    // Update user balance
    setUserBalance(prev => ({
      available: prev.available - amount,
      invested: prev.invested + amount,
    }));

    // Add to transactions
    setTransactions(prev => [...prev, {
      projectTitle: selectedProject.title,
      amount,
      date: new Date(),
      type: 'investment',
    }]);

    // Add to invested projects
    setInvestedProjects(prev => [...prev, selectedProject.title]);

    // Close modal and reset
    setShowInvestModal(false);
    setSelectedProject(null);
    setInvestmentAmount('');

    Alert.alert('Success', 'Investment completed successfully!');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: Platform.OS === 'ios' ? 50 : 30,
      padding: 16,
    },
    filterTabs: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    filterTab: {
      padding: 8,
    },
    activeTab: {
      color: '#4CAF50',
    },
    tabText: {
      color: '#666',
    },
    projectTypes: {
      marginBottom: 20,
    },
    typeButton: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      marginRight: 8,
      backgroundColor: isDark ? '#1A1D1E' : '#f0f0f0',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: 'transparent',
    },
    activeTypeButton: {
      borderColor: '#4CAF50',
    },
    sliderContainer: {
      marginBottom: 20,
    },
    sliderTitle: {
      marginBottom: 8,
      fontSize: 16,
      fontWeight: 'bold',
    },
    slider: {
      height: 40,
    },
    projectsContainer: {
      flex: 1,
    },
    projectsTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    projectCard: {
      padding: 16,
      marginBottom: 12,
      backgroundColor: isDark ? '#1A1D1E' : '#fff',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    projectContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    projectInfo: {
      flex: 1,
      marginRight: 12,
    },
    projectTitle: {
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 4,
      flexWrap: 'wrap',
    },
    projectDetails: {
      marginTop: 8,
    },
    returns: {
      color: isDark ? '#999' : '#666',
      fontSize: 14,
      marginBottom: 4,
    },
    investors: {
      color: isDark ? '#999' : '#666',
      fontSize: 14,
    },
    investButton: {
      backgroundColor: '#4CAF50',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
      minWidth: 100,
      alignItems: 'center',
    },
    investButtonText: {
      color: '#fff',
      fontWeight: '500',
    },
    sliderValue: {
      marginTop: 8,
      textAlign: 'center',
    },
    noProjects: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
      color: '#666',
    },
    searchContainer: {
      marginBottom: 16,
    },
    searchInput: {
      backgroundColor: isDark ? '#1A1D1E' : '#f0f0f0',
      padding: 12,
      borderRadius: 8,
      color: isDark ? '#fff' : '#000',
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      width: '80%',
      padding: 20,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    balanceText: {
      marginBottom: 16,
      fontSize: 16,
    },
    investmentInput: {
      backgroundColor: '#f0f0f0',
      padding: 12,
      borderRadius: 8,
      marginBottom: 16,
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    modalButton: {
      flex: 1,
      padding: 12,
      borderRadius: 8,
      marginHorizontal: 8,
      alignItems: 'center',
    },
    cancelButton: {
      backgroundColor: '#ff4444',
    },
    confirmButton: {
      backgroundColor: '#4CAF50',
    },
    modalButtonText: {
      color: 'white',
      fontWeight: '500',
    },
  });

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#151718' : 'white' }]}>
      <ScrollView>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search projects..."
            placeholderTextColor={isDark ? '#666' : '#999'}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <View style={styles.filterTabs}>
          {FILTER_TABS.map((tab) => (
            <TouchableOpacity 
              key={tab} 
              style={styles.filterTab}
              onPress={() => setActiveFilter(tab)}
            >
              <ThemedText style={tab === activeFilter ? styles.activeTab : styles.tabText}>
                {tab}
              </ThemedText>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView horizontal style={styles.projectTypes}>
          {PROJECT_TYPES.map((type) => (
            <TouchableOpacity 
              key={type} 
              style={[
                styles.typeButton,
                activeType === type && styles.activeTypeButton
              ]}
              onPress={() => setActiveType(activeType === type ? null : type)}
            >
              <ThemedText>{type}</ThemedText>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.sliderContainer}>
          <ThemedText style={styles.sliderTitle}>Return Expectation</ThemedText>
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={5}
            step={1}
            value={returnExpectation}
            onValueChange={setReturnExpectation}
            minimumTrackTintColor="#4CAF50"
            maximumTrackTintColor={isDark ? '#666' : '#e0e0e0'}
          />
          <ThemedText style={styles.sliderValue}>
            Minimum {returnExpectation}% return
          </ThemedText>
        </View>

        <View style={styles.projectsContainer}>
          <ThemedText style={styles.projectsTitle}>Projects</ThemedText>
          {isLoading ? (
            <ThemedText style={styles.noProjects}>Loading projects...</ThemedText>
          ) : filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <View key={project.title} style={styles.projectCard}>
                <View style={styles.projectContent}>
                  <View style={styles.projectInfo}>
                    <ThemedText style={styles.projectTitle} numberOfLines={2}>
                      {project.title}
                    </ThemedText>
                    <View style={styles.projectDetails}>
                      <ThemedText style={styles.returns}>
                        Expected returns: {project.returns}
                      </ThemedText>
                      <ThemedText style={styles.investors}>
                        {project.investors} investors
                      </ThemedText>
                    </View>
                  </View>
                  <TouchableOpacity 
                    style={styles.investButton}
                    onPress={() => {
                      setSelectedProject(project);
                      setShowInvestModal(true);
                    }}
                  >
                    <ThemedText style={styles.investButtonText}>Invest Now</ThemedText>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (
            <ThemedText style={styles.noProjects}>
              No projects match your criteria
            </ThemedText>
          )}
        </View>
      </ScrollView>
      <Modal
        visible={showInvestModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowInvestModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: isDark ? '#1A1D1E' : 'white' }]}>
            <ThemedText style={styles.modalTitle}>Invest in {selectedProject?.title}</ThemedText>
            
            <ThemedText style={styles.balanceText}>
              Available Balance: ${userBalance.available.toLocaleString()}
            </ThemedText>
            
            <TextInput
              style={[styles.investmentInput, { color: isDark ? '#fff' : '#000' }]}
              placeholder="Enter investment amount"
              placeholderTextColor={isDark ? '#666' : '#999'}
              keyboardType="numeric"
              value={investmentAmount}
              onChangeText={setInvestmentAmount}
            />
            
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowInvestModal(false)}
              >
                <ThemedText style={styles.modalButtonText}>Cancel</ThemedText>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleInvestment}
              >
                <ThemedText style={styles.modalButtonText}>Confirm</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
} 