import colors from "../constants/colors";

export interface List {
  id: number;
  name: string;
  taskCount: number;
  color: string;
}

export enum ListName {
  Inbox = "Inbox",
}

export const lists: List[] = [
  {
    id: 0,
    name: ListName.Inbox,
    taskCount: 1,
    color: colors.greyColor,
  },
  {
    id: 1,
    name: "Work",
    taskCount: 2,
    color: colors.greenColor,
  },
  {
    id: 2,
    name: "Shopping",
    taskCount: 3,
    color: colors.redColor,
  },
  {
    id: 3,
    name: "Family",
    taskCount: 1,
    color: colors.yellowColor,
  },
  {
    id: 4,
    name: "Personal",
    taskCount: 4,
    color: colors.purpleColor,
  },
];
