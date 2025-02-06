import { ScrollView, StyleSheet, View, Image, ImageBackground, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useTheme } from '@/hooks/useTheme';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useRouter } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Platform } from 'react-native';

export default function HomeScreen() {
  const { spacing, colors } = useTheme();
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleLearnMore = () => {
    router.push('/about');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: Platform.OS === 'ios' ? 50 : 30,
    },
    scrollContent: {
      paddingBottom: 100,
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
      padding: 16,
      gap: 20,
      marginTop: 16,
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
      gap: 12,
      flexWrap: 'wrap',
    },
    card: {
      flex: 1,
      minWidth: 160,
      padding: 16,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#dce5dc',
      gap: 12,
    },
    businessSection: {
      margin: 16,
      marginTop: 24,
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
      paddingRight: 16,
      gap: 12,
    },
    productCard: {
      width: 160,
      marginRight: 12,
      padding: 8,
      borderRadius: 12,
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

  const cardActions = {
    'Measure your emissions': () => router.push('/for-you'),
    'Buy credits': () => router.push('/transactions'),
    'Plant trees': () => router.push('/profile'),
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#151718' : 'white' }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
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
            <ThemedText size="sm" variant="secondary">
              We make it easy for businesses to take action on climate change.
            </ThemedText>
            <Pressable 
              style={styles.learnMoreButton}
              onPress={handleLearnMore}
            >
              <ThemedText style={styles.buttonText} size="sm">Learn More</ThemedText>
            </Pressable>
          </View>

          <View style={styles.cards}>
            {[
              { title: 'Measure your emissions', icon: 'chart.line.uptrend.xyaxis' },
              { title: 'Buy credits', icon: 'creditcard' },
              { title: 'Plant trees', icon: 'leaf' }
            ].map(({ title, icon }) => (
              <Pressable 
                key={title} 
                style={[styles.card, { 
                  borderColor: isDark ? '#2D3133' : '#dce5dc',
                  backgroundColor: isDark ? '#1A1D1E' : 'white'
                }]}
                onPress={cardActions[title]}
              >
                <IconSymbol name={icon} size={20} color={colors.text} />
                <ThemedText weight="bold" size="sm">{title}</ThemedText>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Business Account Section */}
        <View style={[
          styles.businessSection,
          { 
            backgroundColor: isDark ? '#1A1D1E' : 'white',
            shadowColor: isDark ? '#000' : '#000'
          }
        ]}>
          <Image
            source={{ uri: "https://cdn.usegalileo.ai/sdxl10/3852bc2a-20ca-46ed-962c-776251b3867b.png" }}
            style={styles.businessImage}
          />
          <View style={styles.businessContent}>
            <ThemedText size="lg" weight="bold">GreenStake Business Account</ThemedText>
            <ThemedText style={styles.businessText} size="sm" variant="secondary">
              Your business can earn interest on uninvested cash and get the flexibility to spend whenever you need it.
            </ThemedText>
            <ThemedText style={styles.apyText} size="sm" variant="secondary">1.5% APY</ThemedText>
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
            {
              title: 'Wind Power',
              image: 'https://cdn.usegalileo.ai/sdxl10/bf87542a-441e-4fe0-9347-09e9c4ae7419.png'
            },
            {
              title: 'Solar Power',
              image: 'https://cdn.usegalileo.ai/sdxl10/a92ad3c4-54d0-433f-b975-005aaca92660.png'
            },
            {
              title: 'Reforestation',
              image: 'https://cdn.usegalileo.ai/sdxl10/1887c4dd-f0f9-43ee-ade3-e3159c2c9a60.png'
            },
            {
              title: 'Energy Efficiency',
              image: 'https://cdn.usegalileo.ai/sdxl10/050a2de6-f490-4142-8c35-8bee4d66a58b.png'
            },
            {
              title: 'Carbon Capture',
              image: 'https://cdn.usegalileo.ai/sdxl10/56ea7bd1-d84e-49da-926b-6e6d2c95ab55.png'
            },
            {
              title: 'Aviation',
              image: 'https://cdn.usegalileo.ai/sdxl10/1ef5d7ff-4fcb-415a-b5c7-7d149a19651f.png'
            },
            {
              title: 'Trucking',
              image: 'https://cdn.usegalileo.ai/sdxl10/3685b511-0b2b-4d3b-b509-1b2008f955a9.png'
            }
          ].map((product) => (
            <Pressable 
              key={product.title} 
              style={[styles.productCard, { backgroundColor: isDark ? '#1A1D1E' : 'white' }]}
              onPress={() => router.push('/search')}
            >
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
              />
              <ThemedText style={styles.productTitle} size="sm">{product.title}</ThemedText>
            </Pressable>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
} 