import { StackNavigationProp } from "@react-navigation/stack";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

interface IData {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  notes: string;
  completed: boolean;
}
