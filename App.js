import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function PostScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>create a post</Text>
    </View>
  );
}

function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chat</Text>
    </View>
  );
}

function MyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>3rd!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Post') {
              iconName = focused ? 'ios-create' : 'ios-create-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline';
            } else if (route.name === 'My') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Post" component={PostScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="My" component={MyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

