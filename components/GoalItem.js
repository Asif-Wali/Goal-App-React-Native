import { View, StyleSheet, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  function HandleDelete(){
    props.onDeleteItem(props.id)
  }

  return (
    
    <View style={styles.goalItem}>
    <Pressable onPress={HandleDelete} android_ripple={{color:"#210644"}} style={({pressed})=>{pressed && styles.pressedItem}}>
      <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
    </View>
    
  );
}
const styles = StyleSheet.create({

  goalItem: {
    margin: 8,
    width: 340,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem:{
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 12,
  },
});
