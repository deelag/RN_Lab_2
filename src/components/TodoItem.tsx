import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Marked from "../../assets/Marked.svg";
import Unmarked from "../../assets/Unmarked.svg";
import Alarm from "../../assets/Alarm.svg";
import { List, ListName } from "../data/lists";
import colors from "../constants/colors";

interface IProps {
  id: number;
  todoText: string;
  isCompleted: boolean;
  timeStamp: string | null;
  category: List;
}

const TodoItem: React.FC<IProps> = ({
  todoText,
  isCompleted,
  timeStamp,
  category,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.containerLeft}>
        {isCompleted ? (
          <Marked color={colors.checkedboxBgColor} />
        ) : (
          <Unmarked color={colors.uncheckedboxBorderColor} />
        )}
      </View>
      <View style={styles.containerRight}>
        <View style={styles.textContainer}>
          <Text
            style={
              isCompleted ? [styles.text, styles.textCompleted] : styles.text
            }
          >
            {todoText}
          </Text>
          {timeStamp && (
            <View style={styles.alarmContainer}>
              <Alarm />
              <Text style={styles.timeStamp}>{timeStamp}</Text>
            </View>
          )}
        </View>
        {category.name !== ListName.Inbox && (
          <View style={[styles.circle, { backgroundColor: category.color }]} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerLeft: {
    width: "8%",
    flexDirection: "row",
    alignItems: "center",
  },
  containerRight: {
    marginLeft: "2%",
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: colors.bottomLineColor,
    borderBottomWidth: 1,
  },
  textContainer: {
    paddingVertical: 10,
  },
  text: {
    textAlign: "left",
    fontSize: 15,
    color: colors.textColor,
  },
  textCompleted: {
    opacity: 0.5,
  },
  alarmContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeStamp: {
    marginLeft: 4,
    color: colors.textColor,
    fontSize: 12,
    opacity: 0.15,
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 10,
    marginRight: 16,
  },
});
