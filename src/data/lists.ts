import colors from "../constants/colors";

export interface List {
  id: number;
  name: string;
  taskCount: number;
  color: string;
}

export enum ListName {
  Inbox = "Inbox",
  Work = "Work",
  Shopping = "Shopping",
  Family = "Family",
  Personal = "Personal",
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
    name: ListName.Work,
    taskCount: 2,
    color: colors.greenColor,
  },
  {
    id: 2,
    name: ListName.Shopping,
    taskCount: 3,
    color: colors.redColor,
  },
  {
    id: 3,
    name: ListName.Family,
    taskCount: 1,
    color: colors.yellowColor,
  },
  {
    id: 4,
    name: ListName.Personal,
    taskCount: 4,
    color: colors.purpleColor,
  },
];
