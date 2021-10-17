import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Marked from "../../assets/Marked.svg";
import Unmarked from "../../assets/Unmarked.svg";
import Alarm from "../../assets/Alarm.svg";
import colors, {
  addOpacityToColor,
  getColorByBgColor,
} from "../constants/colors";
import { DefaultListName } from "../redux/reducers/listsReducer";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { completeTodo } from "../redux/actions/todosActions";

interface IProps {
  id: number;
  todoText: string;
  isCompleted: boolean;
  timeStamp: string | null;
  categoryId: number;
  bgColor: string;
}

const TodoItem = ({
  id,
  todoText,
  isCompleted,
  timeStamp,
  categoryId,
  bgColor,
}: IProps) => {
  const lists = useAppSelector((state) => state.lists);

  const category = lists.find((list) => list.id === categoryId);
  const colorByBgColor = getColorByBgColor(bgColor);
  const textStyle = [styles.text, { color: colorByBgColor }];

  const dispatch = useAppDispatch();

  const onTodoPress = () => dispatch(completeTodo(id, isCompleted));

  return (
    <TouchableOpacity style={styles.container} onPress={onTodoPress}>
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
            style={isCompleted ? [textStyle, styles.textCompleted] : textStyle}
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
        {category !== undefined && category.name !== DefaultListName.Inbox && (
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
    opacity: 0.4,
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
