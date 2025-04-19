import { View, Text, StyleSheet } from "react-native";
import React from "react";

const AccountListItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profit</Text>
      <Text style={styles.content}>10%</Text>
      <Text>20%</Text>
    </View>
  );
};

export default AccountListItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "white",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    fontSize: 14,
  },
});
