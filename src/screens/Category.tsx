import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import Header from "../components/Header";
import { lists } from "../data/lists";
import { CategoryScreenProps } from "../types/types";
import EditIcon from "../../assets/Edit.svg";
import { getColorByBgColor } from "../constants/colors";
import { todos } from "../data/todos";
import AddButton from "../components/AddButton";
import TodoItem from "../components/TodoItem";

const Category = ({ route }: CategoryScreenProps) => {
  const { listId } = route.params;
  const [chosenList] = lists.filter((list) => list.id === listId);
  const todosInList = todos.filter((todo) => todo.categoryId === listId);
  console.log(todosInList);

  return (
    <View style={[styles.container, { backgroundColor: chosenList.color }]}>
      <Header
        bgColor={chosenList.color}
        text={chosenList.name}
        taskCount={chosenList.taskCount}
      >
        <EditIcon
          color={getColorByBgColor(chosenList.color)}
          height={20}
          width={20}
          style={styles.editIcon}
        />
      </Header>
      <ScrollView style={styles.todosContainer}>
        {todosInList.map((todo) => (
          <TodoItem key={todo.id} {...todo} bgColor={chosenList.color} />
        ))}
      </ScrollView>
      <AddButton />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  todosContainer: { paddingLeft: 10, marginBottom: 20 },
  editIcon: {
    marginRight: 16,
  },
});
