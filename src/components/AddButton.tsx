import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Plus from "../../assets/Plus.svg";
import colors from "../constants/colors";

const AddButton = () => {
  return (
    <TouchableHighlight style={styles.addButton}>
      <Plus color={colors.iconsColor} />
    </TouchableHighlight>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  addButton: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 16,
    bottom: 30,
    backgroundColor: colors.bgColor,
    width: 60,
    height: 60,
    borderRadius: 60,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
});
