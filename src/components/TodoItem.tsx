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
    styles.circle,
    { backgroundColor: category.color },
  ];

  return (
    <TouchableOpacity style={styles.todoContainer}>
      <View style={styles.todoContainerLeft}>
        <Checkbox />
      </View>
      <View style={styles.todoContainerRight}>
        <View style={styles.todoTextContainer}>
          <Text style={todoTextStyle}>{todoText}</Text>
          {timeStamp ? (
            <View style={styles.alarmContainer}>
              <Alarm />
              <Text style={styles.todoTimeStamp}>{timeStamp}</Text>
            </View>
          ) : undefined}
        </View>
        {category.name !== "Inbox" ? <View style={circleStyle} /> : undefined}
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  todoContainerLeft: {
    width: "8%",
    flexDirection: "row",
    alignItems: "center",
  },
  todoContainerRight: {
    marginLeft: "2%",
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: colors.bottomLineColor,
    borderBottomWidth: 1,
  },
  todoTextContainer: {
    paddingVertical: 10,
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
  circle: {
    height: 10,
    width: 10,
    borderRadius: 10,
    marginRight: 16,
  },
});
