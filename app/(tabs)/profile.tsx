import { ScrollView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { ThemedText } from '@/components/ThemedText';
import { useTheme } from '@/hooks/useTheme';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Platform } from 'react-native';
import { router } from 'expo-router';

// SVG Components can be moved to separate files
const GearIcon = () => (
  <Svg width={24} height={24} fill="currentColor" viewBox="0 0 256 256">
    <Path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Z" />
  </Svg>
);

const ArrowRightIcon = () => (
  <Svg width={24} height={24} fill="#111811" viewBox="0 0 256 256">
    <Path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
  </Svg>
);

export default function ProfileScreen() {
  const { spacing, colors } = useTheme();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'ios' ? 50 : 30,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      padding: 16,
      paddingBottom: 8,
    },
    settingsButton: {
      width: 48,
      alignItems: 'center',
    },
    profileSection: {
      padding: 16,
      alignItems: 'center',
    },
    profileContent: {
      alignItems: 'center',
      gap: 16,
    },
    profileImage: {
      width: 128,
      height: 128,
      borderRadius: 64,
    },
    profileInfo: {
      alignItems: 'center',
    },
    portfolioButton: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      justifyContent: 'space-between',
      minHeight: 56,
    },
    balanceCard: {
      padding: 16,
    },
    balanceContent: {
      gap: 8,
    },
    periodSelector: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 32,
    },
    statItem: {
      flexDirection: 'row',
      padding: 16,
      minHeight: 72,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    historyTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      padding: 16,
      paddingBottom: 12,
    },
    historyItem: {
      flexDirection: 'row',
      padding: 16,
      minHeight: 72,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

  const StatItem = ({ title, subtitle, onPress }: { title: string, subtitle: string, onPress: () => void }) => (
    <TouchableOpacity 
      style={[styles.statItem, { 
        backgroundColor: isDark ? '#1A1D1E' : 'white',
        borderBottomColor: isDark ? '#2D3133' : '#dce5dc',
        borderBottomWidth: 1,
      }]}
      onPress={onPress}
    >
      <View>
        <ThemedText weight="medium" size="base">{title}</ThemedText>
        <ThemedText variant="secondary" size="sm">{subtitle}</ThemedText>
      </View>
      <ArrowRightIcon />
    </TouchableOpacity>
  );

  const HistoryItem = ({ title, date, amount }: { title: string, date: string, amount: string }) => (
    <View 
      style={[styles.historyItem, { 
        backgroundColor: isDark ? '#1A1D1E' : 'white',
        borderBottomColor: isDark ? '#2D3133' : '#dce5dc',
        borderBottomWidth: 1,
      }]}
    >
      <View>
        <ThemedText weight="medium" size="base">{title}</ThemedText>
        <ThemedText variant="secondary" size="sm">{date}</ThemedText>
      </View>
      <ThemedText size="base">{amount}</ThemedText>
    </View>
  );

  const handlePortfolioPress = () => {
    router.push('/(tabs)/Portfolio');
  };

  const handleCarbonCreditsPress = () => {
    router.push('/(tabs)/transactions');
  };

  const handleCO2OffsetPress = () => {
    router.push('/(tabs)/for-you');
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#151718' : 'white' }]}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity style={styles.settingsButton}>
            <GearIcon />
          </TouchableOpacity>
        </View>

        <View style={styles.profileSection}>
          <View style={styles.profileContent}>
            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png" }}
              style={styles.profileImage}
            />
            <View style={styles.profileInfo}>
              <ThemedText size="xl" weight="bold">Vardhin</ThemedText>
              <ThemedText variant="secondary">suryavardhin@gmail.com</ThemedText>
            </View>
          </View>
        </View>

        <TouchableOpacity 
          style={[styles.portfolioButton, { 
            backgroundColor: isDark ? '#1A1D1E' : 'white',
            borderBottomColor: isDark ? '#2D3133' : '#dce5dc',
            borderBottomWidth: 1,
          }]}
          onPress={handlePortfolioPress}
        >
          <ThemedText size="base">My Carbon Portfolio</ThemedText>
          <ArrowRightIcon />
        </TouchableOpacity>

        <View style={styles.balanceCard}>
          <View style={styles.balanceContent}>
            <ThemedText weight="medium" size="base">Carbon Credit Balance</ThemedText>
            <ThemedText size="xxl" weight="bold">$3,240.00</ThemedText>
            <View style={{ flexDirection: 'row', gap: 4 }}>
              <ThemedText variant="secondary">Last 30 Days</ThemedText>
              <ThemedText style={{ color: '#078823' }} weight="medium">+12%</ThemedText>
            </View>
            
            {/* Chart would go here */}
            
            <View style={styles.periodSelector}>
              {['1D', '1W', '1M', '3M', '1Y'].map((period) => (
                <ThemedText 
                  key={period} 
                  variant="secondary" 
                  size="sm" 
                  weight="bold"
                >
                  {period}
                </ThemedText>
              ))}
            </View>
          </View>
        </View>

        <StatItem 
          title="Total Carbon Credits" 
          subtitle="2,340 credits" 
          onPress={handleCarbonCreditsPress}
        />
        <StatItem 
          title="Lifetime CO2 Offset" 
          subtitle="3,240 tons" 
          onPress={handleCO2OffsetPress}
        />

        <ThemedText size="xl" weight="bold" style={styles.historyTitle}>
          History
        </ThemedText>
        <HistoryItem title="Bought 10 credits" date="Dec 20" amount="$120.00" />
        <HistoryItem title="Bought 200 credits" date="Jan 20" amount="$2,000.00" />
      </ScrollView>
    </View>
  );
} 