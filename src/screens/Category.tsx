import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import Header from "../components/Header";
import { lists } from "../data/lists";
import { RootStackParamList } from "../types/types";
import EditIcon from "../../assets/Edit.svg";
import { todos } from "../data/todos";
import AddButton from "../components/AddButton";
import TodoItem from "../components/TodoItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Category">;

const Category = ({ route }: Props) => {
  const { listId } = route.params;
  // TODO: check if this is the right way to do it
  const chosenList = lists.find((list) => list.id === listId);
  if (chosenList === undefined) return <View />;
  const todosInList = todos.filter((todo) => todo.categoryId === listId);

  return (
    <View style={[styles.container, { backgroundColor: chosenList.color }]}>
      <Header
        bgColor={chosenList.color}
        text={chosenList.name}
        taskCount={chosenList.taskCount}
        RightIcon={EditIcon}
      />
      <ScrollView style={styles.todosContainer}>
        {todosInList.map((todo) => (
          <TodoItem
            key={todo.id}
            todoText={todo.todoText}
            isCompleted={todo.isCompleted}
            timeStamp={todo.timeStamp}
            categoryId={todo.categoryId}
            bgColor={chosenList.color}
          />
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
});
