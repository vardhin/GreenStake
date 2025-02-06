import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        header: () => null,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: colorScheme === 'dark' ? '#151718' : '#ffffff',
            borderTopWidth: 1,
            borderTopColor: '#f0f4f0',
            paddingVertical: 8,
            paddingBottom: 20,
          },
          default: {
            backgroundColor: colorScheme === 'dark' ? '#151718' : '#ffffff',
            borderTopWidth: 1,
            borderTopColor: '#f0f4f0',
            paddingVertical: 8,
            paddingBottom: 20,
          },
        }),
        tabBarInactiveTintColor: colorScheme === 'dark' ? '#787E83' : '#638863',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <IconSymbol size={24} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="for-you"
        options={{
          title: 'For You',
          headerShown: false,
          tabBarIcon: ({ color }) => <IconSymbol size={24} name="figure.walk" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ color }) => <IconSymbol size={24} name="magnifyingglass" color={color} />,
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transactions',
          headerShown: false,
          tabBarIcon: ({ color }) => <IconSymbol size={24} name="doc.text" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => <IconSymbol size={24} name="person.circle" color={color} />,
        }}
      />
    </Tabs>
  );
}
