import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export interface ITodoItemProps {
  id: number;
  todoText: string;
  isCompleted: boolean;
  timeStamp: string | null;
  categoryId: number;
  bgColor: string;
}

export interface IListProps {
  id: number;
  name: string;
  taskCount: number;
  color: string;
}

export type RootStackParamList = {
  Home: undefined;
  Category: { listId: number };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export type CategoryScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Category"
>;

export interface IHeaderProps {
  text: string;
  taskCount?: number;
  bgColor: string;
  children: React.ReactNode;
}
