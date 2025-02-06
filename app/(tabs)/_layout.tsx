import { Tabs } from 'expo-router';
import { Platform, useColorScheme } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { HapticTab } from '../../components/HapticTab';

const TabLayout = () => {
  const theme = useTheme();
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.navigation.active,
        tabBarInactiveTintColor: theme.colors.navigation.inactive,
        headerShown: false,
        tabBarButton: HapticTab,
        // Fix for black flash during transitions
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
        tabBarStyle: {
          backgroundColor: theme.colors.navigation.background,
          borderTopColor: theme.colors.navigation.border,
          borderTopWidth: 0.5,
          elevation: Platform.OS === 'android' ? 8 : 0,
          shadowOpacity: 0,
        },
        // Smooth transitions
        animation: 'fade',
        // This ensures content above tabs has correct background
        sceneContainerStyle: {
          backgroundColor: theme.colors.background,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="trade"
        options={{
          title: 'Trade',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="exchange" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: 'Projects',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="leaf" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="line-chart" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;