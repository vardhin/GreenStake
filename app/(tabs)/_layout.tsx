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
  const isDark = colorScheme === 'dark';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        header: () => null,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          backgroundColor: isDark ? '#151718' : '#ffffff',
          borderTopWidth: 1,
          borderTopColor: isDark ? '#2D3133' : '#f0f4f0',
          paddingTop: 8,
          paddingBottom: Platform.OS === 'ios' ? 24 : 16,
          height: Platform.OS === 'ios' ? 80 : 70,
          bottom: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: -4,
        },
        tabBarInactiveTintColor: isDark ? '#787E83' : '#638863',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="house.fill" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="for-you"
        options={{
          title: 'For You',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="figure.walk" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="magnifyingglass" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transactions',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="doc.text" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="person.circle" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
