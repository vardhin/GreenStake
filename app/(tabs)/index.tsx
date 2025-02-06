import { ScrollView, StyleSheet, View, Image, ImageBackground, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useTheme } from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const { spacing, colors } = useTheme();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Search */}
        <View style={styles.searchHeader}>
          <Pressable style={styles.searchButton}>
            <Ionicons name="search" size={20} color={colors.text} />
          </Pressable>
        </View>

        {/* Hero Section */}
        <ImageBackground
          source={{ uri: "https://cdn.usegalileo.ai/sdxl10/55c46daa-6b15-4e31-97dc-29e74e789638.png" }}
          style={styles.hero}
          imageStyle={styles.heroImage}
        >
          <View style={styles.heroContent}>
            <ThemedText size="xl" weight="bold" style={styles.heroTitle}>
              Welcome to GreenStake, the carbon credit exchange platform
            </ThemedText>
            <ThemedText style={styles.heroSubtitle}>
              Buy and sell carbon credits with ease. The more you buy, the more we plant.
            </ThemedText>
          </View>
        </ImageBackground>

        {/* How it Works Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <ThemedText size="lg" weight="bold">How it works</ThemedText>
            <ThemedText size="sm">We make it easy for businesses to take action on climate change.</ThemedText>
            <Pressable style={styles.learnMoreButton}>
              <ThemedText style={styles.buttonText} size="sm">Learn More</ThemedText>
            </Pressable>
          </View>

          <View style={styles.cards}>
            {['Measure your emissions', 'Buy credits', 'Plant trees'].map((title) => (
              <View key={title} style={styles.card}>
                <Ionicons name="leaf" size={20} color={colors.text} />
                <ThemedText weight="bold" size="sm">{title}</ThemedText>
              </View>
            ))}
          </View>
        </View>

        {/* Business Account Section */}
        <View style={styles.businessSection}>
          <Image
            source={{ uri: "https://cdn.usegalileo.ai/sdxl10/3852bc2a-20ca-46ed-962c-776251b3867b.png" }}
            style={styles.businessImage}
          />
          <View style={styles.businessContent}>
            <ThemedText size="lg" weight="bold">GreenStake Business Account</ThemedText>
            <ThemedText style={styles.businessText} size="sm">
              Your business can earn interest on uninvested cash and get the flexibility to spend whenever you need it.
            </ThemedText>
            <ThemedText style={styles.apyText} size="sm">1.5% APY</ThemedText>
          </View>
        </View>

        {/* Popular Products Section */}
        <ThemedText size="lg" weight="bold" style={styles.productsTitle}>
          Popular products
        </ThemedText>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.productsScroll}
          contentContainerStyle={styles.productsScrollContent}
        >
          {[
            'Wind Power', 'Solar Power', 'Reforestation',
            'Energy Efficiency', 'Carbon Capture', 'Aviation', 'Trucking'
          ].map((product, index) => (
            <View key={product} style={styles.productCard}>
              <Image
                source={{ uri: `https://cdn.usegalileo.ai/sdxl10/product-${index}.png` }}
                style={styles.productImage}
              />
              <ThemedText style={styles.productTitle} size="sm">{product}</ThemedText>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    paddingBottom: 80, // Add padding for tab bar
  },
  searchHeader: {
    padding: 12,
    alignItems: 'flex-end',
  },
  searchButton: {
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  hero: {
    height: 400,
    justifyContent: 'flex-end',
    padding: 16,
    marginHorizontal: 12,
  },
  heroImage: {
    borderRadius: 16,
  },
  heroContent: {
    gap: 8,
    marginBottom: 24,
  },
  heroTitle: {
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  heroSubtitle: {
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  section: {
    padding: 12,
    gap: 16,
  },
  sectionHeader: {
    gap: 8,
  },
  learnMoreButton: {
    backgroundColor: '#19e619',
    padding: 12,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  cards: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  card: {
    flex: 1,
    minWidth: 140,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#dce5dc',
    gap: 8,
  },
  businessSection: {
    margin: 12,
    borderRadius: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  businessImage: {
    height: 160,
    width: '100%',
  },
  businessContent: {
    padding: 12,
    gap: 8,
  },
  businessText: {
    color: '#638863',
  },
  apyText: {
    color: '#638863',
  },
  productsTitle: {
    padding: 12,
  },
  productsScroll: {
    marginLeft: 12,
  },
  productsScrollContent: {
    paddingRight: 12,
  },
  productCard: {
    width: 140,
    marginRight: 8,
  },
  productImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 12,
    marginBottom: 8,
  },
  productTitle: {
    fontWeight: '500',
  },
}); 