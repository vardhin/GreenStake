import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { StyleSheet } from 'react-native';
import { theme, commonStyles } from '../styles/theme';

export default function StatsScreen() {
  // Sample data - replace with your actual project data
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Purple color
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>
        Market Statistics
      </Text>
      
      <View style={[commonStyles.card, styles.chartCard]}>
        <LineChart
          data={data}
          width={Dimensions.get('window').width - (theme.spacing.lg * 2)} 
          height={240}
          chartConfig={{
            backgroundColor: theme.colors.surface,
            backgroundGradientFrom: theme.colors.surface,
            backgroundGradientTo: theme.colors.surface,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(46, 125, 50, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(27, 94, 32, ${opacity})`,
            strokeWidth: 2,
            propsForDots: {
              r: '4',
              strokeWidth: '2',
              stroke: theme.colors.primary,
            },
            propsForLabels: {
              fontSize: theme.typography.caption.fontSize,
            },
          }}
          bezier
          style={styles.chart}
        />
        
        <Text style={styles.chartLabel}>
          Monthly Project Activity
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chartCard: {
    padding: theme.spacing.md,
  },
  chart: {
    marginVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
  },
  chartLabel: {
    ...theme.typography.body,
    color: theme.colors.primary,
    textAlign: 'center',
    marginTop: theme.spacing.sm,
  },
}); 