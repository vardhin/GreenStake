import React from 'react';
import { View, Text, ScrollView, Dimensions, ViewStyle, TextStyle } from 'react-native';
import { Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

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
}) => (
  <Svg width={width} height={height} viewBox="-3 0 478 150">
    <Path
      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
      fill="url(#paint0_linear)"
    />
    <Path
      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
      stroke="#638863"
      strokeWidth={3}
      strokeLinecap="round"
    />
    <Defs>
      <LinearGradient id="paint0_linear" x1="236" y1="1" x2="236" y2="149">
        <Stop stopColor="#f0f4f0" />
        <Stop offset="1" stopColor="#f0f4f0" stopOpacity="0" />
      </LinearGradient>
    </Defs>
  </Svg>
);

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
      gap: 8,
      padding: isBoxed ? 24 : 0,
      ...(isBoxed && {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#dce5dc',
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
      backgroundColor: 'white',
    },
    header: {
      alignItems: 'center',
      padding: 16,
      paddingBottom: 8,
    },
    headerText: {
      color: '#111811',
      fontSize: 18,
      fontWeight: 'bold',
    },
    sectionTitle: {
      color: '#111811',
      fontSize: 22,
      fontWeight: 'bold',
      padding: 16,
      paddingBottom: 12,
    },
    insightsContainer: {
      padding: 16,
    },
    personalizedContainer: {
      padding: 16,
      gap: 24,
    },
    bottomSpacing: {
      height: 20,
    },
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>For You</Text>
      </View>

      <Text style={styles.sectionTitle}>Recommended</Text>

      <RecommendedItem title="VCS 2015: 1,000 tCO2e" price="$15.00" />
      <RecommendedItem title="GS 2021: 1,000 tCO2e" price="$14.00" />
      <RecommendedItem title="African Solar Project" price="$10.00" />

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