import React from 'react';
import { View, Text, ScrollView, Dimensions, ViewStyle, TextStyle, Platform } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ThemedText } from '@/components/ThemedText';
import { useTheme } from '@/hooks/useTheme';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface ChartComponentProps {
  width?: number;
  height?: number;
}

interface RecommendedItemProps {
  title: string;
  price: string;
}

interface InsightCardProps {
  title: string;
  value: string;
  change?: string;
  isBoxed?: boolean;
}

const ChartComponent: React.FC<ChartComponentProps> = ({ 
  width = Dimensions.get('window').width - 88,
  height = 120
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(99, 136, 99, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: isDark ? '#151718' : '#ffffff',
    backgroundGradientFrom: isDark ? '#151718' : '#ffffff',
    backgroundGradientTo: isDark ? '#151718' : '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(99, 136, 99, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(17, 24, 17, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#638863',
    },
  };

  return (
    <LineChart
      data={data}
      width={width}
      height={height}
      chartConfig={chartConfig}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
      withInnerLines={false}
      withOuterLines={false}
    />
  );
};

const RecommendedItem: React.FC<RecommendedItemProps> = ({ title, price }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const styles: Record<string, ViewStyle | TextStyle> = {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      justifyContent: 'space-between',
      minHeight: 72,
    },
    contentContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    title: {
      color: isDark ? 'white' : '#111811',
      fontSize: 16,
      fontWeight: '500',
    },
    subtitle: {
      color: '#638863',
      fontSize: 14,
    },
    price: {
      color: isDark ? 'white' : '#111811',
      fontSize: 16,
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        <Text style={styles.subtitle}>Carbon Credits</Text>
      </View>
      <ThemedText style={styles.price}>{price}</ThemedText>
    </View>
  );
};

const InsightCard: React.FC<InsightCardProps> = ({ title, value, change, isBoxed = false }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const styles: Record<string, ViewStyle | TextStyle> = {
    container: {
      width: '100%',
      padding: 24,
      backgroundColor: isDark ? '#151718' : '#ffffff',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: isDark ? '#2d2d2d' : '#dce5dc',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 12,
      elevation: 4,
    },
    title: {
      color: isDark ? 'white' : '#111811',
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 16,
    },
    value: {
      color: isDark ? 'white' : '#111811',
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 12,
      paddingTop: 8,
    },
    periodContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 16,
    },
    period: {
      color: isDark ? '#a0a0a0' : '#666666',
      fontSize: 14,
    },
    change: {
      backgroundColor: '#e6f4e6',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
      color: '#078823',
      fontSize: 14,
      fontWeight: '600',
    },
    chartContainer: {
      height: 160,
      marginTop: 8,
    },
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>{title}</ThemedText>
      <ThemedText style={styles.value}>{value}</ThemedText>
      <View style={styles.periodContainer}>
        <Text style={styles.period}>Last 30 Days</Text>
        {change && <Text style={styles.change}>{change}</Text>}
      </View>
      <View style={styles.chartContainer}>
        <ChartComponent />
      </View>
    </View>
  );
};

const Projects: React.FC = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="wallet-outline" size={size} color={color} />
      ),
    });
  }, [navigation]);

  const styles: Record<string, ViewStyle | TextStyle> = {
    container: {
      flex: 1,
      backgroundColor: isDark ? '#151718' : '#f8faf8',
      paddingTop: Platform.OS === 'ios' ? 50 : 30,
    },
    sectionTitle: {
      color: isDark ? 'white' : '#111811',
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 24,
      paddingTop: 32,
      paddingBottom: 20,
    },
    insightsContainer: {
      padding: 24,
      gap: 24,
    },
    personalizedContainer: {
      padding: 24,
      gap: 24,
    },
    recommendedContainer: {
      backgroundColor: isDark ? '#151718' : '#ffffff',
      borderRadius: 20,
      marginHorizontal: 24,
      marginBottom: 32,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 12,
      elevation: 4,
    },
    bottomSpacing: {
      height: 40,
    },
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedText style={styles.sectionTitle}>Recommended</ThemedText>

      <View style={styles.recommendedContainer}>
        <RecommendedItem title="VCS 2015: 1,000 tCO2e" price="$15.00" />
        <RecommendedItem title="GS 2021: 1,000 tCO2e" price="$14.00" />
        <RecommendedItem title="African Solar Project" price="$10.00" />
      </View>

      <Text style={styles.sectionTitle}>Your Investments</Text>

      <View style={styles.insightsContainer}>
        <InsightCard title="Carbon Credits" value="+12%" change="+2%" />
        <InsightCard title="Renewable Energy" value="$12.4B" change="+3%" />
        <InsightCard title="Clean Tech" value="$8.2B" change="+4%" />
      </View>

      <Text style={styles.sectionTitle}>Personalized Insights</Text>

      <View style={styles.personalizedContainer}>
        <InsightCard title="Renewable Energy" value="$12.4B" isBoxed />
        <InsightCard title="Clean Tech" value="$8.2B" isBoxed />
      </View>

      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
};

export default Projects; 