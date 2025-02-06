import { useState } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Platform, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import Slider from '@react-native-community/slider';
import { useTheme } from '@/hooks/useTheme';
import { useColorScheme } from '@/hooks/useColorScheme';

const FILTER_TABS = ['All', 'Favorites', 'Invested'];
const PROJECT_TYPES = ['Trees', 'Solar', 'Wind', 'Methane'];

interface Project {
  title: string;
  returns: string;
  investors: number;
  type: typeof PROJECT_TYPES[number];
}

const PROJECTS: Project[] = [
  {
    title: 'Solar Project in California',
    returns: '2-3%',
    investors: 3,
    type: 'Solar',
  },
  {
    title: 'Solar Project in Texas',
    returns: '3-4%',
    investors: 3,
    type: 'Solar',
  },
  {
    title: 'Tree Planting in Brazil',
    returns: '3-4%',
    investors: 3,
    type: 'Trees',
  },
];

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

  const filteredProjects = PROJECTS.filter(project => {
    if (searchQuery && !project.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    
    if (activeFilter === 'Favorites' && !favoriteProjects.includes(project.title)) return false;
    if (activeFilter === 'Invested' && !investedProjects.includes(project.title)) return false;
    
    if (activeType && project.type !== activeType) return false;
    
    const [minReturn] = project.returns.split('-').map(r => parseFloat(r));
    if (minReturn < returnExpectation) return false;
    
    return true;
  });

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
          {filteredProjects.length > 0 ? (
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
                      console.log(`Investing in ${project.title}`);
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
    </View>
  );
} 