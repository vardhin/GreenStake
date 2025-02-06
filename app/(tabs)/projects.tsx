import { StyleSheet, View, Text, ScrollView, Image, Pressable } from 'react-native';

export default function ProjectsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sustainable Projects</Text>
      
      <View style={styles.projectCard}>
        <Image 
          source={{ uri: 'https://example.com/rainforest.jpg' }}
          style={styles.projectImage}
        />
        <View style={styles.projectInfo}>
          <Text style={styles.projectTitle}>Rainforest Conservation</Text>
          <Text style={styles.projectLocation}>Brazil</Text>
          <Text style={styles.projectDescription}>
            Protecting 50,000 hectares of Amazon rainforest through sustainable management and local community engagement.
          </Text>
          <Pressable style={styles.learnMoreButton}>
            <Text style={styles.buttonText}>Learn More</Text>
          </Pressable>
        </View>
      </View>

      {/* Add more project cards as needed */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F8E9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1B5E20',
    padding: 16,
  },
  projectCard: {
    backgroundColor: '#C8E6C9',
    margin: 16,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
  },
  projectImage: {
    width: '100%',
    height: 200,
  },
  projectInfo: {
    padding: 16,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B5E20',
  },
  projectLocation: {
    fontSize: 16,
    color: '#2E7D32',
    marginTop: 4,
  },
  projectDescription: {
    marginTop: 8,
    color: '#1B5E20',
    lineHeight: 20,
  },
  learnMoreButton: {
    backgroundColor: '#2E7D32',
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
}); 