import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { Fragment, useState } from "react";
import { addAllocation } from "@/utils";
import { use$ } from "@legendapp/state/react";

const AddNewAccount = () => {
  const [name, setName] = useState("");
  const [CAP, setCAP] = useState("");
  const [TAP, setTAP] = useState("");

  const CREATE_ACCOUNT_FIELDS = [
    { id: 1, placeHolder: "Name", value: name, onChange: setName },
    { id: 2, placeHolder: "CAP%", value: CAP, onChange: setCAP },
    { id: 3, placeHolder: "TAP%", value: TAP, onChange: setTAP },
  ];
  function createAccount() {
    addAllocation(name, CAP, TAP);
    setName("");
    setCAP("");
    setTAP("");
  }

  function clearAll() {}

  return (
    <Fragment>
      <View style={styles.inputContainer}>
        {CREATE_ACCOUNT_FIELDS.map(({ id, placeHolder, value, onChange }) => (
          <TextInput
            key={id}
            placeholder={placeHolder}
            onChangeText={onChange}
            style={styles.input}
            value={value}
          />
        ))}
      </View>
      <Button title="Add Button" onPress={createAccount} />
      <Button title="Clear ALL" onPress={clearAll} />
    </Fragment>
  );
};

export default AddNewAccount;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    gap: 2,
  },
  input: { flex: 1 },
});
