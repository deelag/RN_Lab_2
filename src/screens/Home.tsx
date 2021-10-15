import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import MoreIcon from "../../assets/More.svg";
import List from "../components/List";
import TodoItem from "../components/TodoItem";
import colors from "../constants/colors";
import { lists } from "../data/lists";
import { todos } from "../data/todos";
import Header from "../components/Header";
import AddButton from "../components/AddButton";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header bgColor={colors.bgColor} text="Today">
        <MoreIcon
          color={colors.iconsColor}
          height={30}
          width={30}
          style={styles.moreIcon}
        />
      </Header>
      <ScrollView>
        <View style={styles.todosContainer}>
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} bgColor={colors.bgColor} />
          ))}
        </View>
        <View style={styles.listsContainer}>
          <Text style={styles.listsHeader}>Lists</Text>
          {lists.map((list) => (
            <List key={list.id} {...list} />
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
  moreIcon: {
    marginRight: 16,
    marginTop: 10,
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
