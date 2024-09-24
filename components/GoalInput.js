import React from "react";
import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      
      <View style={styles.inputContainer}>
      <Image style={styles.image} source={require("../assets/images/icons8-goal-64.png")}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal Here"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={"#f31282"} />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color={"#5e0acc"} />
          </View>
          
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b"
  },
  image:{
    height: 100,
    width: 100,
    marginBottom: 32
  },
  buttonContainer:{
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 48,

  },
  button:{
    width: 100,
    
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
});
