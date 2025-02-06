import { View, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';

const { width } = Dimensions.get('window');

export default function StatsScreen() {
  const theme = useTheme();
  
  const CONTAINER_PADDING = theme.spacing.lg;
  const CHART_CONTAINER_PADDING = theme.spacing.lg;
  const CHART_WIDTH = width - (CONTAINER_PADDING * 2) - (CHART_CONTAINER_PADDING * 2);

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(46, 125, 50, ${opacity})`, // Using theme primary color
        strokeWidth: 2,
      },
    ],
  };

  const styles = StyleSheet.create({
    scrollContent: {
      flexGrow: 1,
    },
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingHorizontal: theme.spacing.lg,
      paddingTop: theme.spacing.lg,
      paddingBottom: theme.spacing.xxl,
    },
    chartContainer: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing.lg,
      ...theme.elevation.medium,
    },
    chartHeader: {
      marginBottom: theme.spacing.lg,
    },
    chartWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: -theme.spacing.xs,
    },
    chart: {
      borderRadius: theme.borderRadius.lg,
      marginLeft: -theme.spacing.md,
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

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.chartContainer}>
          <View style={styles.chartHeader}>
            <ThemedText type="title">Carbon Credits Market Trend</ThemedText>
            <ThemedText type="subtitle">Last 6 Months</ThemedText>
          </View>
          
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
                color: (opacity = 1) => `rgba(46, 125, 50, ${opacity})`,
                labelColor: () => theme.colors.text.primary,
                style: styles.chart,
              }}
              bezier
              style={styles.chart}
            />
          </View>
          
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <ThemedText style={styles.statValue}>1,234</ThemedText>
              <ThemedText style={styles.statLabel}>Total Credits</ThemedText>
            </View>
            <View style={[styles.statItem, styles.statItemBorder]}>
              <ThemedText style={styles.statValue}>$25.50</ThemedText>
              <ThemedText style={styles.statLabel}>Avg. Price</ThemedText>
            </View>
            <View style={styles.statItem}>
              <ThemedText style={styles.statValue}>+12%</ThemedText>
              <ThemedText style={styles.statLabel}>Monthly Growth</ThemedText>
            </View>
          </View>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
} 