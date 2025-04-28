import { View, Text, Button } from "react-native";
import React, { useCallback } from "react";
import { Link } from "expo-router";

const NoGroups = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Link asChild href={"/addGroup"}>
        <Text>Start a new group</Text>
      </Link>
    </View>
  );
};

export default NoGroups;
