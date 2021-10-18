import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { DefaultListName } from "../redux/reducers/listsReducer";
import { completeTodo } from "../redux/actions/todosActions";
import { Todo } from "../redux/reducers/todosReducer";
import Marked from "../../assets/Marked.svg";
import Unmarked from "../../assets/Unmarked.svg";
import colors, {
  addOpacityToColor,
  getColorByBgColor,
} from "../constants/colors";
import AlarmContainer from "./AlarmContainer";

interface IProps extends Todo {
  bgColor: string;
  isHomePage?: true;
}

const TodoItem = ({
  id,
  todoText,
  isCompleted,
  dayTimeStamp,
  hourTimeStamp,
  categoryId,
  bgColor,
  isHomePage,
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
          {(dayTimeStamp || hourTimeStamp) && (
            <AlarmContainer
              dayTimeStamp={dayTimeStamp}
              hourTimeStamp={hourTimeStamp}
              colorByBgColor={colorByBgColor}
              isHomePage={isHomePage}
            />
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
    marginLeft: "4%",
    width: "88%",
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
  circle: {
    height: 10,
    width: 10,
    borderRadius: 10,
    marginRight: 16,
  },
});
