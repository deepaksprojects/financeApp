import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Icon, IconButton, TextInput } from "react-native-paper";

const Page = () => {
  return (
    <View className="h-20 bg-white">
      {/* Add image picker */}
      <View className="flex-row m-2 bg-white ">
        <IconButton size={30} icon={"camera-plus-outline"} />
        <TextInput
          label={"Group Name"}
          autoFocus
          contentStyle={style.input}
          style={{ flex: 1 }}
        />
      </View>
      {/* Add cards */}
      {/*Add trip dates */}
      {/* dates conditionally */}
    </View>
  );
};

export default Page;

const style = StyleSheet.create({
  input: {
    backgroundColor: "white",
  },
});
