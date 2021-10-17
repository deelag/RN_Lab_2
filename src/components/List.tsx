import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import colors, { getColorByBgColor } from "../constants/colors";
import { RootStackParamList } from "../types/types";
import { renderTaskWord } from "../constants/renderTaskCount";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export interface IProps {
  id: number;
  name: string;
  taskCount: number;
  color: string;
}

const List = ({ id, name, taskCount, color }: IProps) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const navigateOnPress = () => {
    navigation.navigate("Category", {
      listId: id,
    });
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={navigateOnPress}
    >
      <Text style={[styles.name, { color: getColorByBgColor(color) }]}>
        {name}
      </Text>
      <Text style={[styles.taskCount, { color: getColorByBgColor(color) }]}>
        {taskCount + " " + renderTaskWord(taskCount)}
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
