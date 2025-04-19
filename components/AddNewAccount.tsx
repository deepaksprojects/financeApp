import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { Fragment, useState } from "react";

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
    console.log("Account is created with", name);
  }

  return (
    <Fragment>
      <View style={styles.inputContainer}>
        {CREATE_ACCOUNT_FIELDS.map(({ id, placeHolder, value, onChange }) => (
          <TextInput
            key={id}
            placeholder={placeHolder}
            onChangeText={setName}
            style={styles.input}
            value={value}
          />
        ))}
      </View>
      <Button title="Add Button" onPress={createAccount} />
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
