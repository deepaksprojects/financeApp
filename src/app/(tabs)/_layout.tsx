import { Tabs } from "expo-router";
import React from "react";
import { Platform, Text, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
            height: 60,
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Friends",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size} name="account-box" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="groups"
        options={{
          title: "Groups",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size} name="account-box" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="addExpense"
        options={{
          title: "",
          tabBarIcon: ({ size, color }) => (
            <View
              style={{
                backgroundColor: "red",
                height: 40,
                width: 40,
                marginTop: 12,
              }}
            ></View>
            // <MaterialIcons size={40} name="account-tree" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size} name="account-box" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "Allocation",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size} name="account-tree" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
