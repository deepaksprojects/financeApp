import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useCallback } from "react";
import AccountListItem from "./AccountListItem";
import { use$ } from "@legendapp/state/react";
import { store$ } from "@/utils";

const AccountList = () => {
  const allocations = use$(store$.allocations);
  const renderItem = useCallback(({ item }: any) => {
    return (
      <AccountListItem name={item?.name} CAP={item?.CAP} TAP={item?.TAP} />
    );
  }, []);
  return (
    <FlatList
      data={allocations}
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
