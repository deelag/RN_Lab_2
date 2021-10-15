import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Marked from "../../assets/Marked.svg";
import Unmarked from "../../assets/Unmarked.svg";
import Alarm from "../../assets/Alarm.svg";
import { lists, ListName } from "../data/lists";
import colors, {
  addOpacityToColor,
  getColorByBgColor,
} from "../constants/colors";
import { ITodoItemProps } from "../types/types";

const TodoItem = ({
  todoText,
  isCompleted,
  timeStamp,
  categoryId,
  bgColor,
}: ITodoItemProps) => {
  const [category] = lists.filter((list) => list.id === categoryId);
  const colorByBgColor = getColorByBgColor(bgColor);
  const textColor = [styles.text, { color: colorByBgColor }];

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.containerLeft}>
        {isCompleted ? (
          <Marked color={getColorByBgColor(bgColor, colors.iconsColor)} />
        ) : (
          <Unmarked
            color={getColorByBgColor(
              bgColor,
              colors.iconsBorderColor,
              colors.lightIconsBorderColor
            )}
          />
        )}
      </View>
      <View
        style={[
          styles.containerRight,
          { borderBottomColor: addOpacityToColor(colorByBgColor, 0.2) },
        ]}
      >
        <View style={styles.textContainer}>
          <Text
            style={isCompleted ? [textColor, styles.textCompleted] : textColor}
          >
            {todoText}
          </Text>
          {timeStamp && (
            <View style={styles.alarmContainer}>
              <Alarm color={colorByBgColor} />
              <Text style={[styles.timeStamp, { color: colorByBgColor }]}>
                {timeStamp}
              </Text>
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
    borderBottomWidth: 1,
  },
  textContainer: {
    paddingVertical: 16,
  },
  text: {
    textAlign: "left",
    fontSize: 15,
  },
  textCompleted: {
    opacity: 0.5,
  },
  alarmContainer: {
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.3,
  },
  timeStamp: {
    marginLeft: 4,
    color: colors.textColor,
    fontSize: 12,
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 10,
    marginRight: 16,
  },
});
