import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useCallback } from "react";
import AccountListItem from "./AccountListItem";
import { use$ } from "@legendapp/state/react";
import { allocations$ } from "@/src/utils";

const AccountList = () => {
  const allocations = use$(allocations$);
  const renderItem = useCallback(({ item }: any) => {
    return (
      <AccountListItem name={item?.name} CAP={item?.cap} TAP={item?.tap} />
    );
  }, []);
  return (
    <FlatList
      data={Object.values(allocations ?? {})}
      keyExtractor={(item) => item.id.toString()}
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
