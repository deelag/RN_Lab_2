import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import Marked from "../../assets/Marked.svg";
import Unmarked from "../../assets/Unmarked.svg";
import Alarm from "../../assets/Alarm.svg";
import { List } from "../data/lists";
import colors from "../constants/colors";
import { SvgProps } from "react-native-svg";

interface TodoItemTSProps {
  id: number;
  todoText: string;
  isCompleted: boolean;
  timeStamp: string | null;
  category: List;
}

const TodoItem: React.FunctionComponent<TodoItemTSProps> = ({
  todoText,
  isCompleted,
  timeStamp,
  category,
}) => {
  const Checkbox: React.FunctionComponent<SvgProps> = isCompleted
    ? Marked
    : Unmarked;
  const todoTextStyle: StyleProp<TextStyle> = isCompleted
    ? [styles.todoText, styles.todoTextCompleted]
    : styles.todoText;
  const circleStyle: StyleProp<ViewStyle> = [
    styles.todoContainerRight,
    { backgroundColor: category.color },
  ];

  return (
    <TouchableOpacity style={styles.todoContainer}>
      <View style={styles.todoContainerLeft}>
        <Checkbox />
        <View style={styles.todoTextContainer}>
          <Text style={todoTextStyle}>{todoText}</Text>
          {timeStamp ? (
            <View style={styles.alarmContainer}>
              <Alarm />
              <Text style={styles.todoTimeStamp}>{timeStamp}</Text>
            </View>
          ) : undefined}
        </View>
      </View>
      {category.name !== "Inbox" ? <View style={circleStyle} /> : undefined}
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  todoContainerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  todoContainerRight: {
    height: 10,
    width: 10,
    borderRadius: 10,
  },
  todoTextContainer: {
    width: "85%",
    padding: 10,
  },
  todoText: {
    textAlign: "left",
    fontSize: 15,
    color: colors.textColor,
  },
  todoTextCompleted: {
    opacity: 0.5,
  },
  alarmContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  todoTimeStamp: {
    marginLeft: 4,
    color: colors.textColor,
    fontSize: 12,
    opacity: 0.15,
  },
});
