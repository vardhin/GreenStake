import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { InvestmentProvider } from '@/contexts/InvestmentContext';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <InvestmentProvider>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </InvestmentProvider>
  );
}
