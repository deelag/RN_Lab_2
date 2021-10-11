import { List, lists } from "./lists";

export interface Todo {
  id: number;
  todoText: string;
  isCompleted: boolean;
  timeStamp: string | null;
  categoryId: number;
}

export const todos: Todo[] = [
  {
    id: 0,
    todoText: "Start making a presentation",
    isCompleted: false,
    timeStamp: null,
    categoryId: 1,
  },
  {
    id: 1,
    todoText: "Pay for rent",
    isCompleted: true,
    timeStamp: "7:00 pm",
    categoryId: 4,
  },
  {
    id: 2,
    todoText: "Buy a milk",
    isCompleted: false,
    timeStamp: null,
    categoryId: 2,
  },
  {
    id: 3,
    todoText: "Don't forget to pick up Mickael from school",
    isCompleted: false,
    timeStamp: null,
    categoryId: 1,
  },
  {
    id: 4,
    todoText: "Pay for rent",
    isCompleted: false,
    timeStamp: null,
    categoryId: 2,
  },
];
