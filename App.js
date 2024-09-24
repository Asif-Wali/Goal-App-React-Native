import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem.js";
import GoalInput from "./components/GoalInput.js";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, SetModalVisible] = useState(false);
  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText === "") {
      return;
    }
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    hideAddGoalModal();
  }
  function deleteGoalHandler(goalId) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== goalId)
    );
  }
  function showAddGoalModal() {
    SetModalVisible(true);
  }
  function hideAddGoalModal() {
    SetModalVisible(false);
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.button}>
          <Button
            title="Add New Goal"
            color={"#a065ac"}
            onPress={showAddGoalModal}
          />
        </View>

        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalVisible}
          onCancel={hideAddGoalModal}
        />
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    color: "#a065ac",
    width: 320,
    marginBottom: 4,
  },
  goalContainer: {
    marginTop: 16,
    flex: 4,
  },
});
