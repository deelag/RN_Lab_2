import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

interface IProps {
  name: string;
  taskCount: number;
  color: string;
}

const List: React.FC<IProps> = ({ name, taskCount, color }) => {
  const getColorByBgColor = (bgColor: string) => {
    return parseInt(bgColor.replace("#", ""), 16) > 0xffffff / 2
      ? "#000"
      : "#fff";
  };
  const renderTaskWord = "task" + (taskCount === 1 ? "" : "s");

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]}>
      <Text style={[styles.name, { color: getColorByBgColor(color) }]}>
        {name}
      </Text>
      <Text style={[styles.taskCount, { color: getColorByBgColor(color) }]}>
        {taskCount + " " + renderTaskWord}
      </Text>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
    marginVertical: 4,
    borderRadius: 10,
    padding: 12,
  },
  name: {
    fontSize: 16,
  },
  taskCount: {
    fontSize: 12,
    opacity: 0.5,
    color: colors.textColor,
  },
});
