import { View, Text, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { StyleSheet } from 'react-native';
import { theme, commonStyles } from '../styles/theme';

const { width } = Dimensions.get('window');
const CHART_MARGIN = theme.spacing.lg * 2;
const CHART_WIDTH = width - CHART_MARGIN;

export default function StatsScreen() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(25, 118, 210, ${opacity})`, // Professional blue
        strokeWidth: 2,
      },
    ],
  };

  return (
    <ScrollView 
      style={commonStyles.safeArea}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Market Analytics</Text>
        
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Project Activity Trends</Text>
          <Text style={styles.chartSubtitle}>Monthly performance metrics</Text>
          
          <View style={styles.chartWrapper}>
            <LineChart
              data={data}
              width={CHART_WIDTH}
              height={220}
              chartConfig={{
                backgroundColor: theme.colors.surface,
                backgroundGradientFrom: theme.colors.surface,
                backgroundGradientTo: theme.colors.surface,
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(25, 118, 210, ${opacity})`,
                labelColor: () => theme.colors.text.secondary,
                strokeWidth: 2,
                propsForDots: {
                  r: '4',
                  strokeWidth: '2',
                  stroke: theme.colors.primary,
                },
                propsForLabels: {
                  fontSize: 12,
                  fontWeight: '500',
                },
                propsForVerticalLabels: {
                  fontSize: 12,
                  fontWeight: '500',
                },
                propsForHorizontalLabels: {
                  fontSize: 12,
                  fontWeight: '500',
                },
                style: {
                  borderRadius: theme.borderRadius.lg,
                },
                fillShadowGradientFrom: theme.colors.primary,
                fillShadowGradientTo: theme.colors.surface,
                fillShadowGradientOpacity: 0.1,
              }}
              bezier
              style={styles.chart}
              withInnerLines={false}
              withOuterLines={true}
              withVerticalLines={false}
              withHorizontalLines={true}
              withVerticalLabels={true}
              withHorizontalLabels={true}
              fromZero={true}
              segments={5}
            />
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>99</Text>
              <Text style={styles.statLabel}>Peak Value</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>52.5</Text>
              <Text style={styles.statLabel}>Average</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>20</Text>
              <Text style={styles.statLabel}>Minimum</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.lg,
  },
  header: {
    ...theme.typography.h2,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
  },
  chartContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    ...theme.elevation.medium,
  },
  chartTitle: {
    ...theme.typography.subtitle1,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  chartSubtitle: {
    ...theme.typography.caption,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.lg,
  },
  chartWrapper: {
    alignItems: 'center',
    marginHorizontal: -theme.spacing.md,
  },
  chart: {
    borderRadius: theme.borderRadius.lg,
    paddingRight: theme.spacing.lg,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.lg,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    ...theme.typography.h3,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  statLabel: {
    ...theme.typography.caption,
    color: theme.colors.text.secondary,
  },
}); 