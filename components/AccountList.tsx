import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useCallback } from "react";
import AccountListItem from "./AccountListItem";

const AccountList = () => {
  const renderItem = useCallback(() => {
    return <AccountListItem />;
  }, []);
  return (
    <FlatList
      data={[1, 2]}
      contentContainerStyle={styles.content}
      renderItem={renderItem}
    />
  );
};

export default AccountList;

const styles = StyleSheet.create({
  content: {
    gap: 10,
  },
});
