import colors from "../constants/colors";

export type List = Readonly<{
  id: number;
  name: string;
  taskCount: number;
  color: string;
}>;

export const lists: List[] = [
  {
    id: 0,
    name: "Inbox",
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
