import React from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";
import Calendar from "../../assets/Calendar.svg";
import Alarm from "../../assets/Alarm.svg";

interface IItemProps {
  children: string;
  colorByBgColor: string;
}

const AlarmItem = ({ children, colorByBgColor }: IItemProps) => {
  return (
    <View style={styles.container}>
      <Calendar color={colorByBgColor} style={styles.icon} />
      <Text style={[styles.timeStamp, { color: colorByBgColor }]}>
        {children}
      </Text>
    </View>
  );
};

interface IProps {
  dayTimeStamp: moment.Moment | null;
  hourTimeStamp: moment.Moment | null;
  colorByBgColor: string;
  isHomePage?: true;
}

const AlarmContainer = ({
  dayTimeStamp,
  hourTimeStamp,
  colorByBgColor,
  isHomePage,
}: IProps) => {
  return (
    <View style={styles.alarmContainer}>
      {dayTimeStamp && isHomePage === undefined && (
        <AlarmItem colorByBgColor={colorByBgColor}>
          {dayTimeStamp.isSame(moment(), "date")
            ? "Today"
            : dayTimeStamp.isSame(
                moment().set({ date: moment().date() + 1 }),
                "day"
              )
            ? "Tomorrow"
            : dayTimeStamp.format("DD-MM-YYYY")}
        </AlarmItem>
      )}
      {hourTimeStamp && (
        <AlarmItem colorByBgColor={colorByBgColor}>
          {hourTimeStamp.format("LT")}
        </AlarmItem>
      )}
    </View>
  );
};

export default AlarmContainer;

const styles = StyleSheet.create({
  alarmContainer: {
    flexDirection: "row",
    opacity: 0.4,
  },
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginRight: 6,
  },
  icon: {
    marginBottom: 2,
  },
  timeStamp: {
    marginLeft: 2,
    fontSize: 12,
  },
});
