import React from 'react';
import { View, Text, ScrollView, Dimensions, ViewStyle, TextStyle } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

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
  width = Dimensions.get('window').width - 40, 
  height = 148 
}) => {
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
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
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
      color: '#111811',
      fontSize: 16,
      fontWeight: '500',
    },
    subtitle: {
      color: '#638863',
      fontSize: 14,
    },
    price: {
      color: '#111811',
      fontSize: 16,
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Carbon Credits</Text>
      </View>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const InsightCard: React.FC<InsightCardProps> = ({ title, value, change, isBoxed = false }) => {
  const styles: Record<string, ViewStyle | TextStyle> = {
    container: {
      minWidth: 272,
      flex: 1,
      gap: 12,
      padding: isBoxed ? 24 : 0,
      backgroundColor: '#ffffff',
      ...(isBoxed && {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#dce5dc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
      }),
    },
    title: {
      color: '#111811',
      fontSize: 16,
      fontWeight: '500',
    },
    value: {
      color: '#111811',
      fontSize: 32,
      fontWeight: 'bold',
    },
    periodContainer: {
      flexDirection: 'row',
      gap: 4,
    },
    period: {
      color: '#638863',
      fontSize: 16,
    },
    change: {
      color: '#078823',
      fontSize: 16,
      fontWeight: '500',
    },
    chartContainer: {
      minHeight: 180,
      paddingVertical: 16,
    },
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
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
  const styles: Record<string, ViewStyle | TextStyle> = {
    container: {
      flex: 1,
      backgroundColor: '#f8faf8',
    },
    sectionTitle: {
      color: '#111811',
      fontSize: 24,
      fontWeight: 'bold',
      padding: 20,
      paddingBottom: 16,
    },
    insightsContainer: {
      padding: 20,
      gap: 24,
    },
    personalizedContainer: {
      padding: 20,
      gap: 24,
    },
    recommendedContainer: {
      backgroundColor: '#ffffff',
      borderRadius: 16,
      margin: 20,
      marginTop: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 3,
    },
    bottomSpacing: {
      height: 32,
    },
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Recommended</Text>

      <View style={styles.recommendedContainer}>
        <RecommendedItem title="VCS 2015: 1,000 tCO2e" price="$15.00" />
        <RecommendedItem title="GS 2021: 1,000 tCO2e" price="$14.00" />
        <RecommendedItem title="African Solar Project" price="$10.00" />
      </View>

      <Text style={styles.sectionTitle}>Market Insights</Text>

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