import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

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
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>
        Project Progress
      </Text>
      
      <LineChart
        data={data}
        width={Dimensions.get('window').width - 32} // Account for padding
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier // Makes the line curved
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      
      <Text style={{ fontSize: 16, marginTop: 20, textAlign: 'center' }}>
        Monthly Project Activity
      </Text>
    </View>
  );
} 