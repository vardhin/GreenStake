import { useState } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Platform } from 'react-native';
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

  const filteredProjects = PROJECTS.filter(project => {
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
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
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
    projectTitle: {
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 4,
    },
    returns: {
      color: '#666',
      fontSize: 14,
    },
    investButton: {
      backgroundColor: '#4CAF50',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
    },
    investButtonText: {
      color: '#fff',
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
  });

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#151718' : 'white' }]}>
      <ScrollView>
        {/* Main Filter Tabs */}
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

        {/* Project Type Filters */}
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

        {/* Return Expectation Slider */}
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

        {/* Projects List */}
        <View style={styles.projectsContainer}>
          <ThemedText style={styles.projectsTitle}>Projects</ThemedText>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <View key={project.title} style={styles.projectCard}>
                <View>
                  <ThemedText style={styles.projectTitle}>{project.title}</ThemedText>
                  <ThemedText style={styles.returns}>
                    Expected returns: {project.returns}
                  </ThemedText>
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