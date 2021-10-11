import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import colors, { inverseColors } from "../constants/colors";

interface ListProps {
  name: string;
  taskCount: number;
  color: string;
}

const List: React.FunctionComponent<ListProps> = ({
  name,
  taskCount,
  color,
}) => {
  const listContainerStyle: StyleProp<ViewStyle> = [
    styles.listContainer,
    { backgroundColor: color },
  ];
  const listNamestyle: StyleProp<TextStyle> = inverseColors.includes(color)
    ? [styles.listName, { color: colors.inverseTextColor }]
    : [styles.listName, { color: colors.textColor }];

  const taskCountStyle: StyleProp<TextStyle> = inverseColors.includes(color)
    ? [styles.taskCount, { color: colors.inverseTextColor }]
    : [styles.taskCount, { color: colors.textColor }];

  return (
    <TouchableOpacity style={listContainerStyle}>
      <Text style={listNamestyle}>{name}</Text>
      <Text style={taskCountStyle}>
        {taskCount === 1 ? `1 task` : `${taskCount} tasks`}
      </Text>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  listContainer: {
    marginRight: 16,
    marginVertical: 4,
    borderRadius: 10,
    padding: 12,
  },
  listName: {
    fontSize: 16,
  },
  taskCount: {
    fontSize: 12,
    opacity: 0.5,
    color: colors.textColor,
  },
});
