import { ACTIONTYPE } from "../actions/todosActions";

export interface Todo {
  id: number;
  todoText: string;
  isCompleted: boolean;
  timeStamp: string | null;
  categoryId: number;
}

const initialState: Todo[] = [
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
    categoryId: 0,
  },
  {
    id: 4,
    todoText: "Buy a chocolate for Charlotte",
    isCompleted: false,
    timeStamp: null,
    categoryId: 2,
  },
];

export default function todosReducer(state = initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id === action.todoId) {
          return { ...todo, isCompleted: !action.isCompleted };
        }
        return todo;
      });
    default:
      return state;
  }
}
