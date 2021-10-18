import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import MoreIcon from "../../assets/More.svg";
import List from "../components/List";
import TodoItem from "../components/TodoItem";
import colors from "../constants/colors";
import Header from "../components/Header";
import AddButton from "../components/AddButton";
import { useAppSelector } from "../redux/hooks";
import moment from "moment";

const Home = () => {
  const todos = useAppSelector((state) => state.todos);
  const lists = useAppSelector((state) => state.lists);

  const todayTodos = todos.filter((todo) =>
    todo.dayTimeStamp?.isSame(moment(), "date")
  );

  return (
    <View style={styles.container}>
      <Header bgColor={colors.bgColor} text="Today" RightIcon={MoreIcon} />
      <ScrollView>
        <View style={styles.todosContainer}>
          {todayTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              todoText={todo.todoText}
              isCompleted={todo.isCompleted}
              dayTimeStamp={todo.dayTimeStamp}
              hourTimeStamp={todo.hourTimeStamp}
              categoryId={todo.categoryId}
              bgColor={colors.bgColor}
              isHomePage
            />
          ))}
        </View>
        <View style={styles.listsContainer}>
          <Text style={styles.listsHeader}>Lists</Text>
          {lists.map((list) => (
            <List
              key={list.id}
              id={list.id}
              name={list.name}
              taskCount={list.taskCount}
              color={list.color}
            />
          ))}
        </View>
      </ScrollView>
      <AddButton />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.bgColor,
  },
  todosContainer: { paddingLeft: 10, marginBottom: 20 },
  listsContainer: {
    alignSelf: "flex-end",
    width: "80%",
  },
  listsHeader: {
    color: colors.textColor,
    fontSize: 14,
    fontWeight: "bold",
    opacity: 0.3,
    marginBottom: 6,
  },
});
