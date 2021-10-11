import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MoreIcon from "../../assets/More.svg";
import List from "../components/List";
import TodoItem from "../components/TodoItem";
import colors from "../constants/colors";
import { lists } from "../data/lists";
import { todos } from "../data/todos";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Today</Text>
        <TouchableOpacity>
          <MoreIcon height={30} width={30} style={styles.moreIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.todosContainer}>
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </View>
        <View style={styles.listsContainer}>
          <Text style={styles.listsHeader}>Lists</Text>
          {lists.map((list) => (
            <List key={list.id} {...list} />
          ))}
        </View>
      </ScrollView>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  headerText: {
    marginLeft: 50,
    fontSize: 26,
    fontWeight: "bold",
  },
  moreIcon: {
    marginRight: 10,
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
