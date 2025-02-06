import { Tabs } from 'expo-router';
import { Platform, useColorScheme } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { HapticTab } from '../../components/HapticTab';
import { BlurView } from 'expo-blur';

const TabLayout = () => {
  const theme = useTheme();
  const colorScheme = useColorScheme();

  const tabBarBackground = () => {
    if (Platform.OS === 'ios') {
      return (
        <BlurView
          tint={colorScheme === 'dark' ? 'dark' : 'light'}
          intensity={95}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      );
    }
    return null;
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text + '80', // 50% opacity
        headerShown: false,
        tabBarButton: HapticTab,
        // Modern styling
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: Platform.select({
            ios: 'transparent',
            android: theme.colors.navigation.background,
          }),
          borderTopColor: theme.colors.navigation.border + '20', // 20% opacity
          borderTopWidth: Platform.OS === 'ios' ? 0 : 0.5,
          elevation: Platform.OS === 'android' ? 4 : 0,
          shadowColor: theme.colors.shadow,
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          height: Platform.OS === 'ios' ? 88 : 60,
          paddingBottom: Platform.OS === 'ios' ? 28 : 8,
        },
        // Improved transitions
        animation: 'fade',
        tabBarBackground,
        // Consistent background handling
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
        sceneContainerStyle: {
          backgroundColor: theme.colors.background,
        },
        // Tab appearance
        tabBarLabelStyle: {
          fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
          fontSize: 11,
          fontWeight: '500',
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