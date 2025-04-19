import { Image, StyleSheet, Platform, View, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import AccountListItem from "@/components/AccountListItem";
import AccountList from "@/components/AccountList";
import AddNewAccount from "@/components/AddNewAccount";

const ACCOUNT_HEADER = [
  {
    id: 1,
    name: "Name",
  },
  {
    id: 2,
    name: "CAP", // Current Allocated Percentage
  },
  {
    id: 3,
    name: "TAP", // Target Allocation Percentage
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {ACCOUNT_HEADER.map((item) => (
          <Text key={item.id}>{item.name}</Text>
        ))}
      </View>
      <AccountList />
      <AddNewAccount />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
