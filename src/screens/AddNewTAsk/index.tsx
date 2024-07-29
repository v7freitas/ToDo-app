import React, { useState } from "react";
import {
  Categories,
  CategoryArea,
  Container,
  DateAndTimeArea,
  Header,
  InputBox,
  SelectCategory,
  TaskArea,
  Title,
  DateBox,
  TimeBox,
  ContainerRow,
  NoteArea,
  NoteBox,
  Content,
} from "./styles";
import { Category } from "../../components/TodoItem/styles";
import theme from "../../styles/theme";
import { Image, Platform, StyleSheet, Text } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import { HomeScreenProps } from "../../@types/screens";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/services/api";
import { IData } from "../../@types/screens";

const AddNewTAsk: React.FC<HomeScreenProps> = ({ navigation }) => {
  const queryClient = useQueryClient();

  const [categorySelected, setCategorySelected] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    mutation.mutate({
      id: Date.now().toString(),
      title,
      date,
      time,
      notes,
      category: categorySelected,
      completed: false,
    });
    navigation.navigate("Home");
  };

  const postTask = (newTask: IData) => {
    return api.post("/tasks", newTask);
  };

  const mutation = useMutation({
    mutationFn: postTask,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const handleToggleCategory = (categoryName: string) => {
    if (categorySelected === categoryName) {
      setCategorySelected("");
    } else {
      setCategorySelected(categoryName);
    }
  };
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Content>
        <Header source={require("../../assets/Header/Header2.png")}></Header>
        <TaskArea>
          <Title>Title</Title>
          <InputBox onChangeText={setTitle} value={title} placeholder="Title" />
        </TaskArea>
        <CategoryArea>
          <Title>Category</Title>
          <Categories>
            <SelectCategory onPress={() => handleToggleCategory("task")}>
              <Category
                $categoryColor={
                  categorySelected === "task"
                    ? theme.colors.taskColor
                    : theme.colors.white
                }
              >
                <Image
                  source={require("../../assets/Icons/FileList/file-list-line.png")}
                />
              </Category>
            </SelectCategory>
            <SelectCategory onPress={() => handleToggleCategory("freetime")}>
              <Category
                $categoryColor={
                  categorySelected === "freetime"
                    ? theme.colors.freetimeColor
                    : theme.colors.white
                }
              >
                <Image
                  source={require("../../assets/Icons/Calendar/calendar-event-fill.png")}
                />
              </Category>
            </SelectCategory>
            <SelectCategory onPress={() => handleToggleCategory("sport")}>
              <Category
                $categoryColor={
                  categorySelected === "sport"
                    ? theme.colors.sportColor
                    : theme.colors.white
                }
              >
                <Image
                  source={require("../../assets/Icons/Trophy/trophy-line.png")}
                />
              </Category>
            </SelectCategory>
          </Categories>
        </CategoryArea>
        <DateAndTimeArea>
          <ContainerRow>
            <Title>Date</Title>
            <DateBox
              onChangeText={setDate}
              value={date}
              placeholder="Date"
            ></DateBox>
          </ContainerRow>
          <ContainerRow>
            <Title>Time</Title>
            <TimeBox
              onChangeText={setTime}
              value={time}
              placeholder="Time"
            ></TimeBox>
          </ContainerRow>
        </DateAndTimeArea>
        <NoteArea>
          <Title>Notes</Title>
          <NoteBox
            onChangeText={setNotes}
            value={notes}
            multiline
            textAlignVertical="top"
          />
        </NoteArea>
      </Content>
      <PrimaryButton title="Save" onPress={handleSubmit} />
    </Container>
  );
};

export default AddNewTAsk;
