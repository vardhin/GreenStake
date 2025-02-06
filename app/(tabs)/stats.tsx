import { View, Text, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { StyleSheet } from 'react-native';
import { theme, commonStyles } from '../styles/theme';

const { width } = Dimensions.get('window');
const CONTAINER_PADDING = theme.spacing.lg;
const CHART_CONTAINER_PADDING = theme.spacing.lg;
const CHART_WIDTH = width - (CONTAINER_PADDING * 2) - (CHART_CONTAINER_PADDING * 2);

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
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Market Analytics</Text>
        
        <View style={styles.chartContainer}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>Project Activity Trends</Text>
            <Text style={styles.chartSubtitle}>Monthly performance metrics</Text>
          </View>
          
          <View style={styles.chartWrapper}>
            <LineChart
              data={data}
              width={CHART_WIDTH}
              height={220}
              chartConfig={{
                backgroundColor: 'transparent',
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
                  fontSize: 11,
                  fontWeight: '500',
                },
                propsForVerticalLabels: {
                  fontSize: 11,
                  fontWeight: '500',
                },
                propsForHorizontalLabels: {
                  fontSize: 11,
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
              yAxisInterval={1}
              yAxisSuffix=""
              yAxisLabel=""
              formatYLabel={(value) => Math.round(value).toString()}
            />
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>99</Text>
              <Text style={styles.statLabel}>Peak Value</Text>
            </View>
            <View style={[styles.statItem, styles.statItemBorder]}>
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
    paddingHorizontal: CONTAINER_PADDING,
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.xxl,
  },
  header: {
    ...theme.typography.h2,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.lg,
  },
  chartContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: CHART_CONTAINER_PADDING,
    ...theme.elevation.medium,
  },
  chartHeader: {
    marginBottom: theme.spacing.lg,
  },
  chartTitle: {
    ...theme.typography.subtitle1,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  chartSubtitle: {
    ...theme.typography.caption,
    color: theme.colors.text.secondary,
  },
  chartWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: -theme.spacing.xs,
  },
  chart: {
    borderRadius: theme.borderRadius.lg,
    marginLeft: -theme.spacing.md, // Adjust for chart padding
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.lg,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statItemBorder: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: theme.colors.border,
    paddingHorizontal: theme.spacing.md,
  },
  statValue: {
    ...theme.typography.h3,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  statLabel: {
    ...theme.typography.caption,
    color: theme.colors.text.secondary,
    textAlign: 'center',
  },
}); 