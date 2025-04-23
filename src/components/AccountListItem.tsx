import { View, Text, StyleSheet } from "react-native";
import React from "react";
type AccountListItemProps = {
  name: string;
  CAP: string;
  TAP: string;
};

const AccountListItem = ({ name, CAP, TAP }: AccountListItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.content}>{CAP}</Text>
      <Text style={styles.content}>{TAP}</Text>
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
