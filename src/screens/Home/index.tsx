import React from "react";
import { Container, Header, ToDoList, ToDoListCompleted, Text } from "./styles";
import { StatusBar } from "expo-status-bar";
import TodoItem from "../../components/TodoItem";
import { HomeScreenProps, IData } from "../../@types/screens";
import PrimaryButton from "../../components/PrimaryButton";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const getTasks = async () => {
    const res = await api.get("/tasks");
    return res.data;
  };

  const { data } = useQuery({ queryKey: ["tasks"], queryFn: getTasks });

  const renderItem = ({ item }: { item: IData }) => (
    <TodoItem
      id={item.id}
      title={item.title}
      category={item.category}
      time={item.time}
      completed={item.completed}
    />
  );
  return (
    <Container>
      <StatusBar></StatusBar>
      <Header source={require("../../assets/Header/Header.png")}></Header>

      <ToDoList
        data={data?.filter((data) => {
          return !data?.completed;
        })}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <ToDoListCompleted
        ListHeaderComponent={<Text>Completed</Text>}
        data={data?.filter((data) => {
          return data?.completed;
        })}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <PrimaryButton
        title="Add New Task"
        onPress={() => navigation.navigate("AddNewTask")}
      />
    </Container>
  );
};

export default Home;
