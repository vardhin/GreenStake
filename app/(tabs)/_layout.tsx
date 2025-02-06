import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Add animation value for tab press (only for icons now)
  const tabPressScale = new Animated.Value(1);

  const animateTabPress = () => {
    Animated.sequence([
      Animated.timing(tabPressScale, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(tabPressScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: (props) => (
          <Animated.View
            style={{
              flex: 1,
              transform: [{ scale: tabPressScale }],
            }}>
            <HapticTab {...props} onPress={() => {
              animateTabPress();
              props.onPress();
            }} />
          </Animated.View>
        ),
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          backgroundColor: isDark ? '#151718' : '#ffffff',
          borderTopWidth: 1,
          borderTopColor: isDark ? '#2D3133' : '#f0f4f0',
          paddingTop: 8,
          paddingBottom: Platform.OS === 'ios' ? 24 : 16,
          height: Platform.OS === 'ios' ? 80 : 70,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 5,
        },
        tabBarItemStyle: {
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
          tabBarIcon: ({ color, focused }) => (
            <Animated.View
              style={{
                transform: [{
                  scale: focused ? tabPressScale : 1,
                }],
              }}>
              <MaterialCommunityIcons name="home" size={22} color={color} />
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: 'Portfolio',
          tabBarIcon: ({ color, size, focused }) => (
            <Animated.View
              style={{
                transform: [{
                  scale: focused ? tabPressScale : 1,
                }],
              }}>
              <MaterialCommunityIcons name="information" size={size} color={color} />
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, size, focused }) => (
            <Animated.View
              style={{
                transform: [{
                  scale: focused ? tabPressScale : 1,
                }],
              }}>
              <MaterialCommunityIcons name="information" size={size} color={color} />
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="for-you"
        options={{
          title: 'For You',
          tabBarIcon: ({ color, size, focused }) => (
            <Animated.View
              style={{
                transform: [{
                  scale: focused ? tabPressScale : 1,
                }],
              }}>
              <IconSymbol name="paperplane.fill" size={size} color={color} />
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size, focused }) => (
            <Animated.View
              style={{
                transform: [{
                  scale: focused ? tabPressScale : 1,
                }],
              }}>
              <IconSymbol name="magnifyingglass" size={size} color={color} />
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transactions',
          tabBarIcon: ({ color, size, focused }) => (
            <Animated.View
              style={{
                transform: [{
                  scale: focused ? tabPressScale : 1,
                }],
              }}>
              <IconSymbol name="doc.text" size={size} color={color} />
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size, focused }) => (
            <Animated.View
              style={{
                transform: [{
                  scale: focused ? tabPressScale : 1,
                }],
              }}>
              <IconSymbol name="person.circle" size={size} color={color} />
            </Animated.View>
          ),
        }}
      />
    </Tabs>
  );
}
